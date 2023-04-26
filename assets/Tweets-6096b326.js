import{R as _,u as Bt,r as j,s as c,j as o,e as Lt,a as b,b as F,c as Dt,U as C,d as I,f as It,g as Ut,L as zt}from"./index-9114b94d.js";function Pt(n=_){const t=n===_?Bt:()=>j.useContext(n);return function(){const{store:a}=t();return a}}const Qt=Pt();function Wt(n=_){const t=n===_?Qt:Pt(n);return function(){return t().dispatch}}const E=Wt();var O="NOT_FOUND";function qt(n){var t;return{get:function(a){return t&&n(t.key,a)?t.value:O},put:function(a,r){t={key:a,value:r}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function Mt(n,t){var e=[];function a(s){var u=e.findIndex(function(m){return t(s,m.key)});if(u>-1){var g=e[u];return u>0&&(e.splice(u,1),e.unshift(g)),g.value}return O}function r(s,u){a(s)===O&&(e.unshift({key:s,value:u}),e.length>n&&e.pop())}function i(){return e}function l(){e=[]}return{get:a,put:r,getEntries:i,clear:l}}var Nt=function(t,e){return t===e};function Yt(n){return function(e,a){if(e===null||a===null||e.length!==a.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],a[i]))return!1;return!0}}function Ht(n,t){var e=typeof t=="object"?t:{equalityCheck:t},a=e.equalityCheck,r=a===void 0?Nt:a,i=e.maxSize,l=i===void 0?1:i,s=e.resultEqualityCheck,u=Yt(r),g=l===1?qt(u):Mt(l,u);function m(){var p=g.get(arguments);if(p===O){if(p=n.apply(null,arguments),s){var f=g.getEntries(),v=f.find(function(y){return s(y.value,p)});v&&(p=v.value)}g.put(arguments,p)}return p}return m.clearCache=function(){return g.clear()},m}function Kt(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every(function(a){return typeof a=="function"})){var e=t.map(function(a){return typeof a=="function"?"function "+(a.name||"unnamed")+"()":typeof a}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function Xt(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];var r=function(){for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];var g=0,m,p={memoizeOptions:void 0},f=s.pop();if(typeof f=="object"&&(p=f,f=s.pop()),typeof f!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var v=p,y=v.memoizeOptions,w=y===void 0?e:y,Rt=Array.isArray(w)?w:[w],T=Kt(s),B=n.apply(void 0,[function(){return g++,f.apply(null,arguments)}].concat(Rt)),L=n(function(){for(var D=[],$t=T.length,k=0;k<$t;k++)D.push(T[k].apply(null,arguments));return m=B.apply(null,D),m});return Object.assign(L,{resultFunc:f,memoizedResultFunc:B,dependencies:T,lastResult:function(){return m},recomputations:function(){return g},resetRecomputations:function(){return g=0}}),L};return r}var Jt=Xt(Ht);const U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ2SURBVHgB7VixSgNBEJ0TI8QihQqm0MLGQgstbCxsrP1mQRsbwTQGkkKLBDRFBFMkYA7ivNxsmCx32U1MzAg+GG7vbm5v993Mm+GS0Wh0Q+vHgO0uSZK0yIHXecaHQ1ozNsgGymzn9AdghTCgylF0TMZhiTDgmEnbJ8OwRhhwzqRtk1FYJKzEdsmkbZJBxC5qyPbK1qWsopXFULV2c/x7bC3xT5XvAcXBFYFHWgzvbHUZH4kBD5Stf9Z7L2fcjyKsjxdxyR9414C2CLUW6yb7NnPm6LJvQxYUk3LjIpAzVwxSfm68Rp5jqK4P3PU8sO+IAgil5BRZPF+JreJpTEWN23qD4j/xlXnwlYcUBxSBZfZeWPuu2CRY3DXKz5YphCLsQ5GFjV9RpjE4f6Es3arKv6EWgTQ4lfGYKHxdzMfnSO/YFuKE/bu0HFyo8S1bynMH01AjFGEtNUanDbIQQTXKdKovY0TMp0fuqXq2LM87zEPAuAjIce0IRZjWrbIcu0zM1IZFx9IcXw2dxoU6UgBoiwnCQhGmN+7I20YEQZ88X61liD5fpzRJ8/RZmOeB5id5JQgRpkUQqYdFI7Wu2XY835IIJ8Qdm6yrey51HWLbC+DZq9BrRSglj5iEthNrPr8Vffoq+LOA1EQ0gLQW+77xcEuXcnm+SnFAi9ImQwhFmOu6dWvQ12SJfrn7KM9nrmTDL4esWAHvLNiDrRQxjSt07Jo3i4qJDjqV55B+6JH8zePanrQdPfWeIv88gOQnWhz4cO53UaXAB+1KSnMWk8TID0QN6N+9r1v/PxCLUbMk8j6sEQaR75BhWCLMpMj7sELYT0X+1/ANbvUOPPqsLv4AAAAASUVORK5CYII=",z="/tweetbox/assets/tweet-338b66fd.png";var d={},Gt={get exports(){return d},set exports(n){d=n}},Zt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Vt=Zt,tn=Vt;function Ft(){}function Ct(){}Ct.resetWarningCache=Ft;var nn=function(){function n(a,r,i,l,s,u){if(u!==tn){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}n.isRequired=n;function t(){return n}var e={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ct,resetWarningCache:Ft};return e.PropTypes=e,e};Gt.exports=nn();const en=c.li`
position: relative;
list-style: none;
width: 380px;
height: 460px;
background-repeat: no-repeat;
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23); 
border-radius: 20px;
 background:   
linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
 
 
`,rn=c.img`
  width: 63px;
  height: 63px;
  border-radius: 50%;
  position: absolute;
  left: 163.5px;
  top: 186.5px;
`,an=c.p`
position: absolute;
width: 132px;
height: 24px;
left: 124px;
top: 284px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: calc(24 / 20);
text-transform: uppercase;
color: #EBD8FF;
`,on=c.p`
position: absolute;
width: 214px;
height: 24px;
left: 83px;
top: 324px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: calc(24 / 20);
text-transform: uppercase;
color: #EBD8FF;
`,Q=c.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 28px;
gap: 6px;
position: absolute;
width: 196px;
height: 50px;
left: 92px;
top: 374px;
cursor: pointer;
background: ${n=>n.isFollow?"#5CD3A8":"#EBD8FF"};;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
`,W=c.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: calc(22 / 18);
text-transform: uppercase;
color: #373737;
flex: none;
order: 0;
flex-grow: 0;
`,sn=c.picture`
position: absolute;
width: 76px;
height: 22px;
left: 20px;
top: 20px;
`,ln=c.picture`
position: absolute;
width: 308px;
height: 168px;
left: 36px;
top: 28px;
`,cn=c.div`
position: absolute;
width: 380px;
height: 8px;
left: 0px;
top: 214px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`,un=c.div`
position: absolute;
width: 80px;
height: 80px;
left: 155px;
top: 178px;
background: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), 
inset 0px -2.19582px 4.39163px #AE7BE3, 
inset 0px 4.39163px 3.29372px #FBF8FF;
border-radius: 50%;
`,S=({id:n,user:t,tweets:e,followers:a,avatar:r,isFollowing:i})=>{const l=E(),s=()=>{l(Lt({id:n,followers:a,isFollowing:i}))};return o.jsxs("div",{children:[o.jsxs(sn,{children:[" ",o.jsx("source",{srcSet:`${U}`}),o.jsx("img",{src:U,alt:"logo"})]}),o.jsxs(ln,{children:[" ",o.jsx("source",{srcSet:`${z}`}),o.jsx("img",{src:z,alt:"tweets"})]}),o.jsx(cn,{}),o.jsx(un,{}),o.jsx(rn,{src:r,alt:t}),o.jsxs(an,{children:[e," tweets"]}),o.jsxs(on,{children:[a.toLocaleString("en-US")," followers"]}),i?o.jsx(Q,{isFollow:i,type:"button",onClick:s,children:o.jsx(W,{children:"following"})}):o.jsx(Q,{isFollow:i,type:"button",onClick:s,children:o.jsx(W,{children:"follow"})})]})};S.propTypes={id:d.string,user:d.string,followers:d.number,tweets:d.number,avatar:d.string};S.propTypes={isFollowing:d.bool};const gn=n=>n.tweets.items,Et=n=>n.filters.status,pn=n=>n.tweets.isLoading,fn=Jt([gn,Et],(n,t)=>{switch(t){case b.follow:return n.filter(e=>!e.isFollowing);case b.followings:return n.filter(e=>e.isFollowing);default:return n}}),hn=c.ul`
display: flex;
flex-wrap: wrap;
gap: 30px;
text-align: center;
justify-content: center
`,mn=c.button`
height: 50px;
width: 200px;
margin: 30px auto;
display: block;
padding: 15px 15px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: calc(22 / 18);
text-transform: uppercase;
:hover{
    background: #5CD3A8;
}
`,bn=()=>{const n=F(fn),[t,e]=j.useState(1),a=n.slice(0,t*3),r=t*3>=n.length,i=()=>{e(l=>l+1)};return o.jsxs(o.Fragment,{children:[o.jsx(hn,{children:a.map(({id:l,...s})=>o.jsx(en,{children:o.jsx(S,{id:l,...s})},l))}),r?null:o.jsx(mn,{type:"button",onClick:i,children:"Load More"})]})},dn=c.div`
 display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
