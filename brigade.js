
//var driver = project.secrets.DOCKER_DRIVER || "overlay"
const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("dockerbuild", "dhirwanashish/asd-devops:v1");
  job.privileged = true;
//  job.storage.enabled = true;
  job.env = {
  DOCKER_DRIVER: "overlay"
  }

  job.tasks = [
    "echo Hello",
    "echo World",
    "dockerd-entrypoint.sh &",
    "export DOCKERD_PID=$!",
    `printf "waiting for docker daemon"; while ! docker info >/dev/null 2>&1; do printf .; sleep 1; done; echo`

  //  "dockerd &",
    "sleep 20",
    "cd /src/image-processing",
    "docker login -u mayursuccessive -p Successive@123",
    "docker build -t mayursuccessive/packageimage:latest .",
    "docker images",
    "docker ps"

  ];


  job.run();
});
