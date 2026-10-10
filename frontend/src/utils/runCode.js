import axios from "axios";

const PISTON_URL = "https://emkc.org/api/v2/piston/execute";

export async function runCode({ languageId, version, code, stdin = "" }) {
  const payload = {
    language: languageId,
    version: version,
    files: [{ content: code }],
    stdin: stdin,
  };

  try {
    const { data } = await axios.post(PISTON_URL, payload, {
      headers: { "Content-Type": "application/json" },
      timeout: 15000,
    });

    const run = data.run || {};
    return {
      success: !run.stderr,
      stdout: run.stdout || "",
      stderr: run.stderr || "",
      exitCode: run.code ?? 0,
    };
  } catch (err) {
    return {
      success: false,
      stdout: "",
      stderr:
        err?.response?.data?.message ||
        err.message ||
        "Failed to reach Piston API.",
      exitCode: -1,
    };
  }
}
