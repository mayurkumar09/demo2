

const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("dockerbuild", "docker:dind");
  job.tasks = [
    "echo Hello",
    "echo World",
    "cd /src/image-processing",
    "sudo docker build -t packageimage:latest .",
    "sudo docker images"

  ];


  job.run();
});
