(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663],{37014:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var a=n(20791),r=n(13428),i=n(2265),s=n(57042),o=n(61380),d=n(25702),l=n(95600),u=n(48153),c=n(39190),m=n(27796),p=n(57437);let x=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,m.Z)(),f=(0,c.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`maxWidth${(0,o.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),g=e=>(0,u.Z)({props:e,name:"MuiContainer",defaultTheme:h}),Z=(e,t)=>{let{classes:n,fixed:a,disableGutters:r,maxWidth:i}=e,s={root:["root",i&&`maxWidth${(0,o.Z)(String(i))}`,a&&"fixed",r&&"disableGutters"]};return(0,l.Z)(s,e=>(0,d.Z)(t,e),n)};function b(e={}){let{createStyledComponent:t=f,useThemeProps:n=g,componentName:o="MuiContainer"}=e,d=t(({theme:e,ownerState:t})=>(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,n)=>{let a=e.breakpoints.values[n];return 0!==a&&(t[e.breakpoints.up(n)]={maxWidth:`${a}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,r.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),l=i.forwardRef(function(e,t){let i=n(e),{className:l,component:u="div",disableGutters:c=!1,fixed:m=!1,maxWidth:h="lg"}=i,f=(0,a.Z)(i,x),g=(0,r.Z)({},i,{component:u,disableGutters:c,fixed:m,maxWidth:h}),b=Z(g,o);return(0,p.jsx)(d,(0,r.Z)({as:u,ownerState:g,className:(0,s.Z)(b.root,l),ref:t},f))});return l}},28480:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(13428),r=n(20791),i=n(2265),s=n(57042),o=n(69613),d=n(87947),l=n(43381),u=n(95270),c=n(57437);let m=["className","component"];function p(e={}){let{themeId:t,defaultTheme:n,defaultClassName:p="MuiBox-root",generateClassName:x}=e,h=(0,o.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(d.Z),f=i.forwardRef(function(e,i){let o=(0,u.Z)(n),d=(0,l.Z)(e),{className:f,component:g="div"}=d,Z=(0,r.Z)(d,m);return(0,c.jsx)(h,(0,a.Z)({as:g,ref:i,className:(0,s.Z)(f,x?x(p):p),theme:t&&o[t]||o},Z))});return f}},82001:function(e,t,n){Promise.resolve().then(n.bind(n,45546))},45546:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var a=n(57437),r=n(2265),i=n(53085),s=n(65391);class o{async loginWithEmail(e){let{email:t,password:n}=e;return await (0,i.e5)(s.I,t,n).then(e=>{let t=e.user;return{isLogged:!0,data:{user:t}}}).catch(e=>{let t=e.code,n=e.message;return{isLogged:!1,data:{errorCode:t,errorMessage:n}}})}async logout(){return await s.I.signOut()}constructor(){}}var d=n(28874),l=n(29872),u=n(28480),c=n(25097),m=n(30606),p=n(53469);let x=(0,m.Z)(),h=(0,u.Z)({themeId:p.Z,defaultTheme:x,defaultClassName:"MuiBox-root",generateClassName:c.Z.generate});var f=n(43226),g=n(71430),Z=n(35551),b=n(37014),v=n(28702),j=n(35843),k=n(87927);let w=(0,b.Z)({createStyledComponent:(0,j.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`maxWidth${(0,v.Z)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,k.Z)({props:e,name:"MuiContainer"})});function W(e){let{children:t}=e,n=new o,[u,c]=(0,r.useState)(!1),[m,p]=(0,r.useState)({email:"",password:""}),x=async()=>{await n.logout()},b=async e=>{e.preventDefault();let t=await n.loginWithEmail({email:m.email,password:m.password});t.isLogged?c(!0):c(!1)},v=e=>{let{name:t,value:n}=e.target;p(e=>({...e,[t]:n}))};return((0,r.useEffect)(()=>{(0,i.Aj)(s.I,e=>{e?c(!0):c(!1)})},[]),u)?(0,a.jsxs)(d.ZP,{alignItems:"center",container:!0,justifyContent:"center",direction:"column",rowGap:4,mb:4,children:[t,(0,a.jsx)(d.ZP,{alignItems:"center",container:!0,component:w,justifyContent:"center",item:!0,xs:!0,maxWidth:"lg",children:(0,a.jsx)(Z.Z,{variant:"contained",onClick:x,sx:{fontWeight:600,textTransform:"none"},children:"Deslogar"})})]}):(0,a.jsxs)(d.ZP,{container:!0,component:"main",sx:{height:"100vh"},direction:{xs:"column",md:"row"},children:[(0,a.jsx)(d.ZP,{item:!0,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random?wallpapers)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},"aria-hidden":"true"}),(0,a.jsx)(d.ZP,{alignItems:"center",justifyContent:"center",item:!0,xs:12,sm:8,md:5,component:l.Z,elevation:6,square:!0,children:(0,a.jsxs)(h,{sx:{my:8,mx:{xs:1,md:12},display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.jsx)(f.Z,{component:"h1",variant:"h5",children:"Fa\xe7a login para acessar esses dados"}),(0,a.jsxs)(h,{component:"form",noValidate:!0,sx:{mt:3},children:[(0,a.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,a.jsx)(d.ZP,{item:!0,xs:12,children:(0,a.jsx)(g.Z,{required:!0,fullWidth:!0,id:"email",label:"Seu Email",name:"email",autoComplete:"email",onChange:v})}),(0,a.jsx)(d.ZP,{item:!0,xs:12,children:(0,a.jsx)(g.Z,{required:!0,fullWidth:!0,id:"password",label:"Sua senha",name:"password",autoComplete:"password",onChange:v,type:"password"})})]}),(0,a.jsx)(Z.Z,{onClick:b,fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,textTransform:"none",fontWeight:"500"},children:"Fazer login"})]})]})})]})}},65391:function(e,t,n){"use strict";n.d(t,{F:function(){return o},I:function(){return d}});var a=n(20994),r=n(42307),i=n(53085);let s=(0,a.ZF)({apiKey:"AIzaSyAnWGvMwSr-kmNP7yq7SoP4EZOsS2jvjzI",authDomain:"corre-brasil.firebaseapp.com",databaseURL:"https://corre-brasil-default-rtdb.firebaseio.com",projectId:"corre-brasil",storageBucket:"corre-brasil.appspot.com",messagingSenderId:"888748109483",appId:"1:888748109483:web:687bb797e5f03e903311ee"}),o=(0,r.N8)(s),d=(0,i.v0)(s)}},function(e){e.O(0,[481,214,125,988,290,693,53,836,365,971,596,744],function(){return e(e.s=82001)}),_N_E=e.O()}]);