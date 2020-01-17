//var driver = project.secrets.DOCKER_DRIVER || "overlay"
const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("build", "alpine:3.4");
  job.privileged = true;
//  job.env = {
//  DOCKER_DRIVER: "overlay"
//  }
//  job.allowHostMounts = true;
  job.tasks = [
    "echo http://dl-cdn.alpinelinux.org/alpine/latest-stable/community >> /etc/apk/repositories",
    "apk add docker",
    "apk update",
    "rc-update add docker boot",
    "service docker start",
    "service docker status",

//    "dockerd-entrypoint.sh &",
    "sleep 10",
//    "cd /etc/init.d/",
//    "ls -l",
    "cd /src/image-processing",
    "ls -l",
    "docker login -u mayursuccessive -p Successive@123",
    "echo docker login done",
    //"docker build -t mayursuccessive/packageimage:latest .",
    //"echo docker build done",
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
