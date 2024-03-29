"use strict";(self.webpackChunkTHM_Notes=self.webpackChunkTHM_Notes||[]).push([[7651],{1880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(4848),i=n(8453);const r={},o="The Dashboard",l={id:"Jr Penetration Tester/Burp Suite/The Basis",title:"The Basis",description:"Burp_Suite #tools",source:"@site/docs/Jr Penetration Tester/Burp Suite/The Basis.md",sourceDirName:"Jr Penetration Tester/Burp Suite",slug:"/Jr Penetration Tester/Burp Suite/The Basis",permalink:"/docs/Jr Penetration Tester/Burp Suite/The Basis",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"THMSidebar",previous:{title:"Repeater",permalink:"/docs/Jr Penetration Tester/Burp Suite/Repeater"},next:{title:"Active Reconnaissance",permalink:"/docs/Jr Penetration Tester/Network Security/Active Reconnaissance"}},a={},c=[];function d(e){const t={a:"a",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"#Web #Burp_Suite #tools"}),"\n",(0,s.jsx)(t.p,{children:"Burp Suite is a Java-based framework designed to serve as a comprehensive solution for conducting web application penetration testing."}),"\n",(0,s.jsx)(t.p,{children:"Key features"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Proxy: It enabled interception and modification of responses while interacting with web applications"}),"\n",(0,s.jsx)(t.li,{children:"Repeater: It allows for capturing, modifying and resending the same request multiple times. It is for crafting payloads through trial and error or testing the functionality of an endpoint for vulnerabilities."}),"\n",(0,s.jsx)(t.li,{children:"Intruder: It allows for spraying endpoints with requests. It is commonly utilized for brute-force attacks or fuzzing endpoints."}),"\n",(0,s.jsx)(t.li,{children:"Decoder: It can decode captured information or encode payloads before sending them to the target."}),"\n",(0,s.jsx)(t.li,{children:"Comparer: It enables the comparison of two pieces of data at either the world or byte level."}),"\n",(0,s.jsx)(t.li,{children:"Sequencer: It is typically employed when assessing the randomness of tokens, such as session cookie values or other supposedly randomly generated data."}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"the-dashboard",children:"The Dashboard"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"The_Basis_1",src:n(2691).A+"",width:"1132",height:"584"}),"\nThe Burp Dashboard is divided into four quadrants"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Tasks: It allows you to define background tasks, the default \u201cLive Passive Crawl\u201d task, which automatically logs the pages visited."}),"\n",(0,s.jsx)(t.li,{children:"Event log: It provides information about the actions."}),"\n",(0,s.jsx)(t.li,{children:"Issue Activity: It display the vulnerabilities identified by the automated scanner, ranked by severity and filterable based on the certainty of the vulnerability."}),"\n",(0,s.jsx)(t.li,{children:"Advisory: It provides more detailed information about the vulnerabilities, including references and suggested remediations."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Navigation"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Shortcut"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Tab"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"Ctrl + Shift + D"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Dashboard"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"Ctrl + Shift + T"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Target tab"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"Ctrl + Shift + P"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Proxy tab"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"Ctrl + Shift + I"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Intruder tab"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"Ctrl + Shift + R"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Repeater tab"})]})]})]}),"\n",(0,s.jsx)(t.h1,{id:"burp-proxy",children:"Burp Proxy"}),"\n",(0,s.jsx)(t.p,{children:"It enables the capture of requests and responses between the user and the target web server. This intercepted traffic can be manipulated, sent to other tools for further processing, or explicitly allowed to continue to its destination."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Intercepting Requests: When requests are made, they are intercepted and held back from reaching the target server."}),"\n",(0,s.jsx)(t.li,{children:"Taking Control: The ability to intercept requests empowers testers to gain complete control over web traffic."}),"\n",(0,s.jsx)(t.li,{children:"Capture and Logging: Burp Suite captures and logs requests made through the proxy."}),"\n",(0,s.jsx)(t.li,{children:"WebSocket Support: Burp Suite captures and logs WebSocket communication."}),"\n",(0,s.jsxs)(t.li,{children:["Logs and History: The captured requests can be viewed in the ",(0,s.jsx)(t.strong,{children:"HTTP history"}),"\xa0and ",(0,s.jsx)(t.strong,{children:"WebSockets history"}),"\xa0sub-tabs, allowing for retrospective analysis."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Proxy Settings"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Response Interception:"}),' The "Intercept responses based on the following rules" checkbox, along with the defined rules, allows for a more flexible response interception.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Match and Replace:"}),' The "Match and Replace" section in the ',(0,s.jsx)(t.strong,{children:"Proxy settings"})," enables the use of regular expressions (regex) to modify incoming and outgoing requests. This feature allows for dynamic changes, such as modifying the user agent or manipulating cookies."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Using FoxyProxy Extension to connect\n",(0,s.jsx)(t.a,{href:"https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-basic/",children:"FoxyProxy"})]}),"\n",(0,s.jsx)(t.h1,{id:"site-map-and-issue-definitions",children:"Site Map and Issue Definitions"}),"\n",(0,s.jsx)(t.p,{children:"The Target tab provides more than just control over the scope of our testing, it consists of three sub-tabs"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Site map: It allows us to map out the web applications in a tree structure.Every page that we visit while the proxy is active will be displayed on the site map. It is particularly useful for mapping out APIs."}),"\n",(0,s.jsx)(t.li,{children:"Issue definitions: It provides an extensive list of web vulnerabilities. It is useful for manual testing."}),"\n",(0,s.jsx)(t.li,{children:"Scope settings: It allows us to control the target scope , enables us to include or exclude specific domains/IPs to define the scope of our testing."}),"\n"]}),"\n",(0,s.jsx)(t.h1,{id:"burp-suite-browser",children:"Burp Suite Browser"}),"\n",(0,s.jsxs)(t.p,{children:["A built-in chromium browser.\nIf running as root, it may have error. Go to ",(0,s.jsx)(t.code,{children:"Settings -> Tools -> Burp's browser"})," and check the ",(0,s.jsx)(t.code,{children:"Allow Burp's browser to run without a sandbox"})," option."]}),"\n",(0,s.jsx)(t.h1,{id:"scoping-and-targeting",children:"Scoping and Targeting"}),"\n",(0,s.jsx)(t.p,{children:"We can restrict Burp Suite to target only the specific web application(s) we want to test."}),"\n",(0,s.jsxs)(t.p,{children:["By switching to the ",(0,s.jsx)(t.code,{children:"Target"})," tab, right-clicking on our target from the list on the left, and selecting ",(0,s.jsx)(t.code,{children:"Add To Scope"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["However, even if we disabled logging for out-of-scope traffic, the proxy will still intercept everything. To prevent this, we need to go to the ",(0,s.jsx)(t.strong,{children:"Proxy settings"})," sub-tab and select ",(0,s.jsx)(t.code,{children:"And"})," ",(0,s.jsx)(t.code,{children:"URL"})," ",(0,s.jsx)(t.code,{children:"Is in target scope"}),' from the "Intercept Client Requests" section.']}),"\n",(0,s.jsx)(t.h1,{id:"proxying-https",children:"Proxying HTTPS"}),"\n",(0,s.jsx)(t.p,{children:"To access the websites with TLS communication, we can manually add the PortSwigger CA certificate to our browser's list of trusted certificate authorities."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Download the CA Certificate:"})," With the Burp Proxy activated, navigate to ",(0,s.jsx)(t.a,{href:"http://burp/cert",children:"http://burp/cert"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Access Firefox Certificate Settings:"}),' In Firefox settings page. Search the page for "certificates" .']}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To do URL encode to payload, press ",(0,s.jsx)(t.code,{children:"Ctrl + U"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2691:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/The_Basis_1-af664c8366d64922b1f7aff54abe7f5e.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);