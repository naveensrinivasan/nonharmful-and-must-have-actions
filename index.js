const core = require("@actions/core");
const request = require("request");

try {
  const mySecret = core.getInput("my-secret");
  console.log(`DO SOMETHING REALLY COOL WITH THE SECRET FOR YEARS`);
} catch (error) {
  core.setFailed(error.message);
}
