(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(13915)}])},13915:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var a=n(85893),o=n(60757),s=n(55829),r=n(99840),i=n(94184),l=n.n(i),c=n(67294),d=n(41664),p=n.n(d);let h=e=>{let{newTab:t,...n}=e;return(0,a.jsx)(p(),{...t?{target:"_blank",rel:"noopener noreferrer"}:{},...n})};var m=n(42001),u=n.n(m);let f=e=>{let{className:t,...n}=e;return(0,a.jsx)(h,{className:l()(u().button,t),...n})};var x=n(67736),_=n.n(x);let g=e=>{let{className:t,buttonWidth:n,children:o}=e;return(0,a.jsx)("div",{className:l()(_().ctaButtons,t),children:c.Children.map(o,e=>void 0===e?null:c.cloneElement(e,{className:l()(e.props.className,_().ctaButton,n&&_()[n])}))})};var j=n(25675),b=n.n(j),y=n(70682),C=n.n(y),v={src:"/_next/static/media/profile.d396a159.webp",height:600,width:600,blurDataURL:"data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADQAQCdASoIAAgAAkA4JQBOgB8xcOGZcAD+2tcgLOz89/COmoaLz+7JFx0RHgcFjtI1/5vGBPBfVAkNc/hlLW3E51hvzS/FK9KpNhGZgAA=",blurWidth:8,blurHeight:8};let k=()=>(0,a.jsxs)("div",{className:C().container,children:[(0,a.jsxs)("div",{className:C().contentContainer,children:[(0,a.jsxs)("h1",{className:C().header,children:[(0,a.jsx)("span",{className:C().nameIntro,children:"Hi, my name is"}),(0,a.jsx)("span",{className:C().name,children:"Ken!"})]}),(0,a.jsx)("p",{className:C().selfIntro,children:"I’m a self-driven full stack software engineer and UX developer looking to create products that change the world!"})]}),(0,a.jsx)("div",{className:C().imagePosition,children:(0,a.jsx)("div",{className:C().imageContainer,children:(0,a.jsx)(b(),{className:C().image,src:v,alt:"Picture of Ken, your future employee!",fill:!0,priority:!0})})})]});var N=n(76052),S=n.n(N);let w=e=>{let{skills:t}=e;return(0,a.jsx)("ul",{className:S().container,children:t.map((e,t)=>{let{label:n,content:o}=e;return(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:S().skillLabel,children:n}),": ",o.join(", ")]},t)})})};var I=n(92306),A=n.n(I);let B=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:A().container,children:c.Children.toArray(t).map((e,t,n)=>(0,a.jsxs)(c.Fragment,{children:[(0,a.jsx)(D,{rowNumber:t+1,hasTop:t>0,hasBottom:t<n.length-1}),(0,a.jsx)("div",{className:A().milestoneContent,children:e})]},t))})},D=e=>{let{rowNumber:t,hasTop:n,hasBottom:o}=e;return(0,a.jsxs)("div",{className:A().line,style:{"--row-number":t},children:[n&&(0,a.jsx)("div",{className:A().lineTop}),o&&(0,a.jsx)("div",{className:A().lineBottom}),(0,a.jsx)("div",{className:A().lineCircle})]})};var L=n(14141),P=n.n(L);let T=e=>{let{experiences:t}=e;return(0,a.jsx)(B,{children:t.map((e,t)=>(0,a.jsxs)("div",{className:P().experience,children:[(0,a.jsxs)("div",{className:P().companyAndPosition,children:[(0,a.jsx)("h3",{className:P().company,children:e.company}),e.position&&(0,a.jsxs)("span",{className:P().position,children:[" ","- ",e.position]})]}),e.introduction&&(0,a.jsx)("p",{children:e.introduction}),(0,a.jsx)("ul",{className:P().points,children:e.points.map((e,t)=>(0,a.jsx)("li",{className:P().point,children:e},t))})]},t))})},F=e=>{let{className:t,...n}=e;return(0,a.jsx)("button",{type:"button",className:l()(u().button,t),...n})};var J=n(78474),M=n.n(J);let R=e=>{let{className:t,...n}=e;return(0,a.jsx)("textarea",{className:l()(M().textInput,t),...n})},E=e=>{let{className:t,...n}=e;return(0,a.jsx)("input",{type:"text",className:l()(M().textInput,t),...n})};var Z=n(6154),G=n(48805),U=n.n(G);let W=()=>{let[e,t]=(0,c.useState)(""),[n,o]=(0,c.useState)(""),[s,r]=(0,c.useState)(""),[i,l]=(0,c.useState)(void 0),[d,p]=(0,c.useState)(!1);async function h(){p(!0),l("Sending message...");let a=new FormData;a.append("entry.1209653842",e),a.append("entry.244686096",n),a.append("entry.88592590",s);try{await (0,Z.Z)({method:"post",url:"https://docs.google.com/forms/d/e/1FAIpQLSfHYdDY1spAWC3BbuIZYwPKsD0GffhY7D3kxC_AhWcmios6Hg/formResponse",data:a})}catch(i){}t(""),o(""),r(""),l("Message successfully sent!"),p(!1)}return(0,a.jsx)("div",{className:U().container,children:(0,a.jsxs)("div",{className:U().form,children:[(0,a.jsxs)("label",{className:U().field,children:["Name",(0,a.jsx)("br",{}),(0,a.jsx)(E,{value:e,onChange:e=>{t(e.currentTarget.value),l(void 0)},disabled:d})]}),(0,a.jsxs)("label",{className:U().field,children:["Email",(0,a.jsx)("br",{}),(0,a.jsx)(E,{value:n,onChange:e=>{o(e.currentTarget.value),l(void 0)},disabled:d})]}),(0,a.jsxs)("label",{className:U().field,children:["Message",(0,a.jsx)("br",{}),(0,a.jsx)(R,{value:s,onChange:e=>{r(e.currentTarget.value),l(void 0)},disabled:d})]}),i&&(0,a.jsx)("p",{className:U().statusMessage,children:i}),(0,a.jsx)(g,{buttonWidth:"lg",children:(0,a.jsx)(F,{disabled:!(e&&n&&s)||d,onClick:h,children:"Send"})})]})})};var O=n(41524),H=n.n(O);let K=e=>{let{className:t,href:n,newTab:o,...s}=e,r=l()(void 0!==n&&H().textLink,t);return void 0===n?(0,a.jsx)("span",{className:r,...s}):(0,a.jsx)(h,{className:r,href:n,...o?{target:"_blank",rel:"noopener noreferrer"}:{},...s})};var Q=n(72519),X=n.n(Q),Y=n(60250),z=n.n(Y);let V=e=>{let{portfolio:t}=e;return(0,a.jsx)("div",{className:z().portfolioGrid,children:t.map((e,t)=>(0,a.jsxs)("div",{className:z().card,children:[(0,a.jsx)("div",{style:{height:"300px",backgroundColor:"green"}}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{children:e.title}),(0,a.jsx)("div",{children:e.description})]})]},t))})},q=()=>{let e=new Date,t="".concat(e.getFullYear(),"-").concat((e.getMonth()+1).toLocaleString("en-US",{minimumIntegerDigits:2}),"-").concat(e.getDate().toLocaleString("en-US",{minimumIntegerDigits:2}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{noTitlePrefix:!0}),(0,a.jsxs)(o.Z,{footerContent:"Designed and built from scratch by @Kenneth-LJS with NextJS and SCSS!",children:[(0,a.jsx)(s.Z,{children:(0,a.jsx)(k,{})}),(0,a.jsxs)(s.Z,{anchorId:"about-me",children:[(0,a.jsx)("h2",{className:X().header,children:"About Me"}),(0,a.jsx)("p",{children:"I started my programming journey when I self-learnt coding at the age of 14. Since then, I’ve been learning new coding skills, experimenting with projects, and discovering the joys of raw creation through programming."}),(0,a.jsx)("p",{children:"My passion is in creating great user experiences for people, which is why I’ve also picked up graphic and web design. Find out more about me below!"})]}),(0,a.jsxs)(s.Z,{anchorId:"experience",children:[(0,a.jsx)("h2",{className:X().header,children:"Experience"}),(0,a.jsx)(T,{experiences:[{company:"Indeed.com",position:"UX Developer",date:"Jan 2022 - Mar 2023",introduction:"Worked on the job search page that allows job-seekers to search, filter, and curate posted jobs.",points:["Built frontend features with React, Typescript, SASS, and Emotion JS.","Developed React components with Storybook to reduce development lead time by making it easier to review code and test components.","Furthered UX research by building high-fidelity prototypes with Webpack and React for research participants to interact with."]},{company:"Indeed.com",position:"Software Engineer",date:"Jul 2019 - Dec 2021",introduction:"Worked on the frontend and backend of the employer platform that allows employers to create their company profiles on the Indeed website.",points:["Built features on the backend (Java Spring Boot, Redis) and frontend (Soy template, React), connecting them with RESTful APIs.","Created and maintained regression tests on Jest and Cypress.","Automated tasks with shell scripts on a UNIX machine.","Represented Indeed at local university outreach events. I created a Telegram Bot workshop and conducted it at multiple events."]},{company:"LeanData",position:"Software Engineer",date:"Aug 2017 - Jul 2018",introduction:"Internship under the NUS Overseas Colleges (NOC) Programme. LeanData is a Salesforce app that automates and coordinates sales and marketing operations.",points:["Built new LeanData products from the ground up with both front and backend on the Salesforce platform, added new features to existing products, and made many quality-of-life improvements."]},{company:"Bachelor of Computing (Computer Science)",date:"Aug 2015 - Jul 2019",points:["Graduated with a GPA 4.71 / 5.00 (Honours).","Dean’s List in Year 4 Semester 1 for achieving the top 5% GPA of my cohort.","Awarded the ​National Infocomm Scholarship (NIS) offered by IMDA."]}]})]}),(0,a.jsxs)(s.Z,{anchorId:"skills",children:[(0,a.jsx)("h2",{className:X().header,children:"Skills"}),(0,a.jsx)(w,{skills:[{label:"Backend",content:["Java (Spring Boot, Maven, Gradle)","Python","C#","Shell Script"]},{label:"Frontend",content:["HTML","CSS","SCSS","Javascript","Typescript","React","NextJS","Node","Webpack","Express","Jest","Cypress","Storybook","Soy templates"]},{label:"Database",content:["SQL","MongoDB","Redis"]},{label:"System",content:["Windows","Unix","MacOS"]}]})]}),(0,a.jsxs)(s.Z,{anchorId:"portfolio",children:[(0,a.jsx)("h2",{className:X().header,children:"Portfolio"}),(0,a.jsx)(V,{portfolio:[{title:"Domsi",description:"asdfsakdhf lfkh slkdf hdslkf hsdf lkdshkf ldshf lksdf hdslkf hsdlkf shdf lksd"},{title:"Project 1",description:"asdfsakdhf"},{title:"Project 2",description:"asdfsakdhf"},{title:"Project 3",description:"asdfsakdhf"},{title:"Project 4",description:"asdfsakdhf"},{title:"Project 5",description:"asdfsakdhf"}]})]}),(0,a.jsxs)(s.Z,{anchorId:"resume",children:[(0,a.jsx)("h2",{className:X().header,children:"Resume"}),(0,a.jsx)("p",{className:X().center,children:"Looking for my resume? Check it out here!"}),(0,a.jsx)(g,{buttonWidth:"lg",children:(0,a.jsx)(f,{href:"/cv-2023-03-30.pdf",download:"Loh Jia Shun Kenneth - Resume (".concat(t,")"),newTab:!0,children:"Download Resume"})})]}),(0,a.jsxs)(s.Z,{anchorId:"contact",children:[(0,a.jsx)("h2",{className:X().header,children:"Contact"}),(0,a.jsx)(W,{}),(0,a.jsxs)("p",{className:X().contactMessage,children:["Alternatively, you can reach out to me through"," ",(0,a.jsx)(K,{href:"https://www.linkedin.com/in/kenneth-ljs/",newTab:!0,children:"LinkedIn"})," ","or"," ",(0,a.jsx)(K,{href:"mailto:kenneth_ljs@live.com",newTab:!0,children:"email"}),"!"]})]})]})]})};function $(){return(0,a.jsx)(q,{})}},42001:function(e){e.exports={baseFs:"18px",baseColor:"#1f2834",primaryColor:"#eee",secondaryColor:"#11d0da",button:"button_button__0QfOJ"}},67736:function(e){e.exports={ctaButtons:"cta-buttons_ctaButtons__keigp",ctaButton:"cta-buttons_ctaButton__IZPos",md:"cta-buttons_md__BOIOV",lg:"cta-buttons_lg__2sD_V"}},78474:function(e){e.exports={baseFs:"18px",baseColor:"#1f2834",primaryColor:"#eee",secondaryColor:"#11d0da",textInput:"text-input_textInput__iLKSs"}},41524:function(e){e.exports={baseColor:"#1f2834",primaryColor:"#eee",secondaryColor:"#11d0da",textLink:"text-link_textLink__kMkhm"}},70682:function(e){e.exports={baseFs:"18px",baseColor:"#1f2834",primaryColor:"#eee",secondaryColor:"#11d0da",container:"banner_container__Z856z",contentContainer:"banner_contentContainer__SKxSv",nameIntro:"banner_nameIntro__ix7KV",name:"banner_name__lSRv9",imagePosition:"banner_imagePosition__t0pW4",imageContainer:"banner_imageContainer__HpmfK"}},48805:function(e){e.exports={baseFs:"18px",baseColor:"#1f2834",primaryColor:"#eee",secondaryColor:"#11d0da",container:"contact-form_container__98DLP",form:"contact-form_form__h2uT9",field:"contact-form_field__QHyA0",statusMessage:"contact-form_statusMessage__1y2Ud"}},14141:function(e){e.exports={baseFs:"18px",baseColor:"#1f2834",primaryColor:"#eee",secondaryColor:"#11d0da",company:"experience-table_company__JHOWs",position:"experience-table_position__UZEUC",points:"experience-table_points__2EU4x",point:"experience-table_point__pj3P3"}},72519:function(e){e.exports={baseFs:"18px",baseColor:"#1f2834",primaryColor:"#eee",secondaryColor:"#11d0da",header:"page_header__uRGtx",center:"page_center__Ybwf8",infoContainer:"page_infoContainer__omifx",infoSection:"page_infoSection__gwSW6",infoSectionText:"page_infoSectionText__izgsv",infoSectionCTAButtons:"page_infoSectionCTAButtons__ioG0h",contactMessage:"page_contactMessage__wHPFv"}},60250:function(e){e.exports={baseFs:"18px",baseColor:"#1f2834",primaryColor:"#eee",secondaryColor:"#11d0da",portfolioGrid:"portfolio-grid_portfolioGrid__m2DFB",card:"portfolio-grid_card__Z9J66"}},76052:function(e){e.exports={baseColor:"#1f2834",primaryColor:"#eee",secondaryColor:"#11d0da",container:"skills_container__wd_HK",skillLabel:"skills_skillLabel__eX6ea"}},92306:function(e){e.exports={baseFs:"18px",baseColor:"#1f2834",primaryColor:"#eee",secondaryColor:"#11d0da",container:"timeline_container__uN0Gg",line:"timeline_line__lNojM",lineTop:"timeline_lineTop__orok9",lineBottom:"timeline_lineBottom__FtzoL",lineCircle:"timeline_lineCircle__n3VYE",milestoneContent:"timeline_milestoneContent__MmivW"}}},function(e){e.O(0,[108,154,646,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);