`,A=c.button`
background: ${n=>n.selected?"#5CD3A8":"linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%)"};
`,yn=c.button`
margin-left: 40px; 
`,vn=()=>{const n=E(),t=F(Et),e=a=>n(Dt(a));return o.jsxs(dn,{children:[o.jsx(A,{selected:t===b.all,onClick:()=>e(b.all),children:"All"}),o.jsx(A,{selected:t===b.follow,onClick:()=>e(b.follow),children:"Follow"}),o.jsx(A,{selected:t===b.followings,onClick:()=>e(b.followings),children:"Followings"})]})};var xn="#4fa94d",_n={"aria-busy":!0,role:"status"},q=globalThis&&globalThis.__assign||function(){return q=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},q.apply(this,arguments)},M=globalThis&&globalThis.__assign||function(){return M=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},M.apply(this,arguments)},N=globalThis&&globalThis.__assign||function(){return N=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},N.apply(this,arguments)},Y=globalThis&&globalThis.__assign||function(){return Y=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Y.apply(this,arguments)},H=globalThis&&globalThis.__assign||function(){return H=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},H.apply(this,arguments)},K=globalThis&&globalThis.__assign||function(){return K=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},K.apply(this,arguments)},X=globalThis&&globalThis.__assign||function(){return X=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},X.apply(this,arguments)},St=globalThis&&globalThis.__makeTemplateObject||function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},h=242.776657104492,On=1.6,jn=C(J||(J=St([`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`],[`
  12.5% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  43.75% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
  100% {
    stroke-dasharray: `,"px, ",`px;
    stroke-dashoffset: -`,`px;
  }
