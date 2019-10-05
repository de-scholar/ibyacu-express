import "dotenv/config";

const urlControllers = app => {
  app.route("/").get((request, response) => {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    response.send(`{"username" : "${username}","password" : "${password}"}`);
  });
};

export default urlControllers;
