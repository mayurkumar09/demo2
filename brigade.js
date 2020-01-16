
//var driver = project.secrets.DOCKER_DRIVER || "overlay"
const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("job", "docker:dind");
  job.privileged = true;
//  job.storage.enabled = true;
  job.env = {
  DOCKER_DRIVER: "overlay"
  }

  job.tasks = [
   // "echo Hello",
  //  "echo World",
 //   "dockerd-entrypoint.sh &",
    "dockerd &",
    "sleep 5",
    "cd /src/image-processing",
    "docker login -u mayursuccessive -p Successive@123",
    "docker build -t mayursuccessive/packageimage:latest .",
    "docker images",
    "docker ps"

  ];


  job.run();
});
