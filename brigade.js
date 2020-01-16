

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
    "sleep 20",
    "cd /src/image-processing",
    "docker build -t mayursuccessive/packageimage:latest .",
    "docker images"

  ];


  job.run();
});
