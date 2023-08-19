import * as http from "node:http";
import { routes } from "./src/adapters/entry/routes.js";

function main() {
  const server = http.createServer((req, res) => {
    const routeHandlers = routes[req.method];
    if (routeHandlers) {
      const matchedRoute = routeHandlers.find(
        (route) => route.path === req.url
      );
      if (matchedRoute) {
        matchedRoute.handler(req, res);
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Rota não encontrada" }));
      }
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Método não suportado" }));
    }
  });

  const PORT = 8000;
  server.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
  });
}

main();
