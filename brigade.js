const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("buildfinal", "docker:dind");
  job.privileged = true;
  job.env = {
    "DOCKER_DRIVER": "overlay"
    }
  job.tasks = [
      "dockerd &",
      "sleep 10",
      "cd /src",
      "ls -l",
 //     "docker info",
      "docker ps"
  ];

  job.run();
});