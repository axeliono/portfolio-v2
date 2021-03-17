(this["webpackJsonpportfolio-v2"]=this["webpackJsonpportfolio-v2"]||[]).push([[0],{33:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/chandler.e8d4dc76.JPG"},58:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(11),i=a.n(n),s=(a(33),a(21)),o=(a(50),a(1)),l=function(e){var t=e.setCurrentTab,a=e.tabs;return Object(o.jsxs)("header",{className:"flex-row px-1 py-1",children:[Object(o.jsx)("h1",{className:"px-2",children:"Chandler Green"}),Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{className:"flex-row justify-center",children:a.map((function(e){return Object(o.jsx)("li",{className:"mx-2",children:Object(o.jsx)("a",{href:"#"+e.toLowerCase(),onClick:function(){t(e)},children:e})},e)}))})})]})},j=function(){return Object(o.jsxs)("section",{className:"page-header",children:[Object(o.jsx)("h2",{className:"py-2",children:"Who I Am"}),Object(o.jsx)("div",{className:"about-image",children:Object(o.jsx)("img",{alt:"Chandler",src:a(52).default})}),Object(o.jsx)("p",{className:"py-2 about-text",children:"Hi I am Chandler Green. I am a web developer who graduated from the University of Houston with a BS. in kinesiology in May of 2020. I am currently studying advanced web development in the University of Texas at Austin Coding Boot Camp and will recieve my certificate of completion in April of 2021. In my undergraduate studies I had extensive training in using in depth exercise testing methods for the purpose of creating personalized exercise programs for patients/clients. I am leveraging this my testing and personalization skills to create clean websites and applications tailored to the specifications of employers and/or clients."})]})},d=a(17),h=a(22);var b=function(){var e=Object(r.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),i=Object(s.a)(n,2),l=i[0],j=i[1],b=a.name,m=a.email,u=a.message,p=function(e){(c(Object(h.a)(Object(h.a)({},a),{},Object(d.a)({},e.target.name,e.target.value))),"email"===e.target.name)?function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value)||j("Your email is invalid."):e.target.value.length?j(""):j("".concat(e.target.name," is required"));l||c(Object(h.a)(Object(h.a)({},a),{},Object(d.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{children:"Contact Me"}),Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault()},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:b,onBlur:p})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",name:"email",defaultValue:m,onBlur:p})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",rows:"5",defaultValue:u,onBlur:p})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("button",{type:"submit",children:"Submit"})]})]})},m=a(93),u=a(86),p=a(87),x=a(89),O=a(88),g=a(90),f=a(85),v=a(83),y=function(e){var t=e.name,a=e.tech,r=e.deployed,c=e.image,n=e.repo,i=Object(v.a)({root:{maxWidth:500},media:{height:140}})();return Object(o.jsx)(m.a,{className:i.root,children:Object(o.jsxs)(f.a,{children:[Object(o.jsx)(u.a,{src:c,title:t}),Object(o.jsxs)(p.a,{children:[Object(o.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t}),Object(o.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:a})]}),Object(o.jsxs)(x.a,{children:[Object(o.jsx)(g.a,{children:Object(o.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:"Deployed Application"})}),Object(o.jsx)(g.a,{children:Object(o.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:"Github Repository"})})]})]})})},k=function(){return Object(o.jsx)("section",{className:"projects-container",children:[{name:"Music-Line",tech:"Javascript/Express/Handlebars.js/Node",deployed:"https://guarded-dawn-15470.herokuapp.com/",image:"../../assets/images/musicline.png",repo:"https://github.com/axeliono/Music-Line"},{name:"Meal-Q",tech:"SASS/HTML/JavaScript/API",deployed:"https://axeliono.github.io/Meal-Queue/",image:"../../assets/images/mealQ.png",repo:"https://github.com/axeliono/Meal-Queue"},{name:"Weather-Dashboard",tech:"Javascript/API",deployed:"https://axeliono.github.io/weather-dashboard/",image:"../../assets/images/weather-dashboard.jpg",repo:"https://github.com/axeliono/weather-dashboard"},{name:"Team-Profile-Generator",tech:"Javascript/Node/Bootstrap/HTML",deployed:"https://github.com/axeliono/team-profile-generator/",image:"../../assets/images/team-profile-generator.jpg",repo:"https://github.com/axeliono/team-profile-generator"},{name:"Budget-Tracker",tech:"Javascript/Node/HTML/Webpack",deployed:"https://vast-eyrie-36715.herokuapp.com/",image:"../../assets/images/budget-tracker.jpg",repo:"https://github.com/axeliono/budget-tracker"},{name:"Budget-Tracker",tech:"Javascript/Node/HTML/Webpack",deployed:"https://vast-eyrie-36715.herokuapp.com/",image:"../../assets/images/budget-tracker.jpg",repo:"https://github.com/axeliono/budget-tracker"}].map((function(e){return Object(o.jsx)("div",{className:"project-card my-2 mx-2",children:Object(o.jsx)(y,{name:e.name,tech:e.tech,deployed:e.deployed,image:e.image,repo:e.repo})})}))})},w=a(91),S=a(92),C=a(40),T=a.n(C),N=a(41),M=a.n(N),B=a(42),A=a.n(B),J=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(w.a,{showLabels:!0,children:[Object(o.jsx)(S.a,{label:"Github",icon:Object(o.jsx)(T.a,{}),href:"https://github.com/axeliono",target:"_blank"}),Object(o.jsx)(S.a,{label:"LinkedIn",icon:Object(o.jsx)(M.a,{}),href:"https://www.linkedin.com/in/chandleregreen/",target:"_blank"}),Object(o.jsx)(S.a,{label:"Facebook",icon:Object(o.jsx)(A.a,{}),href:"https://www.facebook.com/Axeliono",target:"_blank"})]})})},L=function(){return Object(o.jsxs)("div",{className:"proficieny-list",children:[Object(o.jsx)("a",{href:"https://drive.google.com/file/d/1RiuIm7XM7HPCmT9JRaGGoFfiCKH3Gknh/view?usp=sharing",target:"_blank",rel:"noreferrer",download:!0,children:"Download Resume"}),Object(o.jsx)("h3",{children:"Front-end Proficiencies"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Javascript"}),Object(o.jsx)("li",{children:"React"}),Object(o.jsx)("li",{children:"HTML"}),Object(o.jsx)("li",{children:"CSS"}),Object(o.jsx)("li",{children:"SASS"}),Object(o.jsx)("li",{children:"Bootstrap"}),Object(o.jsx)("li",{children:"JQuery"})]}),Object(o.jsx)("h3",{children:"Back-end Proficiencies"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"MySQL"}),Object(o.jsx)("li",{children:"MongoDB"}),Object(o.jsx)("li",{children:"Node.js"}),Object(o.jsx)("li",{children:"Express"}),Object(o.jsx)("li",{children:"Handlebars.js"})]})]})};var I=function(){var e=["ABOUT","PROJECTS","CONTACT","RESUME"],t=Object(r.useState)(e[0]),a=Object(s.a)(t,2),c=a[0],n=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{tabs:e,currentTab:c,setCurrentTab:n}),Object(o.jsx)("main",{children:function(){switch(c){case"ABOUT":return Object(o.jsx)(j,{});case"PROJECTS":return Object(o.jsx)(k,{});case"CONTACT":return Object(o.jsx)(b,{});case"RESUME":return Object(o.jsx)(L,{});default:return Object(o.jsx)(j,{})}}()}),Object(o.jsx)(J,{})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,95)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),r(e),c(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root")),F()}},[[58,1,2]]]);
//# sourceMappingURL=main.426c76e4.chunk.js.map