const urlControllers = app => {
  app.get("/", (request, response) => {
    response.send("Hello world");
  });
};

export default urlControllers;
