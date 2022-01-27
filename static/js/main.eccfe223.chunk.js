(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var r,i,o,a,c,d=t(6),s=t.n(d),l=t(5),b=t(2),m=t(3),u=Object(m.a)(r||(r=Object(b.a)(["\n  box-sizing: border-box;\n\n  body {\n    margin: 0;\n    padding: 0;\n    background-color: #3f3f3f;\n    font-family: 'Noto Sans JP', sans-serif;\n  }\n"]))),j=t.p+"static/media/meals.2971f633.jpg",h=t(1),x=t.n(h),p=x.a.createContext({items:[],totalAmount:0,addItem:function(n){},removeItem:function(n){}}),f=t(0);function O(){return Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(f.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})}function g(n){var e=Object(h.useState)(!1),t=Object(l.a)(e,2),r=t[0],i=t[1],o=Object(h.useContext)(p).items,a=o.reduce((function(n,e){return n+e.amount}),0);return Object(h.useEffect)((function(){if(0!==o.length){i(!0);var n=setTimeout((function(){i(!1)}),300);return function(){clearTimeout(n)}}}),[o]),Object(f.jsxs)(A,{className:r?"bump":"",onClick:n.onClick,children:[Object(f.jsx)(k,{children:Object(f.jsx)(O,{})}),Object(f.jsx)("span",{className:"label",children:"Your Cart"}),Object(f.jsx)(C,{children:a})]})}var v,w,y=Object(m.c)(i||(i=Object(b.a)(["\n  0% {\n    transform: scale(1);\n  }\n  10% {\n    transform: scale(0.9);\n  }\n  30% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(1.15);\n  }\n  100% {\n    transform: scale(1);\n  }\n"]))),k=m.b.span(o||(o=Object(b.a)(["\n  width: 1.35rem;\n  height: 1.35rem;\n  margin-right: 0.5rem;\n"]))),C=m.b.span(a||(a=Object(b.a)(["\n  background-color: #b94517;\n  padding: 0.25rem 1rem;\n  border-radius: 25px;\n  margin-left: 1rem;\n  font-weight: bold;\n"]))),A=m.b.button(c||(c=Object(b.a)(["\n  cursor: pointer;\n  font: inherit;\n  border: none;\n  background-color: #4d1601;\n  color: white;\n  padding: 0.75rem 3rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  border-radius: 25px;\n  font-weight: bold;\n\n  &:hover,\n  &:active {\n    background-color: #2c0d00;\n  }\n\n  &:hover ",", &:active "," {\n    background-color: #92320c;\n  }\n\n  &.bump {\n    animation: "," 300ms ease-out;\n  }\n\n  @media (max-width: 768px) {\n    padding: 0.75rem 1.5rem;\n\n    "," {\n      width: 1.75rem;\n      height: 1.75rem;\n      margin-right: 0.5rem;\n    }\n\n    .label {\n      display: none;\n    }\n  }\n"])),C,C,y,k);function z(n){var e=n.onShowCart;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(R,{children:[Object(f.jsx)("h1",{children:"React Meals"}),Object(f.jsx)(g,{onClick:e})]}),Object(f.jsx)(D,{children:Object(f.jsx)("img",{src:j,alt:"A table full of delicious food!"})})]})}var I,F,S,R=m.b.header(v||(v=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 80%;\n  height: 5rem;\n  background-color: #8a2b06;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10%;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  z-index: 10;\n\n  @media (max-width: 425px) {\n    height: 8rem;\n    flex-direction: column;\n    justify-content: center;\n\n    h1 {\n      margin: 0.25rem 0;\n    }\n  }\n"]))),D=m.b.div(w||(w=Object(b.a)(["\n  width: 100%;\n  height: 25rem;\n  z-index: 0;\n  overflow: hidden;\n\n  img {\n    width: 110%;\n    height: 100%;\n    object-fit: cover;\n    transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);\n  }\n"]))),E=m.b.div(I||(I=Object(b.a)(["\n  padding: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  border-radius: 14px;\n  background-color: white;\n"]))),B=t(4),H=x.a.forwardRef((function(n,e){var t=n.label,r=n.input;return Object(f.jsxs)(M,{children:[Object(f.jsx)("label",{htmlFor:r.id,children:t}),Object(f.jsx)("input",Object(B.a)({ref:e},r))]})})),M=m.b.div(F||(F=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5rem;\n\n  label {\n    font-weight: bold;\n    margin-right: 1rem;\n  }\n\n  input {\n    width: 3rem;\n    border-radius: 5px;\n    border: 1px solid #ccc;\n    font: inherit;\n    padding-left: 0.5rem;\n  }\n"])));function T(n){var e=n.id,t=n.onAddToCart,r=Object(h.useState)(!0),i=Object(l.a)(r,2),o=i[0],a=i[1],c=Object(h.useRef)();return Object(f.jsxs)(J,{onSubmit:function(n){n.preventDefault();var e=c.current.value,r=+e;0===e.trim().length||r<1||r>5?a(!1):t(r)},children:[Object(f.jsx)(H,{ref:c,label:"Amount",input:{id:"amount_"+e,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(f.jsx)("button",{children:"+ Add"}),!o&&Object(f.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})}var N,P,Y,J=m.b.form(S||(S=Object(b.a)(["\n  text-align: right;\n\n  button {\n    font: inherit;\n    cursor: pointer;\n    background-color: #8a2b06;\n    border: 1px solid #8a2b06;\n    color: white;\n    padding: 0.25rem 2rem;\n    border-radius: 20px;\n    font-weight: bold;\n  }\n\n  button:hover,\n  button:active {\n    background-color: #641e03;\n    border-color: #641e03;\n  }\n\n  @media (max-width: 425px) {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n  }\n\n  @media (max-width: 320px) {\n    flex-direction: column;\n    button {\n      width: 100%;\n    }\n  }\n"])));function V(n){var e=n.name,t=n.description,r=n.price,i=n.id,o=Object(h.useContext)(p),a="$".concat(r.toFixed(2));return Object(f.jsxs)(q,{children:[Object(f.jsxs)("div",{className:"item",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:e}),Object(f.jsx)(G,{children:t})]}),Object(f.jsx)(X,{children:a})]}),Object(f.jsx)("div",{children:Object(f.jsx)(T,{id:i,onAddToCart:function(n){o.addItem({id:i,name:e,amount:n,price:r})}})})]})}var $,q=m.b.li(N||(N=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #ccc;\n\n  h3 {\n    margin: 0 0 0.25rem 0;\n  }\n\n  @media (max-width: 425px) {\n    flex-direction: column;\n\n    .item {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 0.5rem;\n    }\n  }\n"]))),G=m.b.div(P||(P=Object(b.a)(["\n  font-style: italic;\n"]))),X=m.b.div(Y||(Y=Object(b.a)(["\n  margin-top: 0.25rem;\n  font-weight: bold;\n  color: #ad5502;\n  font-size: 1.25rem;\n"]))),Z=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}];function _(){var n=Z.map((function(n){return Object(f.jsx)(V,{id:n.id,name:n.name,description:n.description,price:n.price},n.id)}));return Object(f.jsx)(L,{children:Object(f.jsx)(E,{children:Object(f.jsx)("ul",{children:n})})})}var K,L=m.b.section($||($=Object(b.a)(["\n  max-width: 60rem;\n  width: 90%;\n  margin: 2rem auto;\n  animation: meals-appear 1s ease-out forwards;\n\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n"])));function Q(){return Object(f.jsxs)(en,{children:[Object(f.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(f.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(f.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})}var U,W,nn,en=m.b.section(K||(K=Object(b.a)(["\n  text-align: center;\n  max-width: 45rem;\n  width: 90%;\n  margin: auto;\n  margin-top: -10rem;\n  position: relative;\n  background-color: #383838;\n  color: white;\n  border-radius: 14px;\n  padding: 1rem;\n  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);\n\n  h2 {\n    font-size: 2rem;\n    margin-top: 0;\n  }\n\n  @media (max-width: 425px) {\n    width: 85%;\n  }\n"])));function tn(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(Q,{}),Object(f.jsx)(_,{})]})}var rn=document.getElementById("overlays");function on(n){var e=n.onClose;return Object(f.jsx)(un,{onClick:e})}function an(n){var e=n.onClose,t=n.children;return Object(f.jsxs)(f.Fragment,{children:[s.a.createPortal(Object(f.jsx)(on,{onClose:e}),rn),s.a.createPortal(Object(f.jsx)(jn,{children:Object(f.jsx)("div",{children:t})}),rn)]})}var cn,dn,sn,ln,bn,mn=Object(m.c)(U||(U=Object(b.a)(["\n  from {\n    opacity: 0;\n    transform: translateY(-3rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),un=m.b.div(W||(W=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 20;\n  background-color: rgba(0, 0, 0, 0.75);\n"]))),jn=m.b.div(nn||(nn=Object(b.a)(["\n  position: fixed;\n  top: 20vh;\n  width: 40rem;\n  left: calc(50% - 20rem);\n  background-color: white;\n  padding: 1rem;\n  border-radius: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n  z-index: 30;\n  animation: "," 300ms ease-out forwards;\n\n  @media (max-width: 768px) {\n    left: 5%;\n    width: 85%;\n  }\n\n  @media (max-width: 320px) {\n    width: 80%;\n  }\n"])),mn);function hn(n){var e=n.price,t=n.name,r=n.amount,i=n.onRemove,o=n.onAdd,a="$".concat(e.toFixed(2));return Object(f.jsxs)(On,{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:t}),Object(f.jsxs)(gn,{children:[Object(f.jsx)(vn,{children:a}),Object(f.jsxs)(wn,{children:["x ",r]})]})]}),Object(f.jsxs)(yn,{children:[Object(f.jsx)("button",{onClick:i,children:"-"}),Object(f.jsx)("button",{onClick:o,children:"+"})]})]})}var xn,pn,fn,On=m.b.li(cn||(cn=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 2px solid #8a2b06;\n  padding: 1rem 0;\n  margin: 1rem 0;\n\n  h2 {\n    margin: 0 0 0.5rem 0;\n    color: #363636;\n  }\n\n  button {\n    font: inherit;\n    font-weight: bold;\n    font-size: 1.25rem;\n    color: #8a2b06;\n    border: 1px solid #8a2b06;\n    width: 3rem;\n    text-align: center;\n    border-radius: 6px;\n    background-color: transparent;\n    cursor: pointer;\n    margin-left: 1rem;\n    margin: 0.25rem;\n  }\n  button:hover,\n  button:active {\n    background-color: #8a2b06;\n    color: white;\n  }\n"]))),gn=m.b.div(dn||(dn=Object(b.a)(["\n  width: 10rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),vn=m.b.span(sn||(sn=Object(b.a)(["\n  font-weight: bold;\n  color: #8a2b06;\n"]))),wn=m.b.span(ln||(ln=Object(b.a)(["\n  font-weight: bold;\n  border: 1px solid #ccc;\n  padding: 0.25rem 0.75rem;\n  border-radius: 6px;\n  color: #363636;\n"]))),yn=m.b.div(bn||(bn=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n\n  @media (max-width: 768px) {\n    flex-direction: column-reverse;\n  }\n"])));function kn(n){var e=n.onClose,t=Object(h.useContext)(p),r="$".concat(t.totalAmount.toFixed(2)),i=t.items.length>0,o=function(n){t.removeItem(n)},a=function(n){t.addItem(Object(B.a)(Object(B.a)({},n),{},{amount:1}))},c=Object(f.jsx)(Cn,{children:t.items.map((function(n){return Object(f.jsx)(hn,{name:n.name,amount:n.amount,price:n.price,onRemove:o.bind(null,n.id),onAdd:a.bind(null,n)},n.id)}))});return Object(f.jsxs)(an,{onClose:e,children:[c,Object(f.jsxs)(An,{children:[Object(f.jsx)("span",{children:"Total Amount"}),Object(f.jsx)("span",{children:r})]}),Object(f.jsxs)(zn,{children:[i&&Object(f.jsx)("button",{children:"Order"}),Object(f.jsx)("button",{className:"--alt",onClick:e,children:"Close"})]})]})}var Cn=m.b.ul(xn||(xn=Object(b.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  max-height: 20rem;\n  overflow: auto;\n"]))),An=m.b.div(pn||(pn=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1.5rem;\n  margin: 1rem 0;\n"]))),zn=m.b.div(fn||(fn=Object(b.a)(["\n  text-align: right;\n\n  button {\n    font: inherit;\n    cursor: pointer;\n    background-color: #8a2b06;\n    color: white;\n    border: 1px solid #8a2b06;\n    padding: 0.5rem 2rem;\n    border-radius: 25px;\n    margin-left: 1rem;\n  }\n\n  button:hover,\n  button:active {\n    background-color: #5a1a01;\n    border-color: #5a1a01;\n    color: white;\n  }\n\n  .--alt {\n    background-color: transparent;\n    color: #8a2b06;\n  }\n\n  @media (max-width: 425px) {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),In=t(12),Fn={items:[],totalAmount:0},Sn=function(n,e){if("ADD"===e.type){var t,r=n.totalAmount+e.item.price*e.item.amount,i=n.items.findIndex((function(n){return n.id===e.item.id})),o=n.items[i];if(o){var a=Object(B.a)(Object(B.a)({},o),{},{amount:o.amount+e.item.amount});(t=Object(In.a)(n.items))[i]=a}else t=n.items.concat(e.item);return{items:t,totalAmount:r}}if("REMOVE"===e.type){var c,d=n.items.findIndex((function(n){return n.id===e.id})),s=n.items[d],l=n.totalAmount-s.price;if(1===s.amount)c=n.items.filter((function(n){return n.id!==e.id}));else{var b=Object(B.a)(Object(B.a)({},s),{},{amount:s.amount-1});(c=Object(In.a)(n.items))[d]=b}return{items:c,totalAmount:l}}return Fn};function Rn(n){var e=n.children,t=Object(h.useReducer)(Sn,Fn),r=Object(l.a)(t,2),i=r[0],o=r[1],a={items:i.items,totalAmount:i.totalAmount,addItem:function(n){o({type:"ADD",item:n})},removeItem:function(n){o({type:"REMOVE",id:n})}};return Object(f.jsx)(p.Provider,{value:a,children:e})}var Dn=function(){var n=Object(h.useState)(!1),e=Object(l.a)(n,2),t=e[0],r=e[1];return Object(f.jsxs)(Rn,{children:[Object(f.jsx)(u,{}),t&&Object(f.jsx)(kn,{onClose:function(){r(!1)}}),Object(f.jsx)(z,{onShowCart:function(){r(!0)}}),Object(f.jsx)("main",{children:Object(f.jsx)(tn,{})})]})};s.a.render(Object(f.jsx)(Dn,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.eccfe223.chunk.js.map