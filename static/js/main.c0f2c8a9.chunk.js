(this.webpackJsonpclub_dashboard=this.webpackJsonpclub_dashboard||[]).push([[0],{62:function(e,a,t){e.exports=t(78)},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(6),l=t.n(i),c=(t(67),t(54)),o=t(8),s=(t(68),t(35)),m=t(47),u=t(19),d=t(3),p=t(113),g=t(23),b=t(129),E=t(117),v=t(118),h=t(121),f=t(115),w=t(120),_=t(119),j=t(51),N=t.n(j),x=t(53),y=t.n(x),O=t(52),S=t.n(O),C=t(130),k=t(122),B=t(123),F=(t(69),Object(p.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(u.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}})));function I(){var e,a,t=F(),n=Object(g.a)(),i=r.a.useState(!1),l=Object(s.a)(i,2),c=l[0],o=l[1];return r.a.createElement("div",{className:t.root},r.a.createElement(f.a,null),r.a.createElement(E.a,{position:"fixed",className:Object(d.a)(t.appBar,Object(u.a)({},t.appBarShift,c)),id:"navbar__appbar__bgcolor"},r.a.createElement(v.a,null,r.a.createElement(_.a,{"aria-label":"open drawer",onClick:function(){o(!0)},edge:"start",className:Object(d.a)(t.menuButton,Object(u.a)({},t.hide,c))},r.a.createElement(N.a,null)),r.a.createElement("div",{id:"navbar__top"},r.a.createElement("img",{src:"/images/logo.png",alt:""}),r.a.createElement("div",{className:"navbar__socialicon"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"/images/insta.png",alt:"",width:"35"})),r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"/images/twitter.png",alt:"",width:"35"})),r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"/images/fb.png",alt:"",width:"35"})))))),r.a.createElement(b.a,{variant:"permanent",className:Object(d.a)(t.drawer,(e={},Object(u.a)(e,t.drawerOpen,c),Object(u.a)(e,t.drawerClose,!c),e)),classes:{paper:Object(d.a)((a={},Object(u.a)(a,t.drawerOpen,c),Object(u.a)(a,t.drawerClose,!c),a))}},r.a.createElement("div",{className:t.toolbar},r.a.createElement(_.a,{onClick:function(){o(!1)}},"rtl"===n.direction?r.a.createElement(S.a,null):r.a.createElement(y.a,null))),r.a.createElement(w.a,null),r.a.createElement(h.a,{className:"list__drawer"},r.a.createElement(C.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement("img",{src:"/images/home__icon.png",alt:"",width:"25"})),r.a.createElement(B.a,null,"Home")),r.a.createElement(C.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement("img",{src:"/images/piechart__icon.png",alt:"",width:"25"})),r.a.createElement(B.a,null,"Clubs & Events")),r.a.createElement(C.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement("img",{src:"/images/user__icon.png",alt:"",width:"25"})),r.a.createElement(B.a,null,"User")),r.a.createElement(C.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement("img",{src:"/images/faq__icon.png",alt:"",width:"25"})),r.a.createElement(B.a,null,"FAQ's")))))}var L=function(){var e=r.a.createElement(I,null);return l.a.createPortal(e,document.getElementById("drawer-hook"))},A=t(124),D=t(56),U=(t(74),t(125)),q=t(127),R=t(126),T=t(128),z=t(37),M=(t(75),Object(p.a)({root:{width:275,background:"#F2F5FA",margin:"2rem 0 1rem 6px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},content:{display:"flex",flexDirection:"column"},divlogo:{textAlign:"center",margin:"1rem 0"},logo:{width:"59px",border:"100px"},button:{background:"#6A5FDE",color:"white"},actionbutton:{display:"flex",justifyContent:"center",alignItems:"center",margin:"0rem 0 1rem"}}));var P=function(e){var a=M();return r.a.createElement(r.a.Fragment,null,e.clubs.map((function(e){return r.a.createElement(A.a,{item:!0,md:3},r.a.createElement(U.a,{className:a.root,variant:"outlined"},r.a.createElement(R.a,null,r.a.createElement(z.a,{className:a.title,gutterBottom:!0},e.clubName),r.a.createElement("div",{className:a.divlogo},r.a.createElement("img",{src:e.clubLogo,alt:"",className:a.logo}),r.a.createElement(z.a,{variant:"body2",component:"p"},r.a.createElement("br",null),'"a benevolent smile"'))),r.a.createElement(q.a,{className:a.actionbutton},r.a.createElement(T.a,{variant:"outlined",className:a.button,size:"small"},"Learn More"))))})))};var J=function(){var e=Object(n.useState)([{id:1,clubName:"DSC RTU",clubLogo:"https://res.cloudinary.com/devncode/image/upload/v1575267757/production_devncode/community/1575267756355.jpg"},{id:2,clubName:"DSC RTU",clubLogo:"https://res.cloudinary.com/devncode/image/upload/v1575267757/production_devncode/community/1575267756355.jpg"},{id:2,clubName:"DSC RTU",clubLogo:"https://res.cloudinary.com/devncode/image/upload/v1575267757/production_devncode/community/1575267756355.jpg"},{id:2,clubName:"DSC RTU",clubLogo:"https://res.cloudinary.com/devncode/image/upload/v1575267757/production_devncode/community/1575267756355.jpg"},{id:2,clubName:"DSC RTU",clubLogo:"https://res.cloudinary.com/devncode/image/upload/v1575267757/production_devncode/community/1575267756355.jpg"}]),a=Object(s.a)(e,2),t=a[0];return a[1],r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{container:!0},r.a.createElement(A.a,{item:!0,md:8},r.a.createElement(A.a,{container:!0},r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement("h1",null,"About ",r.a.createElement("span",{id:"forbold"},"Us"))),r.a.createElement(A.a,{item:!0,xs:12},r.a.createElement(D.a,{elevation:0,variant:"outlined",className:"home__content__paper"},"Nam sed congue mi. Pellentesque aliquam, purus vel euismod interdum, erat mi posuere orci, vel hendrerit nulla libero vel mauris. Curabitur vitae tellus fermentum, aliquet quam sed, dapibus nibh. Nunc interdum enim vel arcu feugiat, vel blandit velit viverra. Cras at turpis ultricies, dignissim ipsum sed, consectetur metus. Praesent faucibus felis turpis, sed molestie nunc ullamcorper sit amet. Aenean lacinia pulvinar nunc, in dignissim ligula euismod sit amet. Mauris ut placerat ligula, vitae vehicula dui. In dapibus eu nibh ultricies tincidunt. Suspendisse iaculis odio non ante egestas sagittis. Morbi sed urna dui. Nam efficitur velit odio, nec pharetra leo pulvinar sed. Fusce eu turpis pharetra, dignissim nulla id, feugiat nisi. Quisque urna arcu, mollis eu lectus eu, ultricies ornare risus. Sed a congue justo, ac porttitor orci. In vitae sem ultrices, bibendum elit nec, laoreet risus.")))),r.a.createElement(A.a,{item:!0,md:4,className:"home__content__image"},r.a.createElement("img",{src:"/images/home__image.png",alt:""}))),r.a.createElement(A.a,{container:!0,spacing:0},r.a.createElement(P,{clubs:t})))};var Q=function(){return r.a.createElement("div",{className:"home__main"},r.a.createElement(J,null))};var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(L,null),r.a.createElement("main",null,r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0},r.a.createElement(Q,null)),r.a.createElement(o.a,{to:"/"})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.c0f2c8a9.chunk.js.map