`])),h*.14,h,h*.11,h*.35,h,h*.35,h*.01,h,h*.99);c.path(G||(G=St([`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`],[`
  stroke-dasharray: `,"px, ",`;
  stroke-dashoffset: 0;
  animation: `," ",`s linear infinite;
`])),h*.01,h,jn,On);var J,G,Z=globalThis&&globalThis.__assign||function(){return Z=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Z.apply(this,arguments)},V=globalThis&&globalThis.__assign||function(){return V=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},V.apply(this,arguments)},tt=globalThis&&globalThis.__assign||function(){return tt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},tt.apply(this,arguments)},nt=globalThis&&globalThis.__assign||function(){return nt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},nt.apply(this,arguments)},et=globalThis&&globalThis.__assign||function(){return et=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},et.apply(this,arguments)},rt=globalThis&&globalThis.__assign||function(){return rt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},rt.apply(this,arguments)},at=globalThis&&globalThis.__assign||function(){return at=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},at.apply(this,arguments)},wn=function(t,e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof a[t]<"u")return a[t];if(t&&t.indexOf(".")>0){for(var r=t.split("."),i=r.length,l=a[r[0]],s=1;l!=null&&s<i;)l=l[r[s]],s+=1;if(typeof l<"u")return l}return e}},R=globalThis&&globalThis.__makeTemplateObject||function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},P=globalThis&&globalThis.__assign||function(){return P=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},P.apply(this,arguments)},Tn=C(ot||(ot=R([`
 to {
    transform: rotate(360deg);
  }
