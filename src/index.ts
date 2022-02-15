import express from "express";
import nunjucks from "nunjucks";
import request from "@fewlines-education/request";

const app = express();

app.use(express.static("public"));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.get("/", (request, response) => {
  response.send("Page de présentation");
});

app.get("/movie", (request, response) => {
  response.send("Page de présentation");
  request(
    `https://swapi.dev/api/people/"`,
    {
      method: "GET",
      body: JSON.stringify("vehicles"),
      headers: { "Content-Type": "application/json" },
    },
    (error, body) => {
      if (error) {
        console.error(error);
      } else {
        const data = JSON.parse(body);
        console.log(data);
      }
    },
  );
});
app.get("/person", (request, response) => {
  response.send("Page de présentation");
});
app.get("/planets", (request, response) => {
  response.send("Page de présentation");
});
app.get("/spaceships", (request, response) => {
  response.send("Page de présentation");
});
app.get("/species", (request, response) => {
  response.send("Page de présentation");
});
app.get("/vehicles", (request, response) => {
  response.send("Page de présentation");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
