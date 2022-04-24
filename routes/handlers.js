let request_number = 0;

const pino = require(`pino`); // Import the Pino Library
const { default: PinoPretty } = require("pino-pretty");

const logger = pino({
  transport: {
    target: `pino-pretty`,
    options: { translateTime: true },
  },
});

const indexHandler = (req, res) => {
  var current_time = new Date();
  request_number += 1;
  logger.info(`${current_time} Request no.${request_number}`);

  //console.log(`${current_time} Request no.${request_number}`);

  res.send(
    `Hello! The current server time in is ${current_time}. The server has responded to ${request_number} requests since it started.`
  );
};

const sayHelloHandler = (req, res) => {
  const name = req.params.name || "person";

  logger.info(`${current_time} ${name}`);
  //console.log(`${current_time} ${name}`);
  res.send(`Hello ${name}!`);
};

module.exports = { indexHandler, sayHelloHandler };
