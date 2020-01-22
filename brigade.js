
const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("buildfinal", "docker:dind");
  job.privileged = true;
  
  job.tasks = [
      "dockerd &",
      "sleep 20",
      "cd /src",
      "ls -l",
      "docker ps"
  ];
  job.run();
});