`],[`
 to {
    transform: rotate(360deg);
  }
`]))),kn=[0,30,60,90,120,150,180,210,240,270,300,330],An=c.svg(st||(st=R([`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`],[`
  animation: `,` 0.75s steps(12, end) infinite;
  animation-duration: `,`s;
`])),Tn,wn("speed","0.75")),Pn=c.polyline(it||(it=R([`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`],[`
  stroke-width: `,`px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`])),function(n){return n.width});function Fn(n){var t=n.strokeColor,e=t===void 0?xn:t,a=n.strokeWidth,r=a===void 0?"5":a,i=n.animationDuration,l=i===void 0?"0.75":i,s=n.width,u=s===void 0?"96":s,g=n.visible,m=g===void 0?!0:g,p=n.ariaLabel,f=p===void 0?"rotating-lines-loading":p,v=j.useCallback(function(){return kn.map(function(y){return I.createElement(Pn,{key:y,points:"24,12 24,4",width:r,transform:"rotate(".concat(y,", 24, 24)")})})},[r]);return m?I.createElement(An,P({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:u,stroke:e,speed:l,"data-testid":"rotating-lines-svg","aria-label":f},_n),v()):null}var ot,st,it,lt=globalThis&&globalThis.__assign||function(){return lt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},lt.apply(this,arguments)},ct=globalThis&&globalThis.__assign||function(){return ct=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ct.apply(this,arguments)},ut=globalThis&&globalThis.__assign||function(){return ut=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ut.apply(this,arguments)},$=globalThis&&globalThis.__makeTemplateObject||function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},gt=globalThis&&globalThis.__assign||function(){return gt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},gt.apply(this,arguments)},Cn=C(pt||(pt=$([`
 to {
    stroke-dashoffset: 136;
  }
`],[`
 to {
    stroke-dashoffset: 136;
  }
`])));c.polygon(ft||(ft=$([`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`],[`
  stroke-dasharray: 17;
  animation: `,` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`])),Cn);c.svg(ht||(ht=$([`
  transform-origin: 50% 65%;
`],[`
  transform-origin: 50% 65%;
`])));var pt,ft,ht,mt=globalThis&&globalThis.__assign||function(){return mt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},mt.apply(this,arguments)},bt=globalThis&&globalThis.__assign||function(){return bt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},bt.apply(this,arguments)},dt=globalThis&&globalThis.__assign||function(){return dt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},dt.apply(this,arguments)},yt=globalThis&&globalThis.__assign||function(){return yt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},yt.apply(this,arguments)},vt=globalThis&&globalThis.__assign||function(){return vt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},vt.apply(this,arguments)},xt=globalThis&&globalThis.__assign||function(){return xt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},xt.apply(this,arguments)},_t=globalThis&&globalThis.__assign||function(){return _t=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_t.apply(this,arguments)},Ot=globalThis&&globalThis.__assign||function(){return Ot=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ot.apply(this,arguments)},jt=globalThis&&globalThis.__assign||function(){return jt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},jt.apply(this,arguments)},wt=globalThis&&globalThis.__assign||function(){return wt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},wt.apply(this,arguments)},Tt=globalThis&&globalThis.__assign||function(){return Tt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Tt.apply(this,arguments)},kt=globalThis&&globalThis.__assign||function(){return kt=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},kt.apply(this,arguments)},At=globalThis&&globalThis.__assign||function(){return At=Object.assign||function(n){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},At.apply(this,arguments)};const En=c.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1200;
`,Sn=()=>o.jsx(En,{children:o.jsx(Fn,{strokeColor:"#5CD3A8",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})});function $n(){var r;const n=E(),t=F(pn),a=((r=It().state)==null?void 0:r.from)??"/";return j.useEffect(()=>{n(Ut())},[n]),o.jsxs(o.Fragment,{children:[t&&o.jsx(Sn,{}),o.jsx(zt,{to:a,children:o.jsx(yn,{type:"button",children:"Go Back"})}),o.jsx(vn,{}),o.jsx(bn,{})]})}export{$n as default};
