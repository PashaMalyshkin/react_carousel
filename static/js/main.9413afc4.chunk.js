(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a.n(n),s=a(1),c=(a(9),a(2)),r=(a(10),a(0)),l=function(e){var t=e.type,a=e.data,n=e.handleButton,i=e.isDisabled;return Object(r.jsx)("button",{type:"button","data-cy":a,className:"btn btn-light",onClick:n,disabled:i,children:t})},o=function(e){var t=e.name,a=e.id,n=e.min,i=e.step,s=e.max,c=e.value,l=e.onChange;return Object(r.jsx)("input",{type:"range",name:t,id:a,min:n,step:i,max:s,value:c,onChange:function(e){return l(+e.target.value)}})},m=function(e){var t=e.image,a=e.index,n=e.imageSize;return Object(r.jsx)("li",{children:Object(r.jsx)("img",{src:t,alt:"".concat(a),style:{width:"".concat(n,"px")}})})},u=function(e){var t=e.images,a=e.transformImage,n=e.frameSize,i=e.animationDuration,s=e.imageSize;return Object(r.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(a,"px)"),width:"".concat(n,"px"),transition:"transform ".concat(i,"ms")},children:t.map((function(e,t){return Object(r.jsx)(m,{image:e,index:t,imageSize:s},e)}))})},j=function(e){var t=e.images,a=Object(s.useState)(3),n=Object(c.a)(a,2),i=n[0],m=n[1],j=Object(s.useState)(1e3),b=Object(c.a)(j,2),d=b[0],g=b[1],p=Object(s.useState)(0),O=Object(c.a)(p,2),h=O[0],x=O[1],f=Object(s.useState)(130),v=Object(c.a)(f,2),_=v[0],C=v[1],S=Object(s.useState)(3*_),N=Object(c.a)(S,2),y=N[0],z=N[1],w=Object(s.useState)(y/_),D=Object(c.a)(w,2),F=D[0],A=D[1],I=Object(s.useState)(!1),B=Object(c.a)(I,2),k=B[0],E=B[1],W=Object(s.useState)(!1),J=Object(c.a)(W,2),P=J[0],X=J[1],q=t.length;Object(s.useEffect)((function(){A(y/_),E(!0)}),[y,_]),Object(s.useEffect)((function(){A(y/_),x(0),E(!0),X(!1)}),[i,d,_,y]);return Object(r.jsxs)("div",{className:"Carousel",children:[Object(r.jsx)("div",{className:"Carousel__container",style:{width:"".concat(y,"px")},children:Object(r.jsx)(u,{images:t,transformImage:h,frameSize:y,animationDuration:d,imageSize:_})}),Object(r.jsxs)("div",{className:"Carousel__buttons",children:[Object(r.jsx)(l,{type:"Prev",data:"prev",handleButton:function(){var e=F-i,t=y/_;(console.log(t),e>=t&&(x(h+_*i),A(e),X(!1)),e<t)&&(x(h+_*(F-t)),A(t),E(!0));e===t&&E(!0)},isDisabled:k}),Object(r.jsx)(l,{type:"Next",data:"next",handleButton:function(){var e=F+i;(e<=q&&(x(h+-_*i),A(e),E(!1)),e>=q)&&(x(h+-_*(q-F)),A(10),X(!0))},isDisabled:P})]}),Object(r.jsxs)("div",{className:"Carousel__control",children:[Object(r.jsxs)("div",{className:"Carousel__labels",children:[Object(r.jsx)("label",{className:"Carousel__input",htmlFor:"ItemWidth",children:"Width"}),Object(r.jsx)("label",{className:"Carousel__input",htmlFor:"FrameSize",children:"Frame size"}),Object(r.jsx)("label",{className:"Carousel__input",htmlFor:"Step",children:"Step"}),Object(r.jsx)("label",{className:"Carousel__input",htmlFor:"AnimationDuration",children:"Animation duration"})]}),Object(r.jsxs)("div",{className:"Carousel__inputs",children:[Object(r.jsx)(o,{name:"width",id:"ItemWidth",min:50,step:10,max:260,value:_,onChange:function(e){C(e),z(y/_*e)}}),Object(r.jsx)(o,{name:"frame-size",id:"FrameSize",min:_,step:_,max:5*_,value:y,onChange:function(e){z(e)}}),Object(r.jsx)(o,{name:"step",id:"Step",value:i,min:1,max:5,step:1,onChange:function(e){m(e)}}),Object(r.jsx)(o,{name:"animation-duration",id:"AnimationDuration",min:100,max:3e3,step:100,value:d,onChange:function(e){g(e)}})]})]})]})},b=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],d=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("h1",{className:"App__title","data-cy":"title",children:["Carousel with ",b.length," images"]}),Object(r.jsx)(j,{images:b})]})};i.a.render(Object(r.jsx)(d,{}),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.9413afc4.chunk.js.map