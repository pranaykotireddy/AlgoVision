import express from "express";
import { exec } from "child_process";
import { writeFileSync, unlinkSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { randomUUID } from "crypto";

const router = express.Router();

const TRACER = `
import sys, json, io
from contextlib import redirect_stdout

user_code = sys.stdin.read()
frames = []
output_buffer = io.StringIO()

def make_serializable(obj):
    if isinstance(obj, (int, float, str, bool, type(None))):
        return obj
    if isinstance(obj, (list, tuple)):
        return [make_serializable(x) for x in obj]
    if isinstance(obj, dict):
        return {str(k): make_serializable(v) for k, v in obj.items()}
    # Handle custom class instances
    if hasattr(obj, '__dict__'):
        return {k: make_serializable(v) for k, v in obj.__dict__.items()}
    return str(obj)

def tracer(frame, event, arg):
    if event == 'line':
        try:
            local_vars = {k: make_serializable(v) for k, v in frame.f_locals.items() if not k.startswith('__')}
            frames.append({
                'line': frame.f_lineno,
                'variables': local_vars,
                'output': output_buffer.getvalue()
            })
        except Exception:
            pass
    return tracer

try:
    sys.settrace(tracer)
    with redirect_stdout(output_buffer):
        exec(user_code, {'__name__': '__main__'})
    sys.settrace(None)
except Exception as e:
    frames.append({'line': 0, 'variables': {}, 'error': str(e)})

print(json.dumps(frames))
`;

router.post("/", async (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ error: "Code required" });

  const tmpFile = join(tmpdir(), `trace-${randomUUID()}.py`);
  try {
    writeFileSync(tmpFile, TRACER);
    
    // Run python
    exec(`python "${tmpFile}"`, { input: code, timeout: 5000 }, (err, stdout, stderr) => {
      try { unlinkSync(tmpFile); } catch {}
      if (err && !stdout) {
         return res.status(500).json({ error: "Python error: " + (stderr || err.message) });
      }
      try {
        const frames = JSON.parse(stdout);
        res.json(frames);
      } catch (e) {
        res.status(500).json({ error: "Failed to parse Python output: " + stdout });
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;