import express, { response } from "express";

const app = express();

/**
 * GET    => Buscar (Obter) uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar (Atualizar) uma informação
 * DELETE => Remover (Apagar) uma informação
 * PATCH  => Alterar uma informação específica
 */

app.get("/test", (request, response) => {
  // Request => Entrando
  // Response => Saindo
  return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW método POST");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));