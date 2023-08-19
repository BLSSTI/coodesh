import * as path from "node:path";
const __dirname = './';
import * as fs from "node:fs";
import { planFilteredUseCase } from "../../app/useCases/plans/plans.useCase.js";
import { plansController } from "../controllers/plansController.js";
export const routes = {
    GET: [
      {
        path: "/",
        handler: (req, res) => {
          const indexPath = path.join(__dirname, "index.html");
          fs.readFile(indexPath, "utf-8", (err, content) => {
            if (err) {
              console.error("Erro ao ler o arquivo index.html:", err);
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("Erro interno no servidor");
            } else {
              res.writeHead(200, { "Content-Type": "text/html" });
              res.end(content);
            }
          });
        },
      },
      {
        path: "/api/plans",
        handler: async (req, res) => {
          plansController.handlePlansRequest(req,res);
        },
      },
    ],
  };
  