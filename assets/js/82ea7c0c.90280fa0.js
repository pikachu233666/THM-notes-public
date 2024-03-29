"use strict";(self.webpackChunkTHM_Notes=self.webpackChunkTHM_Notes||[]).push([[9334],{8968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(4848),s=n(8453);const i={},a="Hypervisors",o={id:"Others/Virtualization and Containers",title:"Virtualization and Containers",description:"Concept",source:"@site/docs/Others/Virtualization and Containers.md",sourceDirName:"Others",slug:"/Others/Virtualization and Containers",permalink:"/docs/Others/Virtualization and Containers",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"THMSidebar",previous:{title:"Vim",permalink:"/docs/Others/Vim"},next:{title:"Web Enumeration",permalink:"/docs/Others/Web Enumeration"}},c={},l=[{value:"Type 1 Hypervisors",id:"type-1-hypervisors",level:2},{value:"Type 2 Hypervisors",id:"type-2-hypervisors",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"#tools #Concept"}),"\n",(0,r.jsxs)(t.p,{children:["At its most basic level, virtualization is the concept of encapsulating the capabilities and features of a physical machine in a virtual environment, known as a\xa0",(0,r.jsx)(t.strong,{children:"virtual machine"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"For most organizations and individuals, virtualization comes from a need of the following"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Decrease expenses:"}),"\xa0Physical servers can be expensive, and virtualization can decrease the number of servers or other hardware, or even completely remove physical hardware from a company's infrastructure."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Scale:"}),"\xa0Without properly implemented DevOps, it may be hard for a company to scale resources as server usage increases. Virtualization makes this process easier and can delegate a server's resources to virtual machines as needed based on usage."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Efficiency:"}),"\xa0Like scaling, virtualization can also make it easier to decrease the resources allocated to a virtual machine if there is reduced usage."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Virtualization Technology\nFormally, virtualization abstracts or creates an\xa0",(0,r.jsx)(t.strong,{children:"abstraction layer"}),"\xa0over computer hardware. An abstraction layer allows a single device to be divided into multiple virtual computers, also known as virtual machines (VMs)."]}),"\n",(0,r.jsx)(t.p,{children:"In simpler terms, this means that the virtual machine will have access to logical resources that are abstracted away from the physical resources."}),"\n",(0,r.jsxs)(t.p,{children:["Virtualization Structure\nVirtualization is implemented using an engine-machine format, which means that a software or system creates an abstraction layer and allocates resources, while an operating system or application can then be installed on top of this virtualized environment.\xa0The operating system installed in a virtual machine is known as a\xa0",(0,r.jsx)(t.strong,{children:"guest OS"}),", as opposed to the\xa0",(0,r.jsx)(t.strong,{children:"host OS"}),"\xa0on which the virtualization engine is running."]}),"\n",(0,r.jsx)(t.h1,{id:"hypervisors",children:"Hypervisors"}),"\n",(0,r.jsx)(t.p,{children:"A hypervisor provides the ability to create the abstraction layer between hardware and software. A hypervisor will also generally include some form of management application or software to provide an interface between the end user and the abstraction layer to create or load virtual machines."}),"\n",(0,r.jsx)(t.p,{children:"Hypervisors are separated into two categories that are determined by their position relative to the hardware. They can either directly create a lightweight operating system on top of the hardware that is the hypervisor or add a hypervisor as an application on top of a pre-existing operating system."}),"\n",(0,r.jsx)(t.h2,{id:"type-1-hypervisors",children:"Type 1 Hypervisors"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Type 1 hypervisors"}),", also known as\xa0",(0,r.jsx)(t.strong,{children:"bare metal hypervisors"}),", create an abstraction layer directly between hardware and virtual machines without a common operating system between them. Instead, the hypervisor is the operating system and is often\xa0",(0,r.jsx)(t.em,{children:"headless"}),", with only a web-based management portal remotely accessed. These hypervisors are designed for scale and to deploy a large number of virtual machines at once. They are extremely lightweight to dedicate the most resources to virtual machines. Examples of type 1 hypervisors include VMware ESXi, Proxmox, VMware vSphere, Xen, and KVM."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Type1",src:n(5348).A+"",width:"920",height:"560"})}),"\n",(0,r.jsx)(t.h2,{id:"type-2-hypervisors",children:"Type 2 Hypervisors"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Type 2 hypervisors"}),", also known as ",(0,r.jsx)(t.strong,{children:"hosted hypervisors"}),", create an abstraction layer from a software application built on top of a pre-existing operating system. Unlike type 1 hypervisors, type 2 hypervisors are often managed directly from the application through a GUI. These hypervisors are often designed for end-users or individuals such as developers and are not strictly designed to run a large number of virtual machines for scale. Examples of type 2 hypervisors include VMware Workstation, VMware Fusion, VirtualBox, Parallels, and QEMU."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Type2",src:n(316).A+"",width:"920",height:"560"})}),"\n",(0,r.jsx)(t.h1,{id:"containers",children:"Containers"}),"\n",(0,r.jsxs)(t.p,{children:["Hypervisors work as expected for a large number of use cases but begin to encounter issues when scaling lightweight applications. ",(0,r.jsx)(t.em,{children:"Microservices"})," give us a good example of an application architecture that encounters issues when deployed from a hypervisor. A microservice is an application structure that is broken up into smaller services that are scalable and use lightweight protocols and features. The lightweight nature of the architecture poses obvious issues to hypervisors that require a large number of virtual machines each with high resource usage."]}),"\n",(0,r.jsx)(t.p,{children:"Containers are the current solution to the issues encountered with hypervisors at scale."}),"\n",(0,r.jsx)(t.p,{children:"What are Containers\nContainers have a lot in common with virtual machines, but instead of being completely abstracted from the host operating system, containers share some properties with the host operating system. Containers have their own filesystem, a portion of computing resources (CPU, RAM), a process space, and more.\xa0"}),"\n",(0,r.jsx)(t.p,{children:"Apart from the obvious benefits of being lightweight, containers are also portable and robust because they are not completely abstracted.\xa0"}),"\n",(0,r.jsx)(t.p,{children:"Container engines are our second type of virtualization. As virtual machines use a hypervisor to create an abstraction layer for virtualization, containers use a container engine to create an abstraction layer using logical resources."}),"\n",(0,r.jsx)(t.h1,{id:"docker",children:"Docker"}),"\n",(0,r.jsx)(t.p,{children:'Docker is a container platform and engine that is used to run Docker "images" as containers.'}),"\n",(0,r.jsx)(t.p,{children:"Each Docker image is built of a base image, such as Alpine or Ubuntu, that is specifically built for use in containers and is lightweight. To build a Docker image, a Dockerfile must be created, which defines the base image for a container and any commands to be run."}),"\n",(0,r.jsx)(t.p,{children:"Running and Interacting with a Docker Container\nDocker Hub is a remote repository for Docker images, similar to GitHub - a remote repository for Git. Using Docker Hub, we can pull Docker images created by others or push our own."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"docker pull <user>/<image>\n"})}),"\n",(0,r.jsx)(t.p,{children:"Alternatively, a container image can be automatically pulled when running the container for the first time. Once a container is pulled for the first time, it will be cached locally, and Docker will look for it locally before attempting to download it."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"docker run <user>/<image>\n"})}),"\n",(0,r.jsx)(t.p,{children:"Once the image is started, we can verify that the Docker engine is running the container by listing the processes running in Docker using the below command."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"docker ps\n"})}),"\n",(0,r.jsx)(t.h1,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Kubernetes"}),', also shortened to "',(0,r.jsx)(t.strong,{children:"K8s"}),'," is an\xa0',(0,r.jsx)(t.strong,{children:"orchestration platform"}),'. An orchestration platform aims to integrate into other products, such as Docker, and extend their capabilities or "synchronize" them with other products or applications.']}),"\n",(0,r.jsx)(t.p,{children:"Kubernetes relies on these traditional virtualization models like hypervisors and containers and extends their uses, features, and capabilities."}),"\n",(0,r.jsx)(t.p,{children:"These capabilities and features include the following"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Horizontal scaling"}),': Unlike traditional "vertical" scaling,\xa0"horizontal" scaling refers to adding devices or machines to handle increased workload, rather than adding logic resources such as CPU or RAM.']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Extensibility"}),":\xa0Clusters can be modified dynamically without affecting containers outside of the intended group."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Self-healing"}),": K8s can automatically restart, replace, reschedule, and kill containers that are not properly functioning based on user-defined health checks."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Automated rollouts and rollbacks"}),": K8s can progressively roll out changes to containers. As changes are made, it will monitor the application's health and decide whether to continue the rollout or rollback. This ensures the constant uptime of your cluster even if some containers fail."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/",children:"online reference"})}),"\n",(0,r.jsxs)(t.p,{children:["Start: ",(0,r.jsx)(t.code,{children:"minikube start"}),"\nGet number of pods running on the cluster: ",(0,r.jsx)(t.code,{children:"kubectl get pods"}),"\nGet number of system pods running on the cluster",(0,r.jsx)(t.code,{children:"kubectl get pods -A"}),"\nGet the pod name on the cluster: ",(0,r.jsx)(t.code,{children:"kubectl get pods"}),"\nGet the deployment name on the cluster: ",(0,r.jsx)(t.code,{children:"kubectl get deployments"}),"\nGet the port which is exposed by the service: ",(0,r.jsx)(t.code,{children:"kubectl get services"}),"\nGet the number of replica sets are deployed on the cluster: ",(0,r.jsx)(t.code,{children:"kubectl get rs"}),"\nGet the replica set name on the cluster: ",(0,r.jsx)(t.code,{children:"kubectl get rs"})]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5348:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/Virtualization_and_Countainers_1-d6e0fafad33c3fe4b2ebc3d82461a190.png"},316:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/Virtualization_and_Countainers_2-7f43c7ecebe8c92f16806bb828b5c57d.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(6540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);