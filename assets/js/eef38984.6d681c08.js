"use strict";(self.webpackChunkTHM_Notes=self.webpackChunkTHM_Notes||[]).push([[7893],{6058:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>h,toc:()=>l});var r=s(4848),n=s(8453);const o={},i="Request And Responses",h={id:"Pre Security/How The Web Works/HTTP in detail",title:"HTTP in detail",description:"Network",source:"@site/docs/Pre Security/How The Web Works/HTTP in detail.md",sourceDirName:"Pre Security/How The Web Works",slug:"/Pre Security/How The Web Works/HTTP in detail",permalink:"/docs/Pre Security/How The Web Works/HTTP in detail",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"THMSidebar",previous:{title:"DNS in detail",permalink:"/docs/Pre Security/How The Web Works/DNS in detail"},next:{title:"How websites work",permalink:"/docs/Pre Security/How The Web Works/How websites work"}},a={},l=[{value:"What is a URL? (Uniform Resource Locator)",id:"what-is-a-url-uniform-resource-locator",level:2},{value:"Making a Request",id:"making-a-request",level:2}];function c(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"#Pre-Sec #Network"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"What is HTTP? (HyperText Transfer Protocol)"})}),"\n",(0,r.jsx)(t.p,{children:"HTTP is what's used whenever you view a website, developed by Tim Berners-Lee and his team between 1989-1991. HTTP is the set of rules used for communicating with web servers for the transmitting of webpage data, whether that is HTML, Images, Videos, etc."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"What is HTTPS?"})," ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.strong,{children:"(HyperText Transfer Protocol Secure)"})})]}),"\n",(0,r.jsx)(t.p,{children:"HTTPS is the secure version of HTTP. HTTPS data is encrypted so it not only stops people from seeing the data you are receiving and sending, but it also gives you assurances that you're talking to the correct web server and not something impersonating it."}),"\n",(0,r.jsx)(t.h1,{id:"request-and-responses",children:"Request And Responses"}),"\n",(0,r.jsx)(t.p,{children:"When we access a website, your browser will need to make requests to a web server for assets such as HTML, Images, and download the responses. Before that, you need to tell the browser specifically how and where to access these resources, this is where URLs will help."}),"\n",(0,r.jsx)(t.h2,{id:"what-is-a-url-uniform-resource-locator",children:"What is a URL? (Uniform Resource Locator)"}),"\n",(0,r.jsx)(t.p,{children:"If you\u2019ve used the internet, you\u2019ve used a URL before. A URL is predominantly an instruction on how to access a resource on the internet. The below image shows what a URL looks like with all of its features (it does not use all features in every request)."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"URL",src:s(5816).A+"",width:"1140",height:"270"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Scheme:"})," This instructs on what protocol to use for accessing the resource such as HTTP, HTTPS, FTP (File Transfer Protocol)."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"User:"})," Some services require authentication to log in, you can put a username and password into the URL to log in."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Host:"})," The domain name or IP address of the server you wish to access."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Port:"})," The Port that you are going to connect to, usually 80 for HTTP and 443 for HTTPS, but this can be hosted on any port between 1 - 65535."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Path:"})," The file name or location of the resource you are trying to access.",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"Query String:"})," Extra bits of information that can be sent to the requested path. For example, /blog?",(0,r.jsx)(t.strong,{children:"id=1"})," would tell the blog path that you wish to receive the blog article with the id of 1."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Fragment:"})," This is a reference to a location on the actual page requested. This is commonly used for pages with long content and can have a certain part of the page directly linked to it, so it is viewable to the user as soon as they access the page."]}),"\n",(0,r.jsx)(t.h2,{id:"making-a-request",children:"Making a Request"}),"\n",(0,r.jsxs)(t.p,{children:["It's possible to make a request to a web server with just one line \"",(0,r.jsx)(t.strong,{children:"GET / HTTP/1.1"}),'"']}),"\n",(0,r.jsx)(t.p,{children:"But for a much richer web experience, you\u2019ll need to send other data as well. This other data is sent in what is called headers, where headers contain extra information to give to the web server you\u2019re communicating with."}),"\n",(0,r.jsx)(t.p,{children:"Example Request"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",children:"GET / HTTP/1.1\nHost: tryhackme.com\nUser-Agent: Mozilla/5.0 Firefox/87.0\nReferer: https://tryhackme.com/\n"})}),"\n",(0,r.jsx)(t.p,{children:"To breakdown each line of this request:"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Line 1:"})," This request is sending the GET method ( more on this in the HTTP Methods task ), request the home page with / and telling the web server we are using HTTP protocol version 1.1."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Line 2:"})," We tell the web server we want the website tryhackme.com"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Line 3:"})," We tell the web server we are using the Firefox version 87 Browser"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Line 4:"})," We are telling the web server that the web page that referred us to this one is ",(0,r.jsx)(t.a,{href:"https://tryhackme.com",children:"https://tryhackme.com"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Line 5:"})," HTTP requests always end with a blank line to inform the web server that the request has finished."]}),"\n",(0,r.jsx)(t.p,{children:"Example Response"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",children:"\nHTTP/1.1 200 OK\nServer: nginx/1.15.8\nDate: Fri, 09 Apr 2021 13:34:03 GMT\nContent-Type: text/html\nContent-Length: 98\n\n<html>\n<head>\n    <title>TryHackMe</title>\n</head>\n<body>\n    Welcome To TryHackMe.com\n</body>\n</html>\n"})}),"\n",(0,r.jsx)(t.p,{children:"To breakdown each line of the response:"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Line 1:"}),' HTTP 1.1 is the version of the HTTP protocol the server is using and then followed by the HTTP Status Code in this case "200 Ok" which tells us the request has completed successfully.']}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Line 2:"})," This tells us the web server software and version number."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Line 3:"})," The current date, time and timezone of the web server."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Line 4:"})," The Content-Type header tells the client what sort of information is going to be sent, such as HTML, images, videos, pdf, XML."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Line 5:"})," Content-Length tells the client how long the response is, this way we can confirm no data is missing."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Line 6:"})," HTTP response contains a blank line to confirm the end of the HTTP response."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Lines 7-14:"})," The information that has been requested, in this instance the homepage."]}),"\n",(0,r.jsx)(t.h1,{id:"http-methods",children:"HTTP Methods"}),"\n",(0,r.jsx)(t.p,{children:"HTTP methods are a way for the client to show their intended action when making an HTTP request. There are a lot of HTTP methods but we'll cover the most common ones, although mostly you'll deal with the GET and POST method."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"GET Request"}),"\nThis is used for getting information from a web server."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"POST Request"}),"\nThis is used for submitting data to the web server and potentially creating new records"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"PUT Request"}),"\nThis is used for submitting data to a web server to update information"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"DELETE Request"}),(0,r.jsx)(t.br,{}),"\n","This is used for deleting information/records from a web server."]}),"\n",(0,r.jsx)(t.h1,{id:"http-status-codes",children:"HTTP Status Codes"}),"\n",(0,r.jsx)(t.p,{children:"When a HTTP server responds, the first line always contains a status code informing the client of the outcome of their request and also potentially how to handle it. These status codes can be broken down into 5 different ranges:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"100-199 - Information Response"})}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"These are sent to tell the client the first part of their request has been accepted and they should continue sending the rest of their request. These codes are no longer very common."})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"200-299 - Success"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"This range of status codes is used to tell the client their request was successful."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"300-399 - Redirection"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"These are used to redirect the client's request to another resource. This can be either to a different webpage or a different website altogether."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"400-499 - Client Errors"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Used to inform the client that there was an error with their request."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"500-599 - Server Errors"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"This is reserved for errors happening on the server-side and usually indicate quite a major problem with the server handling the request."})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Common HTTP Status Codes:"}),(0,r.jsx)(t.br,{}),"\n","There are a lot of different HTTP status codes and that's not including the fact that applications can even define their own, we'll go over the most common HTTP responses you are likely to come across:"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"200 - OK"})}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"The request was completed successfully."})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"201 - Created"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"A resource has been created (for example a new user or new blog post)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"301 - Moved Permanently"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"This redirects the client's browser to a new webpage or tells search engines that the page has moved somewhere else and to look there instead."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"302 - Found"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Similar to the above permanent redirect, but as the name suggests, this is only a temporary change and it may change again in the near future."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"400 - Bad Request"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"This tells the browser that something was either wrong or missing in their request. This could sometimes be used if the web server resource that is being requested expected a certain parameter that the client didn't send."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"401 - Not Authorised"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"You are not currently allowed to view this resource until you have authorised with the web application, most commonly with a username and password."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"403 - Forbidden"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"You do not have permission to view this resource whether you are logged in or not."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"405 - Method Not Allowed"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"The resource does not allow this method request, for example, you send a GET request to the resource /create-account when it was expecting a POST request instead."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"404 - Page Not Found"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"The page/resource you requested does not exist."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"500 - Internal Service Error"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"The server has encountered some kind of error with your request that it doesn't know how to handle properly."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.strong,{children:"503 - Service Unavailable"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"This server cannot handle your request as it's either overloaded or down for maintenance."})]})]})]}),"\n",(0,r.jsx)(t.h1,{id:"headers",children:"Headers"}),"\n",(0,r.jsx)(t.p,{children:"Headers are additional bits of data you can send to the web server when making requests."}),"\n",(0,r.jsx)(t.p,{children:"Although no headers are strictly required when making a HTTP request, you\u2019ll find it difficult to view a website properly."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Common Request Headers"})}),"\n",(0,r.jsx)(t.p,{children:"\ufeffThese are headers that are sent from the client (usually your browser) to the server."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Host:"})," Some web servers host multiple websites so by providing the host headers you can tell it which one you require, otherwise you'll just receive the default website for the server."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"User-Agent:"})," This is your browser software and version number, telling the web server your browser software helps it format the website properly for your browser and also some elements of HTML, JavaScript and CSS are only available in certain browsers."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Content-Length:"})," When sending data to a web server such as in a form, the content length tells the web server how much data to expect in the web request. This way the server can ensure it isn't missing any data."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Accept-Encoding:"})," Tells the web server what types of compression methods the browser supports so the data can be made smaller for transmitting over the internet."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Cookie:"})," Data sent to the server to help remember your information (see cookies task for more information)."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Common Response Headers"})}),"\n",(0,r.jsx)(t.p,{children:"These are the headers that are returned to the client from the server after a request."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Set-Cookie:"})," Information to store which gets sent back to the web server on each request (see cookies task for more information)."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Cache-Control:"})," How long to store the content of the response in the browser's cache before it requests it again."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Content-Type:"})," This tells the client what type of data is being returned, i.e., HTML, CSS, JavaScript, Images, PDF, Video, etc. Using the content-type header the browser then knows how to process the data."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Content-Encoding:"})," What method has been used to compress the data to make it smaller when sending it over the internet."]}),"\n",(0,r.jsx)(t.h1,{id:"cookies",children:"Cookies"}),"\n",(0,r.jsx)(t.p,{children:"They're just a small piece of data that is stored on your computer. Cookies are saved when you receive a \"Set-Cookie\" header from a web server. Then every further request you make, you'll send the cookie data back to the web server. Because HTTP is stateless (doesn't keep track of your previous requests), cookies can be used to remind the web server who you are, some personal settings for the website or whether you've been to the website before."}),"\n",(0,r.jsxs)(t.p,{children:["HTTP request\n",(0,r.jsx)(t.img,{alt:"HTTP request",src:s(6659).A+"",width:"784",height:"800"})]}),"\n",(0,r.jsx)(t.p,{children:"Cookies can be used for many purposes but are most commonly used for website authentication. The cookie value won't usually be a clear-text string where you can see the password, but a token (unique secret code that isn't easily humanly guessable)."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Viewing Your Cookies"})}),"\n",(0,r.jsx)(t.p,{children:'You can easily view what cookies your browser is sending to a website by using the developer tools, in your browser. If you\'re not sure how to get to the developer tools in your browser, click on the "View Site" button at the top of this task for a how-to guide.'}),"\n",(0,r.jsx)(t.p,{children:'Once you have developer tools open, click on the "Network" tab. This tab will show you a list of all the resources your browser has requested. You can click on each one to receive a detailed breakdown of the request and response. If your browser sent a cookie, you will see these on the "Cookies" tab of the request.'})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5816:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/HTTP_in_detail_1-835ce7f4990085d8e2151acc61bfe4d8.png"},6659:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/HTTP_in_detail_2-f6f8a901ba95d5875f77d6a101ccac2d.png"},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>h});var r=s(6540);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);