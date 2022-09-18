(function(){var e={4782:function(e,t,n){"use strict";var a=n(9242),s=n(3396);const i={class:"main"},o={class:"main-content"};function c(e,t,n,a,c,r){const l=(0,s.up)("SideIntroduction"),u=(0,s.up)("NavBar"),d=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(l),(0,s._)("div",o,[(0,s.Wm)(u),(0,s.Wm)(d)])])}var r=n(7139),l=n(8308);const u={class:"sidebar","data-sidebar":""},d={class:"sidebar-info"},p=(0,s.uE)('<figure class="avatar-box"><img src="'+l+'" alt="Megan Ma" width="80"></figure><div class="info-content"><h1 class="name">Megan Ma</h1><p class="title">Software Engineering Student</p></div>',2),m=(0,s._)("span",null,"Show Contacts",-1),g=[m],v=(0,s._)("div",{class:"separator"},null,-1),f={class:"contacts-list"},h={class:"contact-item"},_={class:"icon-box"},w=(0,s._)("div",{class:"contact-info"},[(0,s._)("p",{class:"contact-title"},"Pursuing"),(0,s._)("a",{class:"contact-link"},"UBC MEng in Software Engineering")],-1),b={class:"contact-item"},C={class:"icon-box"},k=(0,s._)("div",{class:"contact-info"},[(0,s._)("p",{class:"contact-title"},"Earned"),(0,s._)("a",{class:"contact-link"},"UBC BASc in Mechanical Engineering")],-1),y={class:"contact-item"},D={class:"icon-box"},S=(0,s._)("div",{class:"contact-info"},[(0,s._)("p",{class:"contact-title"},"Email"),(0,s._)("a",{href:"mailto:menghanma@gmail.com",class:"contact-link"},"menghanma@gmail.com")],-1),j={class:"contact-item"},x={class:"icon-box"},E=(0,s._)("div",{class:"contact-info"},[(0,s._)("p",{class:"contact-title"},"Phone"),(0,s._)("a",{class:"contact-link"},"+1 (778) 683-2223")],-1),M={class:"contact-item"},W={class:"icon-box"},P=(0,s._)("div",{class:"contact-info"},[(0,s._)("p",{class:"contact-title"},"Location"),(0,s._)("address",null,"Vancouver, BC CA")],-1),A=(0,s._)("div",{class:"separator"},null,-1),H={class:"social-list"},F={class:"social-item"},O={href:"https://github.com/meganm38",class:"social-link",target:"_blank"},z={class:"social-item"},B={href:"https://www.linkedin.com/in/megan-ma-88ba42233/",class:"social-link",target:"_blank"};function L(e,t,n,a,i,o){const c=(0,s.up)("font-awesome-icon");return(0,s.wg)(),(0,s.iD)("aside",u,[(0,s._)("div",d,[p,(0,s._)("button",{class:"info_more-btn",onClick:t[0]||(t[0]=(...e)=>a.toggleShowContacts&&a.toggleShowContacts(...e))},g)]),(0,s._)("div",{class:(0,r.C_)(["sidebar-info_more",[{active:a.showContacts}]])},[v,(0,s._)("ul",f,[(0,s._)("li",h,[(0,s._)("div",_,[(0,s.Wm)(c,{icon:"fa-solid fa-school-flag"})]),w]),(0,s._)("li",b,[(0,s._)("div",C,[(0,s.Wm)(c,{icon:"fa-solid fa-graduation-cap"})]),k]),(0,s._)("li",y,[(0,s._)("div",D,[(0,s.Wm)(c,{icon:"fa-solid fa-envelope"})]),S]),(0,s._)("li",j,[(0,s._)("div",x,[(0,s.Wm)(c,{icon:"fa-solid fa-mobile"})]),E]),(0,s._)("li",M,[(0,s._)("div",W,[(0,s.Wm)(c,{icon:"fa-solid fa-location-pin"})]),P])]),A,(0,s._)("ul",H,[(0,s._)("li",F,[(0,s._)("a",O,[(0,s.Wm)(c,{icon:"fa-brands fa-github"})])]),(0,s._)("li",z,[(0,s._)("a",B,[(0,s.Wm)(c,{icon:"fa-brands fa-linkedin"})])])])],2)])}var N=n(4870);function T(){const e=(0,N.iH)(null),t=(0,N.iH)(null);function n(){e.value=window.innerHeight,t.value=window.innerWidth}return(0,s.bv)((()=>{n(),window.addEventListener("resize",n)})),(0,s.Ah)((()=>{window.removeEventListener("resize",n)})),{height:e,width:t}}var U={setup(){const e=(0,N.iH)(!0),{width:t}=T(),n=(0,N.iH)(!1);(0,s.YP)(t,(()=>{t.value<1024&&!n.value?e.value=!1:e.value=!0}));const a=()=>{e.value=!e.value,n.value=!n.value};return{toggleShowContacts:a,showContacts:e}}},I=n(89);const Z=(0,I.Z)(U,[["render",L]]);var V=Z;const J={class:"navbar"},R={class:"navbar-list"},Y={class:"navbar-item"},q=(0,s.Uk)("About"),G={class:"navbar-item"},K=(0,s.Uk)("Courses"),X={class:"navbar-item"},Q=(0,s.Uk)("Portfolio"),$={class:"navbar-item"},ee=(0,s.Uk)("Contact");function te(e,t,n,a,i,o){const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("nav",J,[(0,s._)("ul",R,[(0,s._)("li",Y,[(0,s.Wm)(c,{to:{name:"home"},"active-class":"active"},{default:(0,s.w5)((()=>[q])),_:1})]),(0,s._)("li",G,[(0,s.Wm)(c,{to:{name:"Courses"},"active-class":"active"},{default:(0,s.w5)((()=>[K])),_:1})]),(0,s._)("li",X,[(0,s.Wm)(c,{to:{name:"Projects"},"active-class":"active"},{default:(0,s.w5)((()=>[Q])),_:1})]),(0,s._)("li",$,[(0,s.Wm)(c,{to:{name:"Contact"},"active-class":"active"},{default:(0,s.w5)((()=>[ee])),_:1})])])])}var ne={};const ae=(0,I.Z)(ne,[["render",te]]);var se=ae,ie={components:{SideIntroduction:V,Navbar:se,NavBar:se}};const oe=(0,I.Z)(ie,[["render",c]]);var ce=oe,re=n(2483);const le=e=>((0,s.dD)("data-v-64f04e94"),e=e(),(0,s.Cn)(),e),ue={class:"about"},de={class:"about active","data-page":"about"},pe=le((()=>(0,s._)("header",null,[(0,s._)("h2",{class:"h2 article-title"},"About me")],-1))),me=le((()=>(0,s._)("section",{class:"about-text"},[(0,s._)("p",null," Hi, I am Megan! "),(0,s._)("p",null,"I'm a programming enthusiast studying at the University of British Columbia. I enjoy working on full-stack web development projects. "),(0,s._)("p",null,"I also like playing video games. I recently finished Horizon Forbidden West, It takes Two, and A Way Out, all pretty fun games. I would love to learn how to become a video game developer too... ")],-1))),ge={class:"service"},ve=le((()=>(0,s._)("h3",{class:"h3 service-title"},"What I'm doing",-1)));function fe(e,t,n,a,i,o){const c=(0,s.up)("ExperienceViewVue");return(0,s.wg)(),(0,s.iD)("div",ue,[(0,s._)("article",de,[pe,me,(0,s._)("section",ge,[ve,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.about,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"service-list",key:e.title},[(0,s.Wm)(c,{class:"experience",experience:e},null,8,["experience"])])))),128))])])])}const he={class:"service-item"},_e={class:"service-icon-box"},we=["src"],be={class:"service-content-box"},Ce={class:"h4 service-item-title"},ke={class:"service-item-text"};function ye(e,t,n,a,i,o){return(0,s.wg)(),(0,s.iD)("div",he,[(0,s._)("div",_e,[(0,s._)("img",{src:a.imgPath},null,8,we)]),(0,s._)("div",be,[(0,s._)("h4",Ce,(0,r.zw)(n.experience.title),1),(0,s._)("p",ke,(0,r.zw)(n.experience.description),1)])])}var De={props:["experience"],setup(e){const t=(0,s.Fl)((()=>n(968)("./"+e.experience.icon+".svg")));return{imgPath:t}}};const Se=(0,I.Z)(De,[["render",ye]]);var je=Se,xe=JSON.parse('[{"title":"Software Developer Coop At Texavie","description":"Working on ios and web development.","icon":"icon-dev"},{"title":"Learning Full-stack Development","description":"","icon":"icon-dev"},{"title":"Catching Up on Severance","description":"Finished season 1 today, sever me until season 2 please!","icon":"icon-tv"},{"title":"Enjoying The Last Month of Summer","description":"","icon":"icon-summer"}]'),Ee={components:{ExperienceViewVue:je},setup(){return{about:xe}}};const Me=(0,I.Z)(Ee,[["render",fe],["__scopeId","data-v-64f04e94"]]);var We=Me;const Pe={class:"courses active","data-page":"courses"},Ae=(0,s._)("header",null,[(0,s._)("h2",{class:"h2 article-title"},"Relevant Coursework")],-1),He={class:"courses"};function Fe(e,t,n,a,i,o){const c=(0,s.up)("SingleCourse"),r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("article",Pe,[Ae,(0,s._)("section",He,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.courses,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"courses-list",key:e.name},[(0,s.Wm)(r,{to:{name:"CourseDetails",params:{name:e.name.replaceAll(" ","-")}}},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{course:e},null,8,["course"])])),_:2},1032,["to"])])))),128))])])}var Oe=JSON.parse('[{"name":"EECE 571G","description":"Blockchain Software Engineering","grade":100,"time":"Jan 2022 to April 2022"},{"name":"CPSC 210","description":"Software Construction","grade":97,"time":"Jan 2022 to April 2022"},{"name":"EECE 571T","description":"Advanced Machine Learning Techniques","grade":89,"time":"Jan 2022 to April 2022"},{"name":"CPSC 221","description":"Basic Algorithms and Data Structures","grade":89,"time":"Jan 2022 to April 2022"},{"name":"CPEN 502","description":"Architecture for Learning Systems","grade":94,"time":"Sept 2021 to Dec 2021"},{"name":"EECE 571B","description":"Foundation of BlockChain","grade":95,"time":"Sept 2021 to Dec 2021"},{"name":"CPSC 121","description":"Models of Comuputation","grade":89,"time":"Sept 2021 to Dec 2021"}]');const ze=e=>((0,s.dD)("data-v-402a0f25"),e=e(),(0,s.Cn)(),e),Be={class:"single-course"},Le={class:"course-content"},Ne={class:"course-meta"},Te={class:"grade"},Ue=ze((()=>(0,s._)("span",{class:"dot"},null,-1))),Ie={class:"h3 course-title"};function Ze(e,t,n,a,i,o){return(0,s.wg)(),(0,s.iD)("div",Be,[(0,s._)("div",Le,[(0,s._)("div",Ne,[(0,s._)("span",Te,"Grade "+(0,r.zw)(n.course.grade)+"/100",1),Ue,(0,s._)("time",null,(0,r.zw)(n.course.time),1)]),(0,s._)("h3",Ie,(0,r.zw)(n.course.name)+" - "+(0,r.zw)(n.course.description),1)])])}var Ve={props:["course"]};const Je=(0,I.Z)(Ve,[["render",Ze],["__scopeId","data-v-402a0f25"]]);var Re=Je,Ye={components:{SingleCourse:Re},setup(){return{courses:Oe}}};const qe=(0,I.Z)(Ye,[["render",Fe]]);var Ge=qe;const Ke={class:"projects"},Xe={class:"portfolio active"},Qe=(0,s._)("header",null,[(0,s._)("h2",{class:"h2 article-title"},"Portfolio")],-1),$e={class:"projects"},et={class:"filter-list"},tt=["onClick"],nt={class:"filter-select-box"},at={ref:"filterLanguage"},st={class:"select-list"},it={class:"select-item"},ot=["onClick"],ct={class:"child"};function rt(e,t,n,a,i,o){const c=(0,s.up)("font-awesome-icon"),l=(0,s.up)("SingleProjectVue");return(0,s.wg)(),(0,s.iD)("div",Ke,[(0,s._)("article",Xe,[Qe,(0,s._)("section",$e,[(0,s._)("div",et,[(0,s._)("button",{class:(0,r.C_)(["filter-item",[{activeFilter:"All"===a.filterSelected}]]),onClick:t[0]||(t[0]=e=>a.filterChanged("All"))},"All",2),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.tags,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e},[(0,s._)("button",{class:(0,r.C_)(["filter-item",[{activeFilter:e===a.filterSelected}]]),onClick:t=>a.filterChanged(e)},(0,r.zw)(e),11,tt)])))),128))]),(0,s._)("div",nt,[(0,s._)("button",{class:(0,r.C_)(["filter-select",{active:a.dropDownActive}]),onClick:t[1]||(t[1]=(...e)=>a.toggleDropDown&&a.toggleDropDown(...e))},[(0,s._)("span",at,"Select language",512),(0,s.Wm)(c,{icon:"fa-solid fa-chevron-down"})],2),(0,s._)("div",st,[(0,s._)("div",it,[(0,s._)("button",{onClick:t[2]||(t[2]=e=>{a.toggleDropDown(),a.filterChanged("All"),a.changeFilterLanguage("All")})},"All")]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.tags,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:"select-item"},[(0,s._)("button",{onClick:t=>{a.filterChanged(e),a.toggleDropDown(),a.changeFilterLanguage(e)},class:(0,r.C_)([{activeFilter:e===a.filterSelected}])},(0,r.zw)(e),11,ot)])))),128))])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.filteredProjects,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"project-list",key:e.name},[(0,s._)("div",ct,[(0,s.Wm)(l,{project:e},null,8,["project"])])])))),128))])])])}n(6699);var lt=JSON.parse('[{"name":"RateBCResaurants","tags":["Vue","js","html","css"],"link":"https://github.com/meganm38/rate-bc-restaurants"},{"name":"FitnessBlockchain","tags":["Solidity","Swift"],"link":"#"},{"name":"PersonalWebsite","tags":["Vue","js","html","css"],"link":"https://github.com/meganm38/meganm38.github.io"},{"name":"SimCity","tags":["Java"],"link":"https://github.com/meganm38/CityRevolution"},{"name":"Muso","tags":["Vue","js","html","css"],"link":"https://github.com/meganm38/Muso"},{"name":"EveryoneDao","tags":["Solidity"],"link":"https://github.com/meganm38/571G_proj"}]');const ut={class:"project-item active","data-filter-item":"","data-category":"web development"},dt=["href"],pt={class:"project-img"},mt={class:"project-item-icon-box"},gt=["src"],vt={class:"project-title"},ft={class:"project-category"};function ht(e,t,n,a,i,o){const c=(0,s.up)("font-awesome-icon");return(0,s.wg)(),(0,s.iD)("div",ut,[(0,s._)("a",{href:n.project.link,target:"_blank"},[(0,s._)("figure",pt,[(0,s._)("div",mt,[(0,s.Wm)(c,{icon:"fa-solid fa-eye"})]),(0,s._)("img",{src:a.imgPath},null,8,gt)]),(0,s._)("h3",vt,(0,r.zw)(n.project.name),1),(0,s._)("p",ft,(0,r.zw)(a.joinedTags),1)],8,dt)])}var _t={props:["project"],setup(e){const t=(0,s.Fl)((()=>e.project.tags.join(", "))),a=(0,s.Fl)((()=>n(2715)("./"+e.project.name+".png")));return{joinedTags:t,imgPath:a}}};const wt=(0,I.Z)(_t,[["render",ht]]);var bt=wt,Ct={components:{SingleProjectVue:bt,SingleProject:bt},setup(){const e=(0,s.Fl)((()=>{let e=new Set;return lt.forEach((t=>{t.tags.forEach((t=>e.add(t)))})),[...e]})),t=(0,N.iH)("All"),n=(0,s.Fl)((()=>"All"===t.value?lt:lt.filter((e=>e.tags.includes(t.value))))),a=e=>{t.value=e},i=(0,N.iH)(!1),o=()=>{i.value=!i.value},c=(0,N.iH)(null),r=e=>{c.value.innerHTML=e};return{projects:lt,tags:e,filterSelected:t,filterChanged:a,filteredProjects:n,dropDownActive:i,toggleDropDown:o,filterLanguage:c,changeFilterLanguage:r}}};const kt=(0,I.Z)(Ct,[["render",rt]]);var yt=kt;const Dt=e=>((0,s.dD)("data-v-e454cee6"),e=e(),(0,s.Cn)(),e),St={class:"contact active"},jt=Dt((()=>(0,s._)("header",null,[(0,s._)("h2",{class:"h2 article-title"},"Contact Form")],-1))),xt={class:"contact-form"},Et={class:"input-wrapper"},Mt={ref:"sendBtn"},Wt={key:0,class:"response"};function Pt(e,t,n,i,o,c){const l=(0,s.up)("font-awesome-icon");return(0,s.wg)(),(0,s.iD)("article",St,[jt,(0,s._)("section",xt,[(0,s._)("form",{onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>i.handleSendMessage&&i.handleSendMessage(...e)),["prevent"])),class:"form"},[(0,s._)("div",Et,[(0,s.wy)((0,s._)("input",{type:"text",name:"fullname",class:"form-input",placeholder:"Full name",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>i.fullName=e)},null,512),[[a.nr,i.fullName]]),(0,s.wy)((0,s._)("input",{type:"email",name:"email",class:"form-input",placeholder:"Email address",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>i.email=e)},null,512),[[a.nr,i.email]])]),(0,s.wy)((0,s._)("textarea",{name:"message",class:"form-input",placeholder:"Your Message",required:"","onUpdate:modelValue":t[2]||(t[2]=e=>i.message=e)},null,512),[[a.nr,i.message]]),(0,s._)("button",{class:(0,r.C_)(["form-btn",{disabled:i.pending}]),type:"submit"},[(0,s.Wm)(l,{icon:"fa-solid fa-paper-plane"}),(0,s._)("span",Mt,"Send Message",512)],2),i.response?((0,s.wg)(),(0,s.iD)("span",Wt,(0,r.zw)(i.response),1)):(0,s.kq)("",!0)],32)])])}var At=n(3079),Ht={setup(){const e=(0,N.iH)(""),t=(0,N.iH)(""),n=(0,N.iH)(""),a=(0,N.iH)(null),s=(0,N.iH)(!1),i=(0,N.iH)("");At.ZP.init("7fnxL-HlMUcrNcKjQ");const o=async()=>{const o={from_name:e.value,from_address:t.value,message:n.value};try{i.value="",a.value.innerHTML="Sending",s.value=!0,await At.ZP.send("service_plzygl6","template_7rgehhp",o),s.value=!1,a.value.innerHTML="Send Message",e.value="",t.value="",n.value="",i.value="I have received your message. Thank you for reaching out!"}catch(c){i.value="Server error. Sorry, please email me at menghanma@gmail.com ;)"}};return{fullName:e,email:t,message:n,handleSendMessage:o,sendBtn:a,pending:s,response:i}}};const Ft=(0,I.Z)(Ht,[["render",Pt],["__scopeId","data-v-e454cee6"]]);var Ot=Ft;const zt=e=>((0,s.dD)("data-v-15477f8a"),e=e(),(0,s.Cn)(),e),Bt={class:"courses active","data-page":"courses"},Lt={class:"h2 article-title"},Nt=zt((()=>(0,s._)("p",{class:"thoughts"},"Overall Thoughts: ",-1))),Tt={class:"text"},Ut={key:0},It={key:1};function Zt(e,t,n,a,i,o){return(0,s.wg)(),(0,s.iD)("article",Bt,[(0,s._)("header",null,[(0,s._)("h2",Lt,(0,r.zw)(a.course.name),1)]),(0,s._)("p",null,"Grade: "+(0,r.zw)(a.course.grade)+"/100",1),Nt,(0,s._)("div",Tt,[a.course.thoughts?((0,s.wg)(),(0,s.iD)("p",Ut,(0,r.zw)(a.course.thoughts),1)):((0,s.wg)(),(0,s.iD)("p",It,"To be written..."))])])}var Vt={props:["name"],setup(e){const t=(0,s.Fl)((()=>{const t=e.name.replaceAll("-"," ");return Oe.find((e=>e.name===t))}));return{course:t}}};const Jt=(0,I.Z)(Vt,[["render",Zt],["__scopeId","data-v-15477f8a"]]);var Rt=Jt;const Yt=[{path:"/",name:"home",component:We},{path:"/courses",name:"Courses",component:Ge},{path:"/projects",name:"Projects",component:yt},{path:"/contact",name:"Contact",component:Ot},{path:"/courses/:name",name:"CourseDetails",component:Rt,props:!0},{path:"/:catchAll(.*)",component:We}],qt=(0,re.p7)({history:(0,re.PO)("/"),routes:Yt});var Gt=qt,Kt=n(8125),Xt=n(7749),Qt=n(2234),$t=n(8321);Kt.vI.add(Qt.zhw,Qt.D9H,$t.FU$,$t.Xf_,$t.GrN,$t.Z__,$t.XCy,$t.NLz,$t.Mdf,$t.ptq),(0,a.ri)(ce).use(Gt).component("font-awesome-icon",Xt.GN).mount("#app")},2715:function(e,t,n){var a={"./EveryoneDao.png":2241,"./FitnessBlockchain.png":9481,"./Muso.png":9941,"./PersonalWebsite.png":7327,"./RateBCResaurants.png":1271,"./SimCity.png":3869,"./avatar.png":8308};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=i,e.exports=s,s.id=2715},968:function(e,t,n){var a={"./icon-dev.svg":7159,"./icon-learn.svg":6362,"./icon-summer.svg":4376,"./icon-tv.svg":138};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=i,e.exports=s,s.id=968},7159:function(e,t,n){"use strict";e.exports=n.p+"img/icon-dev.2cee2b25.svg"},6362:function(e,t,n){"use strict";e.exports=n.p+"img/icon-learn.7510333c.svg"},4376:function(e,t,n){"use strict";e.exports=n.p+"img/icon-summer.f4251a87.svg"},138:function(e,t,n){"use strict";e.exports=n.p+"img/icon-tv.a503d411.svg"},2241:function(e,t,n){"use strict";e.exports=n.p+"img/EveryoneDao.eea305cc.png"},9481:function(e,t,n){"use strict";e.exports=n.p+"img/FitnessBlockchain.ee305429.png"},9941:function(e,t,n){"use strict";e.exports=n.p+"img/Muso.418d93a6.png"},7327:function(e,t,n){"use strict";e.exports=n.p+"img/PersonalWebsite.87a41600.png"},1271:function(e,t,n){"use strict";e.exports=n.p+"img/RateBCResaurants.dfb619f9.png"},3869:function(e,t,n){"use strict";e.exports=n.p+"img/SimCity.76d61f93.png"},8308:function(e,t,n){"use strict";e.exports=n.p+"img/avatar.7f81ecf7.png"}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,s,i){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],s=e[u][1],i=e[u][2];for(var c=!0,r=0;r<a.length;r++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(c=!1,i<o&&(o=i));if(c){e.splice(u--,1);var l=s();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,i,o=a[0],c=a[1],r=a[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(s in c)n.o(c,s)&&(n.m[s]=c[s]);if(r)var u=r(n)}for(t&&t(a);l<o.length;l++)i=o[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},a=self["webpackChunkmeganm38_github_io"]=self["webpackChunkmeganm38_github_io"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4782)}));a=n.O(a)})();
//# sourceMappingURL=app.92074ae4.js.map