
var driver = mayurkumar09/demo2.secrets.DOCKER_DRIVER || "overlay"
const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("dockerbuild", "docker:dind");
  job.privileged = true;
  job.env = {
  DOCKER_DRIVER: driver
  }

  job.tasks = [
    "echo Hello",
    "echo World",
    "dockerd-entrypoint.sh &",
   // "dockerd &",
    "sleep 20",
    "cd /src/image-processing",
    "docker build -t mayursuccessive/packageimage:latest .",
    "docker images",
    "docker ps"

  ];


  job.run();
});
