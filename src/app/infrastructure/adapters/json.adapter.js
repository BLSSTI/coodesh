import * as fs from "fs";

const readJsonFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao ler o arquivo JSON:", error.message);
    return null;
  }
};

export { readJsonFile };
