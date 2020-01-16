

const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("dockerbuild", "docker:dind");
  job.tasks = [
    "echo Hello",
    "echo World",
    "cd /src/image-processing",
    "docker build -t packageimage:latest .",
    "docker images"

  ];


  job.run();
});
