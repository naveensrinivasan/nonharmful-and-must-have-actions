const core = require("@actions/core");
const request = require("request");

try {
  const mySecret = core.getInput("my-secret");
  console.log(`I am not doing anything to yiour secrets`);
} catch (error) {
  core.setFailed(error.message);
}
