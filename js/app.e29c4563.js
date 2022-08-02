(function(){var e={2843:function(e,t,n){"use strict";var a=n(9242),i=n(3396);const o={class:"main"},s={class:"main-content"};function c(e,t,n,a,c,r){const l=(0,i.up)("SideIntroduction"),u=(0,i.up)("NavBar"),d=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(l),(0,i._)("div",s,[(0,i.Wm)(u),(0,i.Wm)(d)])])}var r=n(7139),l=n(8308);const u={class:"sidebar","data-sidebar":""},d={class:"sidebar-info"},p=(0,i.uE)('<figure class="avatar-box"><img src="'+l+'" alt="Megan Ma" width="80"></figure><div class="info-content"><h1 class="name">Megan Ma</h1><p class="title">Software Engineering Student</p></div>',2),m=(0,i._)("span",null,"Show Contacts",-1),g=[m],v=(0,i._)("div",{class:"separator"},null,-1),f={class:"contacts-list"},h={class:"contact-item"},_={class:"icon-box"},w=(0,i._)("div",{class:"contact-info"},[(0,i._)("p",{class:"contact-title"},"Pursuing"),(0,i._)("a",{class:"contact-link"},"UBC MEng in Software Engineering")],-1),b={class:"contact-item"},C={class:"icon-box"},k=(0,i._)("div",{class:"contact-info"},[(0,i._)("p",{class:"contact-title"},"Earned"),(0,i._)("a",{class:"contact-link"},"UBC BASc in Mechanical Engineering")],-1),y={class:"contact-item"},D={class:"icon-box"},S=(0,i._)("div",{class:"contact-info"},[(0,i._)("p",{class:"contact-title"},"Email"),(0,i._)("a",{href:"mailto:menghanma@gmail.com",class:"contact-link"},"menghanma@gmail.com")],-1),x={class:"contact-item"},j={class:"icon-box"},E=(0,i._)("div",{class:"contact-info"},[(0,i._)("p",{class:"contact-title"},"Phone"),(0,i._)("a",{class:"contact-link"},"+1 (778) 683-2223")],-1),M={class:"contact-item"},W={class:"icon-box"},P=(0,i._)("div",{class:"contact-info"},[(0,i._)("p",{class:"contact-title"},"Location"),(0,i._)("address",null,"Vancouver, BC CA")],-1),A=(0,i._)("div",{class:"separator"},null,-1),H={class:"social-list"},F={class:"social-item"},O={href:"https://github.com/meganm38",class:"social-link",target:"_blank"},z={class:"social-item"},L={href:"https://www.linkedin.com/in/megan-ma-88ba42233/",class:"social-link",target:"_blank"};function I(e,t,n,a,o,s){const c=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("aside",u,[(0,i._)("div",d,[p,(0,i._)("button",{class:"info_more-btn",onClick:t[0]||(t[0]=(...e)=>a.toggleShowContacts&&a.toggleShowContacts(...e))},g)]),(0,i._)("div",{class:(0,r.C_)(["sidebar-info_more",[{active:a.showContacts}]])},[v,(0,i._)("ul",f,[(0,i._)("li",h,[(0,i._)("div",_,[(0,i.Wm)(c,{icon:"fa-solid fa-school-flag"})]),w]),(0,i._)("li",b,[(0,i._)("div",C,[(0,i.Wm)(c,{icon:"fa-solid fa-graduation-cap"})]),k]),(0,i._)("li",y,[(0,i._)("div",D,[(0,i.Wm)(c,{icon:"fa-solid fa-envelope"})]),S]),(0,i._)("li",x,[(0,i._)("div",j,[(0,i.Wm)(c,{icon:"fa-solid fa-mobile"})]),E]),(0,i._)("li",M,[(0,i._)("div",W,[(0,i.Wm)(c,{icon:"fa-solid fa-location-pin"})]),P])]),A,(0,i._)("ul",H,[(0,i._)("li",F,[(0,i._)("a",O,[(0,i.Wm)(c,{icon:"fa-brands fa-github"})])]),(0,i._)("li",z,[(0,i._)("a",L,[(0,i.Wm)(c,{icon:"fa-brands fa-linkedin"})])])])],2)])}var N=n(4870);function T(){const e=(0,N.iH)(null),t=(0,N.iH)(null);function n(){e.value=window.innerHeight,t.value=window.innerWidth}return(0,i.bv)((()=>{n(),window.addEventListener("resize",n)})),(0,i.Ah)((()=>{window.removeEventListener("resize",n)})),{height:e,width:t}}var U={setup(){const e=(0,N.iH)(!0),{width:t}=T(),n=(0,N.iH)(!1);(0,i.YP)(t,(()=>{t.value<1024&&!n.value?e.value=!1:e.value=!0}));const a=()=>{e.value=!e.value,n.value=!n.value};return{toggleShowContacts:a,showContacts:e}}},B=n(89);const Z=(0,B.Z)(U,[["render",I]]);var V=Z;const J={class:"navbar"},Y={class:"navbar-list"},q={class:"navbar-item"},G=(0,i.Uk)("About"),K={class:"navbar-item"},R=(0,i.Uk)("Courses"),X={class:"navbar-item"},Q=(0,i.Uk)("Portfolio"),$={class:"navbar-item"},ee=(0,i.Uk)("Contact");function te(e,t,n,a,o,s){const c=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("nav",J,[(0,i._)("ul",Y,[(0,i._)("li",q,[(0,i.Wm)(c,{to:{name:"home"},"active-class":"active"},{default:(0,i.w5)((()=>[G])),_:1})]),(0,i._)("li",K,[(0,i.Wm)(c,{to:{name:"Courses"},"active-class":"active"},{default:(0,i.w5)((()=>[R])),_:1})]),(0,i._)("li",X,[(0,i.Wm)(c,{to:{name:"Projects"},"active-class":"active"},{default:(0,i.w5)((()=>[Q])),_:1})]),(0,i._)("li",$,[(0,i.Wm)(c,{to:{name:"Contact"},"active-class":"active"},{default:(0,i.w5)((()=>[ee])),_:1})])])])}var ne={};const ae=(0,B.Z)(ne,[["render",te]]);var ie=ae,oe={components:{SideIntroduction:V,Navbar:ie,NavBar:ie}};const se=(0,B.Z)(oe,[["render",c]]);var ce=se,re=n(2483);const le=e=>((0,i.dD)("data-v-66a3629c"),e=e(),(0,i.Cn)(),e),ue={class:"about"},de={class:"about active","data-page":"about"},pe=le((()=>(0,i._)("header",null,[(0,i._)("h2",{class:"h2 article-title"},"About me")],-1))),me=le((()=>(0,i._)("section",{class:"about-text"},[(0,i._)("p",null," Hi, I am Megan! "),(0,i._)("p",null,"I'm a programming enthusiast studying at the University of British Columbia. I enjoy working on my own projects in my spare time - I already have an idea of what the next one is going to be, which will be the biggest I have ever done so very exciting! "),(0,i._)("p",null,"I also like playing video games. I recently finished Horizon Forbidden West, It takes Two, and A Way Out, all pretty fun games. I would love to learn how to become a video game developer too... ")],-1))),ge={class:"service"},ve=le((()=>(0,i._)("h3",{class:"h3 service-title"},"What I'm doing",-1)));function fe(e,t,n,a,o,s){const c=(0,i.up)("ExperienceViewVue");return(0,i.wg)(),(0,i.iD)("div",ue,[(0,i._)("article",de,[pe,me,(0,i._)("section",ge,[ve,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.about,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"service-list",key:e.title},[(0,i.Wm)(c,{class:"experience",experience:e},null,8,["experience"])])))),128))])])])}const he={class:"service-item"},_e={class:"service-icon-box"},we=["src"],be={class:"service-content-box"},Ce={class:"h4 service-item-title"},ke={class:"service-item-text"};function ye(e,t,n,a,o,s){return(0,i.wg)(),(0,i.iD)("div",he,[(0,i._)("div",_e,[(0,i._)("img",{src:a.imgPath},null,8,we)]),(0,i._)("div",be,[(0,i._)("h4",Ce,(0,r.zw)(n.experience.title),1),(0,i._)("p",ke,(0,r.zw)(n.experience.description),1)])])}var De={props:["experience"],setup(e){const t=(0,i.Fl)((()=>n(968)("./"+e.experience.icon+".svg")));return{imgPath:t}}};const Se=(0,B.Z)(De,[["render",ye]]);var xe=Se,je=JSON.parse('[{"title":"Software Developer Coop At Texavie","description":"Working on ios and web development.","icon":"icon-dev"},{"title":"Learning Full-stack Development","description":"","icon":"icon-dev"},{"title":"Catching Up on Severance","description":"Finished season 1 today, sever me until season 2 please!","icon":"icon-tv"},{"title":"Enjoying The Last Month of Summer","description":"","icon":"icon-summer"}]'),Ee={components:{ExperienceViewVue:xe},setup(){return{about:je}}};const Me=(0,B.Z)(Ee,[["render",fe],["__scopeId","data-v-66a3629c"]]);var We=Me;const Pe={class:"courses active","data-page":"courses"},Ae=(0,i._)("header",null,[(0,i._)("h2",{class:"h2 article-title"},"Relevant Coursework")],-1),He={class:"courses"};function Fe(e,t,n,a,o,s){const c=(0,i.up)("SingleCourse"),r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("article",Pe,[Ae,(0,i._)("section",He,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.courses,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"courses-list",key:e.name},[(0,i.Wm)(r,{to:{name:"CourseDetails",params:{name:e.name.replaceAll(" ","-")}}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{course:e},null,8,["course"])])),_:2},1032,["to"])])))),128))])])}var Oe=JSON.parse('[{"name":"EECE 571G","description":"Blockchain Software Engineering","grade":100,"time":"Jan 2022 to April 2022"},{"name":"CPSC 210","description":"Software Construction","grade":97,"time":"Jan 2022 to April 2022"},{"name":"EECE 571T","description":"Advanced Machine Learning Techniques","grade":89,"time":"Jan 2022 to April 2022"},{"name":"CPSC 221","description":"Basic Algorithms and Data Structures","grade":89,"time":"Jan 2022 to April 2022"},{"name":"CPEN 502","description":"Architecture for Learning Systems","grade":94,"time":"Sept 2021 to Dec 2021"},{"name":"EECE 571B","description":"Foundation of BlockChain","grade":95,"time":"Sept 2021 to Dec 2021"},{"name":"CPSC 121","description":"Models of Comuputation","grade":89,"time":"Sept 2021 to Dec 2021"}]');const ze=e=>((0,i.dD)("data-v-402a0f25"),e=e(),(0,i.Cn)(),e),Le={class:"single-course"},Ie={class:"course-content"},Ne={class:"course-meta"},Te={class:"grade"},Ue=ze((()=>(0,i._)("span",{class:"dot"},null,-1))),Be={class:"h3 course-title"};function Ze(e,t,n,a,o,s){return(0,i.wg)(),(0,i.iD)("div",Le,[(0,i._)("div",Ie,[(0,i._)("div",Ne,[(0,i._)("span",Te,"Grade "+(0,r.zw)(n.course.grade)+"/100",1),Ue,(0,i._)("time",null,(0,r.zw)(n.course.time),1)]),(0,i._)("h3",Be,(0,r.zw)(n.course.name)+" - "+(0,r.zw)(n.course.description),1)])])}var Ve={props:["course"]};const Je=(0,B.Z)(Ve,[["render",Ze],["__scopeId","data-v-402a0f25"]]);var Ye=Je,qe={components:{SingleCourse:Ye},setup(){return{courses:Oe}}};const Ge=(0,B.Z)(qe,[["render",Fe]]);var Ke=Ge;const Re={class:"projects"},Xe={class:"portfolio active"},Qe=(0,i._)("header",null,[(0,i._)("h2",{class:"h2 article-title"},"Portfolio")],-1),$e={class:"projects"},et={class:"filter-list"},tt=["onClick"],nt={class:"filter-select-box"},at={ref:"filterLanguage"},it={class:"select-list"},ot={class:"select-item"},st=["onClick"],ct={class:"child"};function rt(e,t,n,a,o,s){const c=(0,i.up)("font-awesome-icon"),l=(0,i.up)("SingleProjectVue");return(0,i.wg)(),(0,i.iD)("div",Re,[(0,i._)("article",Xe,[Qe,(0,i._)("section",$e,[(0,i._)("div",et,[(0,i._)("button",{class:(0,r.C_)(["filter-item",[{activeFilter:"All"===a.filterSelected}]]),onClick:t[0]||(t[0]=e=>a.filterChanged("All"))},"All",2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.tags,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e},[(0,i._)("button",{class:(0,r.C_)(["filter-item",[{activeFilter:e===a.filterSelected}]]),onClick:t=>a.filterChanged(e)},(0,r.zw)(e),11,tt)])))),128))]),(0,i._)("div",nt,[(0,i._)("button",{class:(0,r.C_)(["filter-select",{active:a.dropDownActive}]),onClick:t[1]||(t[1]=(...e)=>a.toggleDropDown&&a.toggleDropDown(...e))},[(0,i._)("span",at,"Select language",512),(0,i.Wm)(c,{icon:"fa-solid fa-chevron-down"})],2),(0,i._)("div",it,[(0,i._)("div",ot,[(0,i._)("button",{onClick:t[2]||(t[2]=e=>{a.toggleDropDown(),a.filterChanged("All"),a.changeFilterLanguage("All")})},"All")]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.tags,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:"select-item"},[(0,i._)("button",{onClick:t=>{a.filterChanged(e),a.toggleDropDown(),a.changeFilterLanguage(e)},class:(0,r.C_)([{activeFilter:e===a.filterSelected}])},(0,r.zw)(e),11,st)])))),128))])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.filteredProjects,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"project-list",key:e.name},[(0,i._)("div",ct,[(0,i.Wm)(l,{project:e},null,8,["project"])])])))),128))])])])}n(6699);var lt=JSON.parse('[{"name":"FitnessBlockchain","tags":["Solidity","Swift"],"link":"#"},{"name":"PersonalWebsite","tags":["Vue","js","html","css"],"link":"https://github.com/meganm38/meganm38.github.io"},{"name":"SimCity","tags":["Java"],"link":"https://github.com/meganm38/CityRevolution"},{"name":"Muso","tags":["Vue","js","html","css"],"link":"https://github.com/meganm38/Muso"},{"name":"EveryoneDao","tags":["Solidity"],"link":"https://github.com/meganm38/571G_proj"}]');const ut={class:"project-item active","data-filter-item":"","data-category":"web development"},dt=["href"],pt={class:"project-img"},mt={class:"project-item-icon-box"},gt=["src"],vt={class:"project-title"},ft={class:"project-category"};function ht(e,t,n,a,o,s){const c=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",ut,[(0,i._)("a",{href:n.project.link,target:"_blank"},[(0,i._)("figure",pt,[(0,i._)("div",mt,[(0,i.Wm)(c,{icon:"fa-solid fa-eye"})]),(0,i._)("img",{src:a.imgPath},null,8,gt)]),(0,i._)("h3",vt,(0,r.zw)(n.project.name),1),(0,i._)("p",ft,(0,r.zw)(a.joinedTags),1)],8,dt)])}var _t={props:["project"],setup(e){const t=(0,i.Fl)((()=>e.project.tags.join(", "))),a=(0,i.Fl)((()=>n(2715)("./"+e.project.name+".png")));return{joinedTags:t,imgPath:a}}};const wt=(0,B.Z)(_t,[["render",ht]]);var bt=wt,Ct={components:{SingleProjectVue:bt,SingleProject:bt},setup(){const e=(0,i.Fl)((()=>{let e=new Set;return lt.forEach((t=>{t.tags.forEach((t=>e.add(t)))})),[...e]})),t=(0,N.iH)("All"),n=(0,i.Fl)((()=>"All"===t.value?lt:lt.filter((e=>e.tags.includes(t.value))))),a=e=>{t.value=e},o=(0,N.iH)(!1),s=()=>{o.value=!o.value},c=(0,N.iH)(null),r=e=>{c.value.innerHTML=e};return{projects:lt,tags:e,filterSelected:t,filterChanged:a,filteredProjects:n,dropDownActive:o,toggleDropDown:s,filterLanguage:c,changeFilterLanguage:r}}};const kt=(0,B.Z)(Ct,[["render",rt]]);var yt=kt;const Dt=e=>((0,i.dD)("data-v-e454cee6"),e=e(),(0,i.Cn)(),e),St={class:"contact active"},xt=Dt((()=>(0,i._)("header",null,[(0,i._)("h2",{class:"h2 article-title"},"Contact Form")],-1))),jt={class:"contact-form"},Et={class:"input-wrapper"},Mt={ref:"sendBtn"},Wt={key:0,class:"response"};function Pt(e,t,n,o,s,c){const l=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("article",St,[xt,(0,i._)("section",jt,[(0,i._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>o.handleSendMessage&&o.handleSendMessage(...e)),["prevent"])),class:"form"},[(0,i._)("div",Et,[(0,i.wy)((0,i._)("input",{type:"text",name:"fullname",class:"form-input",placeholder:"Full name",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>o.fullName=e)},null,512),[[a.nr,o.fullName]]),(0,i.wy)((0,i._)("input",{type:"email",name:"email",class:"form-input",placeholder:"Email address",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>o.email=e)},null,512),[[a.nr,o.email]])]),(0,i.wy)((0,i._)("textarea",{name:"message",class:"form-input",placeholder:"Your Message",required:"","onUpdate:modelValue":t[2]||(t[2]=e=>o.message=e)},null,512),[[a.nr,o.message]]),(0,i._)("button",{class:(0,r.C_)(["form-btn",{disabled:o.pending}]),type:"submit"},[(0,i.Wm)(l,{icon:"fa-solid fa-paper-plane"}),(0,i._)("span",Mt,"Send Message",512)],2),o.response?((0,i.wg)(),(0,i.iD)("span",Wt,(0,r.zw)(o.response),1)):(0,i.kq)("",!0)],32)])])}var At=n(3079),Ht={setup(){const e=(0,N.iH)(""),t=(0,N.iH)(""),n=(0,N.iH)(""),a=(0,N.iH)(null),i=(0,N.iH)(!1),o=(0,N.iH)("");At.ZP.init("7fnxL-HlMUcrNcKjQ");const s=async()=>{const s={from_name:e.value,from_address:t.value,message:n.value};try{o.value="",a.value.innerHTML="Sending",i.value=!0,await At.ZP.send("service_plzygl6","template_7rgehhp",s),i.value=!1,a.value.innerHTML="Send Message",e.value="",t.value="",n.value="",o.value="I have received your message. Thank you for reaching out!"}catch(c){o.value="Server error. Sorry, please email me at menghanma@gmail.com ;)"}};return{fullName:e,email:t,message:n,handleSendMessage:s,sendBtn:a,pending:i,response:o}}};const Ft=(0,B.Z)(Ht,[["render",Pt],["__scopeId","data-v-e454cee6"]]);var Ot=Ft;const zt=e=>((0,i.dD)("data-v-15477f8a"),e=e(),(0,i.Cn)(),e),Lt={class:"courses active","data-page":"courses"},It={class:"h2 article-title"},Nt=zt((()=>(0,i._)("p",{class:"thoughts"},"Overall Thoughts: ",-1))),Tt={class:"text"},Ut={key:0},Bt={key:1};function Zt(e,t,n,a,o,s){return(0,i.wg)(),(0,i.iD)("article",Lt,[(0,i._)("header",null,[(0,i._)("h2",It,(0,r.zw)(a.course.name),1)]),(0,i._)("p",null,"Grade: "+(0,r.zw)(a.course.grade)+"/100",1),Nt,(0,i._)("div",Tt,[a.course.thoughts?((0,i.wg)(),(0,i.iD)("p",Ut,(0,r.zw)(a.course.thoughts),1)):((0,i.wg)(),(0,i.iD)("p",Bt,"To be written..."))])])}var Vt={props:["name"],setup(e){const t=(0,i.Fl)((()=>{const t=e.name.replaceAll("-"," ");return Oe.find((e=>e.name===t))}));return{course:t}}};const Jt=(0,B.Z)(Vt,[["render",Zt],["__scopeId","data-v-15477f8a"]]);var Yt=Jt;const qt=[{path:"/",name:"home",component:We},{path:"/courses",name:"Courses",component:Ke},{path:"/projects",name:"Projects",component:yt},{path:"/contact",name:"Contact",component:Ot},{path:"/courses/:name",name:"CourseDetails",component:Yt,props:!0},{path:"/:catchAll(.*)",component:We}],Gt=(0,re.p7)({history:(0,re.PO)("/"),routes:qt});var Kt=Gt,Rt=n(8125),Xt=n(7749),Qt=n(2234),$t=n(8321);Rt.vI.add(Qt.zhw,Qt.D9H,$t.FU$,$t.Xf_,$t.GrN,$t.Z__,$t.XCy,$t.NLz,$t.Mdf,$t.ptq),(0,a.ri)(ce).use(Kt).component("font-awesome-icon",Xt.GN).mount("#app")},2715:function(e,t,n){var a={"./EveryoneDao.png":2241,"./FitnessBlockchain.png":9481,"./Muso.png":9941,"./PersonalWebsite.png":7327,"./SimCity.png":3869,"./avatar.png":8308};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=2715},968:function(e,t,n){var a={"./icon-dev.svg":7159,"./icon-learn.svg":6362,"./icon-summer.svg":4376,"./icon-tv.svg":138};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=968},7159:function(e,t,n){"use strict";e.exports=n.p+"img/icon-dev.2cee2b25.svg"},6362:function(e,t,n){"use strict";e.exports=n.p+"img/icon-learn.7510333c.svg"},4376:function(e,t,n){"use strict";e.exports=n.p+"img/icon-summer.f4251a87.svg"},138:function(e,t,n){"use strict";e.exports=n.p+"img/icon-tv.a503d411.svg"},2241:function(e,t,n){"use strict";e.exports=n.p+"img/EveryoneDao.eea305cc.png"},9481:function(e,t,n){"use strict";e.exports=n.p+"img/FitnessBlockchain.ee305429.png"},9941:function(e,t,n){"use strict";e.exports=n.p+"img/Muso.418d93a6.png"},7327:function(e,t,n){"use strict";e.exports=n.p+"img/PersonalWebsite.87a41600.png"},3869:function(e,t,n){"use strict";e.exports=n.p+"img/SimCity.76d61f93.png"},8308:function(e,t,n){"use strict";e.exports=n.p+"img/avatar.7f81ecf7.png"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var s=1/0;for(u=0;u<e.length;u++){a=e[u][0],i=e[u][1],o=e[u][2];for(var c=!0,r=0;r<a.length;r++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(c=!1,o<s&&(s=o));if(c){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,s=a[0],c=a[1],r=a[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(r)var u=r(n)}for(t&&t(a);l<s.length;l++)o=s[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunkmeganm38_github_io"]=self["webpackChunkmeganm38_github_io"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2843)}));a=n.O(a)})();
//# sourceMappingURL=app.e29c4563.js.map