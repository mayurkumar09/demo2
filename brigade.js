const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("buildfinal", "docker:dind");
  job.privileged = true;
  
  job.tasks = [
      "cd /src",
      "ls -l",
      "dockerd &",
      "sleep 20",
      "docker ps"
  ];
  job.run();
});
