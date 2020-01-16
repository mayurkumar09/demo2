

//var driver = project.secrets.DOCKER_DRIVER || "overlay"
const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("dockerbuild", "docker:dind");
  job.privileged = true;

  job.tasks = [
    "dockerd-entrypoint.sh &",

 //"dockerd &",
    "sleep 10",
    "cd /src/image-processing",
    "ls",
    "docker login -u mayursuccessive -p Successive@123",
    "echo docker login done",
    "docker build -t mayursuccessive/packageimage:latest .",
    "echo docker build done",
    "docker images",
    "docker ps"

];


  job.run();
});


//  job.storage.enabled = true;
//job.env = {
//  DOCKER_DRIVER: "overlay"
//  }

// "dockerd-entrypoint.sh &",
  //  "export DOCKERD_PID=$!",
  //  `printf "waiting for docker daemon"; while ! docker info >/dev/null 2>&1; do printf .; sleep 1; done; echo`,
