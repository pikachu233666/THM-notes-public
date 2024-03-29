"use strict";(self.webpackChunkTHM_Notes=self.webpackChunkTHM_Notes||[]).push([[7548],{8449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(4848),s=n(8453);const r={},c="Basic Docker Syntax",l={id:"Others/Intro to Docker",title:"Intro to Docker",description:"The syntax for Docker can be categorised into four main groups",source:"@site/docs/Others/Intro to Docker.md",sourceDirName:"Others",slug:"/Others/Intro to Docker",permalink:"/docs/Others/Intro to Docker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"THMSidebar",previous:{title:"Intro to Containerisation",permalink:"/docs/Others/Intro to Containerisation"},next:{title:"Introductory Researching",permalink:"/docs/Others/Introductory Researching"}},o={},d=[{value:"Managing Docker Images",id:"managing-docker-images",level:2},{value:"Running Container",id:"running-container",level:2},{value:"Listing Running Containers",id:"listing-running-containers",level:2},{value:"Build Container",id:"build-container",level:2},{value:"Level Up",id:"level-up",level:2},{value:"Optimising",id:"optimising",level:2},{value:"docker-compose.yml",id:"docker-composeyml",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"#tools"}),"\n",(0,i.jsx)(t.h1,{id:"basic-docker-syntax",children:"Basic Docker Syntax"}),"\n",(0,i.jsx)(t.p,{children:"The syntax for Docker can be categorised into four main groups"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Running a container"}),"\n",(0,i.jsx)(t.li,{children:"Managing & Inspecting containers"}),"\n",(0,i.jsx)(t.li,{children:"Managing Docker images"}),"\n",(0,i.jsx)(t.li,{children:"Docker daemon stats and information"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"managing-docker-images",children:"Managing Docker Images"}),"\n",(0,i.jsxs)(t.p,{children:["Docker Pull",(0,i.jsx)(t.code,{children:" Downloading the images, we can use tags to specific the version Syntax:"}),"docker pull image",":tag","(not necessary;dafault is latest)"]}),"\n",(0,i.jsxs)(t.p,{children:["Docker Image x/y/z\nManaging the images\nSyntax: ",(0,i.jsx)(t.code,{children:"docker image COMMAND"})]}),"\n",(0,i.jsxs)(t.p,{children:["Docker Image ls\nList all the images we downloaded\nSyntax: ",(0,i.jsx)(t.code,{children:"docker image ls"})]}),"\n",(0,i.jsxs)(t.p,{children:["Docker Image rm\nRemove an images\nSyntax: ",(0,i.jsx)(t.code,{children:"docker image rm image:tag(name or ID)"})]}),"\n",(0,i.jsx)(t.h2,{id:"running-container",children:"Running Container"}),"\n",(0,i.jsxs)(t.p,{children:["Docker Run\nCreating running containers from images\nSyntax: ",(0,i.jsx)(t.code,{children:"docker run [OPTIONS] IMAGE_NAME [COMMAND] [ARGUMENTS]"})]}),"\n",(0,i.jsxs)(t.p,{children:['"Interactively" by providing the ',(0,i.jsx)(t.code,{children:"-it"})," switch in the [OPTIONS] command. This will allow us to interact with the container directly."]}),"\n",(0,i.jsxs)(t.p,{children:["We can spawn a shell within the container by providing ",(0,i.jsx)(t.code,{children:"/bin/bash"})," as the [COMMAND] part. This argument is where you will place what commands you want to run within the container (such as a file, application or shell)."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"[OPTION]"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Explanation"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Relevant Dockerfile Instruction"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Example"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"-d"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:'This argument tells the container to start in "detached" mode. This means that the container will run in the background.'}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"docker run -d helloworld"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"-it"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:'This argument has two parts. The "i" means run interactively, and "t" tells Docker to run a shell within the container. We would use this option if we wish to interact with the container directly once it runs.'}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"docker run -it helloworld"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"-v"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:'This argument is short for "Volume" and tells Docker to mount a directory or file from the host operating system to a location within the container. The location these files get stored is defined in the Dockerfile'}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"VOLUME"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"docker run -v /host/os/directory:/container/directory helloworld"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"-p"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This argument tells Docker to bind a port on the host operating system to a port that is being exposed in the container. You would use this instruction if you are running an application or service (such as a web server) in the container and wish to access the application/service by navigating to the IP address."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"EXPOSE"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"docker run -p 80:80 webserver"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"--rm"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This argument tells Docker to remove the container once the container finishes running whatever it has been instructed to do."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"docker run --rm helloworld"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"--name"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This argument lets us give a friendly, memorable name to the container. When a container is run without this option, the name is two random words. We can use this open to name a container after the application the container is running."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"docker run --name helloworld"})})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://docs.docker.com/engine/reference/run/",children:"Docker run documentation"})}),"\n",(0,i.jsx)(t.h2,{id:"listing-running-containers",children:"Listing Running Containers"}),"\n",(0,i.jsxs)(t.p,{children:["Docker ps\nListing running countainers\nSyntax: ",(0,i.jsx)(t.code,{children:"docker ps"}),"\nThis command will also show information about the container"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The container's ID"}),"\n",(0,i.jsx)(t.li,{children:"What command is the container running"}),"\n",(0,i.jsx)(t.li,{children:"When was the container created"}),"\n",(0,i.jsx)(t.li,{children:"How long has the container been running"}),"\n",(0,i.jsx)(t.li,{children:"What ports are mapped"}),"\n",(0,i.jsx)(t.li,{children:"The name of the container"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To list all containers (even stopped), we can use ",(0,i.jsx)(t.code,{children:"docker ps -a"})]}),"\n",(0,i.jsx)(t.h1,{id:"dockerfiles",children:"Dockerfiles"}),"\n",(0,i.jsx)(t.p,{children:"Dockerfiles is a formatted text file which essentially serves as an instruction manual for what containers should do and ultimately assembles a Docker image. It contains the commands the container should execute when it is built."}),"\n",(0,i.jsxs)(t.p,{children:["Dockerfiles are formatted in ",(0,i.jsx)(t.code,{children:"INSTRUCTION argument"})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Instruction"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Description"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Example"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"FROM"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This instruction sets a build stage for the container as well as setting the base image (operating system). All Dockerfiles must start with this."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"FROM ubuntu"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"RUN"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This instruction will execute commands in the container within a new layer."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"RUN whoami"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"COPY"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["This instruction copies files from the local system to the working directory in the container (the syntax is similar to the ",(0,i.jsx)(t.code,{children:"cp"})," command)."]}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"COPY /home/cmnatic/myfolder/app/"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"WORKDIR"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["This instruction sets the working directory of the container. (similar to using ",(0,i.jsx)(t.code,{children:"cd"})," on Linux)."]}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"WORKDIR /   (sets to the root of the filesystem in the container)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"CMD"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This instruction determines what command is run when the container starts (you would use this to start a service or application)."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"CMD /bin/sh -c script.sh"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"EXPOSE"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This instruction is used to tell the person who runs the container what port they should publish when running the container."}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["EXPOSE 80  (tells the person running the container to publish to port 80 i.e. ",(0,i.jsx)(t.code,{children:"docker run -p 80:80"}),")"]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Use the \u201cUbuntu\u201d (version 22.04) operating system as the base."}),"\n",(0,i.jsx)(t.li,{children:"Set the working directory to be the root of the container."}),"\n",(0,i.jsx)(t.li,{children:"Create the text file \u201chelloworld.txt\u201d."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:"# THIS IS A COMMENT\n# Use Ubuntu 22.04 as the base operating system of the container\nFROM ubuntu:22.04\n\n# Set the working directory to the root of the container\nWORKDIR / \n\n# Create helloworld.txt\nRUN touch helloworld.txt\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The commands that you can run via the ",(0,i.jsx)(t.code,{children:"RUN"}),"\xa0instruction will depend on the operating system you use in the ",(0,i.jsx)(t.code,{children:"FROM"}),"\xa0instruction."]}),"\n",(0,i.jsx)(t.h2,{id:"build-container",children:"Build Container"}),"\n",(0,i.jsxs)(t.p,{children:["Docker Build\nCreate an image\nSyntax: ",(0,i.jsx)(t.code,{children:"docker build -t NAME PATH"})]}),"\n",(0,i.jsx)(t.p,{children:"We must provide the location of the docker file"}),"\n",(0,i.jsxs)(t.p,{children:["We can provide the name by using ",(0,i.jsx)(t.code,{children:"-t"})]}),"\n",(0,i.jsxs)(t.p,{children:["To see if the image has been build, use ",(0,i.jsx)(t.code,{children:"docker image ls"})]}),"\n",(0,i.jsx)(t.h2,{id:"level-up",children:"Level Up"}),"\n",(0,i.jsx)(t.p,{children:"To create a basic apache server"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:'# THIS IS A COMMENT\nFROM ubuntu:22.04\n\n# Update the APT repository to ensure we get the latest version of apache2\nRUN apt-get update -y \n\n# Install apache2\nRUN apt-get install apache2 -y\n\n# Tell the container to expose port 80 to allow us to connect to the web server\nEXPOSE 80 \n\n# Tell the container to run the apache2 service\nCMD ["apache2ctl", "-D","FOREGROUND"]\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Build: ",(0,i.jsx)(t.code,{children:"docker build -t webserver ."}),"\nRun: ",(0,i.jsx)(t.code,{children:"docker run -d --name webserver -p 80:80\xa0 webserver"})]}),"\n",(0,i.jsx)(t.h2,{id:"optimising",children:"Optimising"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Only installing the essential packages. What\u2019s nice about containers is that they\u2019re practically empty from the get-go - we have complete freedom to decide what we want."}),"\n",(0,i.jsx)(t.li,{children:"Removing cached files (such as APT cache or documentation installed with tools). The code within a container will only be executed once (on build!), so we don\u2019t need to store anything for later use."}),"\n",(0,i.jsxs)(t.li,{children:["Using minimal base operating systems in our ",(0,i.jsx)(t.code,{children:"FROM"})," instruction. Even though operating systems for containers such as Ubuntu are already pretty slim, consider using an even more stripped-down version (i.e. ",(0,i.jsx)(t.code,{children:"ubuntu:22.04-minimal"}),"). Or, for example, using Alpine (which can be as small as 5.59MB!)."]}),"\n",(0,i.jsx)(t.li,{children:"Minimising the number of layers"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Each instruction (I.E. ",(0,i.jsx)(t.code,{children:"FROM"}),", ",(0,i.jsx)(t.code,{children:"RUN"}),", etc.) is run in its own layer. Layers increase build time. The objective is to have as few layers as possible. For example, try chaining commands from\xa0",(0,i.jsx)(t.code,{children:"RUN"})," together like so"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Before:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:"FROM ubuntu:latest\nRUN apt-get update -y\nRUN apt-get upgrade -y\nRUN apt-get install apache2 -y\nRUN apt-get install net-tools -y\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"After:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:"FROM ubuntu:latest\nRUN apt-get update -y && apt-get upgrade -y && apt-get install apache2 -y && apt-get install net-tools\n"})}),"\n",(0,i.jsx)(t.h1,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,i.jsx)(t.p,{children:"It allows multiple containers (or applications) to interact with each other when needed while running in isolation from one another."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://docs.docker.com/compose/install/",children:"Installation documentation"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Command"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Explanation"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Example"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"up"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This command will (re)create/build and start the containers specified in the compose file."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"docker-compose up"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"start"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This command will start (but requires the containers already being built) the containers specified in the compose file."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"docker-compose start"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"down"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["This command will stop and ",(0,i.jsx)(t.strong,{children:"delete"}),"\xa0the containers specified in the compose file."]}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"docker-compose down"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"stop"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["This command will stop (",(0,i.jsx)(t.strong,{children:"not"})," delete) the containers specified in the compose file."]}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"docker-compose stop"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"build"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This command will build (but will not start) the containers specified in the compose file."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"docker-compose build"})})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://docs.docker.com/compose/reference/",children:"compose documentation"})}),"\n",(0,i.jsx)(t.p,{children:"Example:\nIn this scenario, I am going to assume the following requirements"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"An E-commerce website running on Apache"}),"\n",(0,i.jsx)(t.li,{children:"This E-commerce website stores customer information in a MySQL database"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Now, we could manually run the two containers via the following"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Creating the network between the two containers: ",(0,i.jsx)(t.code,{children:"docker network create ecommerce"})]}),"\n",(0,i.jsxs)(t.li,{children:["Running the Apache2 webserver container: ",(0,i.jsx)(t.code,{children:"docker run -p 80:80 --name webserver --net ecommerce webserver"})]}),"\n",(0,i.jsxs)(t.li,{children:["Running the MySQL Database server: ",(0,i.jsx)(t.code,{children:"docker run --name database --net ecommerce webserver"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"docker-composeyml",children:"docker-compose.yml"}),"\n",(0,i.jsxs)(t.p,{children:["The formatting of a ",(0,i.jsx)(t.em,{children:"docker-compose.yml"})," file is different to that of a Dockerfile. It is important to note that YAML requires indentation (a good practice is two spaces which must be consistent)."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Instruction"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Explanation"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Example"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"version"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This is placed at the top of the file and is used to identify what version of Compose the docker-compose.yml is written for."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"'3.3'"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"services"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This instruction marks the beginning of the containers to be managed."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"services:"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"name (replace value)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:'This instruction is where you define the container and its configuration. "name" needs to be replaced with the actual name of the container you want to define, i.e. "webserver" or "database".'}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"webserver"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"build"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This instruction defines the directory containing the Dockerfile for this container/service. (you will need to use this or an image)."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"./webserver"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"ports"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This instruction publishes ports to the exposed ports (this depends on the image/Dockerfile)."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"'80:80'"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"volumes"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This instruction lists the directories that should be mounted into the container from the host operating system."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"'./home/cmnatic/webserver/:/var/www/html'"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"environment"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This instruction is used to pass environment variables (not secure), i.e. passwords, usernames, timezone configurations, etc."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"MYSQL_ROOT_PASSWORD=helloworld"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"image"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This instruction defines what image the container should be built with (you will need to use this or build)."}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["mysql",":latest"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"networks"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"This instruction defines what networks the containers will be a part of. Containers can be part of multiple networks (i.e. a web server can only contact one database, but the database can contact multiple web servers)."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"ecommerce"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://docs.docker.com/compose/compose-file/",children:"compose file"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We will run one web server (named web) from the previously mentioned scenario."}),"\n",(0,i.jsx)(t.li,{children:"We will run a database server (named database) from the previously mentioned scenario."}),"\n",(0,i.jsx)(t.li,{children:"The web server is going to be built using its Dockerfile, but we are going to use an already-built image for the database server (MySQL)"}),"\n",(0,i.jsx)(t.li,{children:"The containers will be networked to communicate with each other (the network is called ecommerce)."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:"version: '3.3'\nservices:\n  web:\n    build: ./web\n    networks:\n      - ecommerce\n    ports:\n      - '80:80'\n\n\n  database:\n    image: mysql:latest\n    networks:\n      - ecommerce\n    environment:\n      - MYSQL_DATABASE=ecommerce\n      - MYSQL_USERNAME=root\n      - MYSQL_ROOT_PASSWORD=helloword\n    \nnetworks:\n  ecommerce:\n"})}),"\n",(0,i.jsx)(t.h1,{id:"docker-socket",children:"Docker Socket"}),"\n",(0,i.jsx)(t.p,{children:"When you install Docker, there are two programs that get installed"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The Docker Client"}),"\n",(0,i.jsx)(t.li,{children:"The Docker Server"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Docker works in a client/server model. Specifically, these two programs communicate with each other to form the Docker. Docker achieves this communication using something called a socket. Sockets are an essential feature of the operating system that allows data to be communicated."}),"\n",(0,i.jsx)(t.p,{children:"For example, when using a chat program, there could be two sockets"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"A socket for storing a message that you are sending"}),"\n",(0,i.jsx)(t.li,{children:"A socket for storing a message that someone is sending you."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The program will interact with these two sockets to store or retrieve the data within them. A socket can either be a network connection or what is represented as a file. What's important to know about sockets is that they allow for Interprocess Communication (IPC). This simply means that processes on an operating system can communicate with each other."}),"\n",(0,i.jsxs)(t.p,{children:["In the context of Docker, the Docker Server is effectively just an API. The Docker Server uses this API to ",(0,i.jsx)(t.strong,{children:"listen"})," for requests, whereas the Docker Client uses the API to ",(0,i.jsx)(t.strong,{children:"send"}),"\xa0requests."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Process",src:n(6733).A+"",width:"453",height:"742"})}),"\n",(0,i.jsxs)(t.p,{children:["We can interact with the Docker Server using commands like ",(0,i.jsx)(t.code,{children:"curl"})," or an API developer tool such as Postman."]}),"\n",(0,i.jsx)(t.p,{children:"Because of this, the host machine running Docker can be configured to process commands sent from another device. This is an extremely dangerous vulnerability if it is not correctly configured because it means someone can remotely stop, start, and access Docker containers."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},6733:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Intro_to_docker_1-68ac6c95567664c321bd8775e6f609e8.png"},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var i=n(6540);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);