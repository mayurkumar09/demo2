
//var driver = project.secrets.DOCKER_DRIVER || "overlay"
const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("dockerbuild", "docker:dind");
  job.privileged = true;
  job.storage.enabled = true;
  job.env = {
  DOCKER_DRIVER: "overlay"
  }

  job.tasks = [
    "echo Hello",
    "echo World",
    "dockerd-entrypoint.sh &",
//    "dockerd &",
    "sleep 20",
    "cd /src/image-processing",
    "docker build -t mayursuccessive/packageimage:latest .",
    "docker images",
    "docker ps"

  ];


  job.run();
});
