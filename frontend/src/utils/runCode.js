import axios from "axios";

// 🔥 Point to your backend (NOT the API directly)
const BACKEND_URL = "http://localhost:5000/api/run";

export async function runCode({ languageId, code, stdin = "" }) {
  try {
    const { data } = await axios.post(BACKEND_URL, {
      language: languageId,
      code: code,
      stdin: stdin,
    });

    return {
      success: data.status === "success",
      stdout: data.output || "",
      stderr: data.error || "",
      exitCode: data.exit_code ?? 0,
    };
  } catch (err) {
    return {
      success: false,
      stdout: "",
      stderr: err?.response?.data?.error || err.message || "Failed to reach compiler.",
      exitCode: -1,
    };
  }
}