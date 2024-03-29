"use strict";(self.webpackChunkTHM_Notes=self.webpackChunkTHM_Notes||[]).push([[7825],{3364:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(4848),s=i(8453);const a={},r="Automated Vs. Manual Vulnerability Research",o={id:"Jr Penetration Tester/Vulnerability Research/Exploit Vulnerabilities",title:"Exploit Vulnerabilities",description:"Concept",source:"@site/docs/Jr Penetration Tester/Vulnerability Research/Exploit Vulnerabilities.md",sourceDirName:"Jr Penetration Tester/Vulnerability Research",slug:"/Jr Penetration Tester/Vulnerability Research/Exploit Vulnerabilities",permalink:"/docs/Jr Penetration Tester/Vulnerability Research/Exploit Vulnerabilities",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"THMSidebar",previous:{title:"Protocols and Servers",permalink:"/docs/Jr Penetration Tester/Network Security/Protocols and Servers"},next:{title:"Vulnerabilities 101",permalink:"/docs/Jr Penetration Tester/Vulnerability Research/Vulnerabilities 101"}},l={},c=[{value:"Rapid7",id:"rapid7",level:2},{value:"Github",id:"github",level:2},{value:"Searchsploit",id:"searchsploit",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"#Vulnerabilities #Concept"}),"\n",(0,n.jsx)(t.h1,{id:"automated-vs-manual-vulnerability-research",children:"Automated Vs. Manual Vulnerability Research"}),"\n",(0,n.jsx)(t.p,{children:"There is a myriad of tools and services available in cybersecurity for vulnerability scanning. Ranging from being commercial (and footing a heavy bill) to open-source and free, vulnerability scanners are convenient means of quickly canvassing an application for flaws."}),"\n",(0,n.jsxs)(t.p,{children:["The vulnerability scanner ",(0,n.jsx)(t.a,{href:"https://www.tenable.com/products/nessus",children:"Nessus"})]}),"\n",(0,n.jsx)(t.p,{children:"Some of the advantages and disadvantages of using a vulnerability scanner in the table below"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Advantage"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Disadvantage"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Automated scans are easy to repeat, and the results can be shared within a team with ease."}),(0,n.jsx)(t.td,{children:"People can often become reliant on these tools."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"These scanners are quick and can test numerous applications efficiently."}),(0,n.jsx)(t.td,{children:'They are extremely "loud" and produce a lot of traffic and logging. This is not good if you are trying to bypass firewalls and the likes.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Open-source solutions exist."}),(0,n.jsx)(t.td,{children:"Open-source solutions are often basic and require expensive licenses to have useful features."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Automated scanners cover a wide range of different vulnerabilities that may be hard to manually search for."}),(0,n.jsx)(t.td,{children:"They often do not find every vulnerability on an application."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Frameworks such as Metasploit often have vulnerability scanners for some modules."}),"\n",(0,n.jsx)(t.p,{children:"Manual scanning for vulnerabilities is often the weapon of choice by a penetration tester when testing individual applications or programs. In fact, manual scanning will involve searching for the same vulnerabilities and uses similar techniques as automated scanning."}),"\n",(0,n.jsx)(t.p,{children:"Ultimately, both techniques involve testing an application or program for vulnerabilities. These vulnerabilities include:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Vulnerability"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Security Misconfigurations"}),(0,n.jsx)(t.td,{children:"Security misconfigurations involve vulnerabilities that are due to developer oversight. For example, exposing server information in messages between the application and an attacker."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Broken Access Control"}),(0,n.jsx)(t.td,{children:"This vulnerability occurs when an attacker is able to access parts of an application that they are not supposed to be able to otherwise."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Insecure Deserialization"}),(0,n.jsx)(t.td,{children:"This is the insecure processing of data that is sent across an application. An attacker may be able to pass malicious code to the application, where it will then be executed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Injection"}),(0,n.jsx)(t.td,{children:"An Injection vulnerability exists when an attacker is able to input malicious data into an application. This is due to the failure of not ensuring (known as sanitising) input is not harmful."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://owasp.org/www-project-top-ten/",children:"OWASP framework"})," to learn about vulnerabilities."]}),"\n",(0,n.jsx)(t.h1,{id:"finding-manual-exploits",children:"Finding Manual Exploits"}),"\n",(0,n.jsx)(t.h2,{id:"rapid7",children:"Rapid7"}),"\n",(0,n.jsx)(t.p,{children:"Much like other services such as Exploit DB and NVD, Rapid7 is a vulnerability research database. The only difference being that this database also acts as an exploit database.\xa0Using this service, you can filter by type of vulnerability (I.e. application and operating system)."}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, the database contains instructions for exploiting applications using the popular Metasploit tool. On ",(0,n.jsx)(t.a,{href:"https://www.rapid7.com/db/",children:"Rapid7"})," we can see instructions on how to use an exploit module to abuse vulnerability."]}),"\n",(0,n.jsx)(t.h2,{id:"github",children:"Github"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com",children:"GitHub"})," is a popular web service designed for software developers. The site is used to host and share the source code of applications to allow a collaborative effort.\xa0However, security researchers have taken to this platform because of the aforementioned reasons as well. Security researchers store & share PoC\u2019s (Proof of Concept) on GitHub, turning it into an exploit database in this context."]}),"\n",(0,n.jsx)(t.p,{children:"GitHub is extremely useful in finding rare or fresh exploits because anyone can create an account and upload \u2013 there is no formal verification process like there is with alternative exploit databases. With that said, there is also a downside in that PoC\u2019s may not work where little to no support will be provided."}),"\n",(0,n.jsx)(t.p,{children:"GitHub uses a tagging and keyword system, meaning that we can search GitHub by keywords such as \u201cPoC\u201d, \u201cvulnerability\u201d, and many more."}),"\n",(0,n.jsx)(t.h2,{id:"searchsploit",children:"Searchsploit"}),"\n",(0,n.jsx)(t.p,{children:"This tool is an offline copy of Exploit-DB, containing copies of exploits on your system.\xa0"}),"\n",(0,n.jsx)(t.p,{children:"You are able to search searchsploit by application name and/or vulnerability type."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(6540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);