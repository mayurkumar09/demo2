//var driver = project.secrets.DOCKER_DRIVER || "overlay"
const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("build", "docker:dind");
  job.privileged = true;
  job.env = {
    DOCKER_DRIVER: "overlay"
  }
  //  job.allowHostMounts = true;
  job.tasks = [
    "dockerd-entrypoint.sh &",
    "sleep 30",
    "docker --help"
    // "echo 'u r in root'",
    // "apt-get update",
    // "apt-get install -y docker",
    // "echo docker installed",
    // "cd /etc/init.d/",
    // "ls -l",
    // //   "./etc/init.d/docker start",
    // "./usr/bin/docker start",
    // "sleep 10",
    // //    "cd /etc/init.d/",
    // //    "ls -l",
    // "cd /src/image-processing",
    // "ls -l",
    // "docker login -u mayursuccessive -p Successive@123",
    // "echo docker login done",
    // //"docker build -t mayursuccessive/packageimage:latest .",
    // //"echo docker build done",
    // "docker images",
    // "docker ps"

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
