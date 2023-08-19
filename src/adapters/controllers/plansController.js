import { planFilteredUseCase } from "../../app/useCases/plans/plans.useCase.js";

const plansController = {
  async handlePlansRequest(req, res) {
    try {
      const result =  planFilteredUseCase();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result));
    } catch (error) {
      console.error("Erro ao executar use case:", error);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Erro interno no servidor" }));
    }
  },
};

export { plansController };
