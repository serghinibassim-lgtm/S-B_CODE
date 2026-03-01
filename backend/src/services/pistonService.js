import axios from "axios";

export const runCodeService = async (language, code) => {
  const response = await axios.post(
    "https://emkc.org/api/v2/piston/execute",
    {
      language: language,
      version: "3.10.0",
      files: [
        {
          name: "main.py",
          content: code
        }
      ]
    },
    {
      headers: { "Content-Type": "application/json" }
    }
  );

  return response.data;
};
