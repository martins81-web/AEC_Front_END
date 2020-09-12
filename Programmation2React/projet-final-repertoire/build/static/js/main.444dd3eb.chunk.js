(this["webpackJsonpprojet-final-repertoire"]=this["webpackJsonpprojet-final-repertoire"]||[]).push([[0],{38:function(e,t,a){},49:function(e,t,a){e.exports=a(80)},54:function(e,t,a){},55:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),c=(a(54),a(5)),i=a(15),u=a(16),d=a(18),m=a(17),s=(a(55),a(22)),p=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.Spring,{from:{opacity:0},to:{opacity:1},config:{delay:500,duration:700}},(function(e){return r.a.createElement("div",{style:e},r.a.createElement("div",{className:"main-content "},r.a.createElement("div",{className:"portfolio"},r.a.createElement("div",{className:"portfolio-item medium one"}),r.a.createElement("div",{className:"portfolio-item large two"}),r.a.createElement("div",{className:"portfolio-item medium three"}),r.a.createElement("div",{className:"portfolio-item small four"}),r.a.createElement("div",{className:"portfolio-item tall five"}),r.a.createElement("div",{className:"portfolio-item wide six"}))))})))}}]),a}(r.a.Component),E=a(30),h=a.n(E),f=a(40),v=a(19),y=a(82),b=a(83),g=a(41),j=a(86),O=a(84),x=a(85),N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={photo:"",setErrors:{}},n.handleAdd=n.handleAdd.bind(Object(v.a)(n)),n.handlePhoto=n.handlePhoto.bind(Object(v.a)(n)),n.addEtudiant=n.addEtudiant.bind(Object(v.a)(n)),n}return Object(u.a)(a,[{key:"addEtudiant",value:function(){var e=Object(f.a)(h.a.mark((function e(t,a,n,r,l,o,c){var i,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://crudcrud.com/api/b179fdcd82d74cbe8773f514846405a3/etudiants",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:t,name:a,picture:n,address:r,postalCode:l,telephone:o,course:c})});case 3:if(!(i=e.sent).ok){e.next=10;break}return e.next=7,i.json();case 7:return u=e.sent,this.props.history.push("/"),e.abrupt("return",u);case 10:throw new Error("Request failed!");case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(t,a,n,r,l,o,c){return e.apply(this,arguments)}}()},{key:"handleAdd",value:function(e){e.preventDefault();var t=document.getElementById("prenomEtudiant").value,a=document.getElementById("nomEtudiant").value,n=document.getElementById("photoEtudiant").value,r=document.getElementById("adresseEtudiant").value,l=document.getElementById("codePostal").value,o=document.getElementById("telephone").value,c=document.getElementById("cours").value;this.addEtudiant(t,a,n,r,l,o,c)}},{key:"handlePhoto",value:function(e){var t=document.getElementById("photoEtudiant").value;this.setState({photo:t})}},{key:"render",value:function(){return console.log(this.props.history),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement(j.a,null,r.a.createElement(j.a.Group,{controlId:"prenomEtudiant"},r.a.createElement(j.a.Label,null,"Pr\xe9nom de l'\xe9tudiant"),r.a.createElement(j.a.Control,{type:"text",placeholder:"Entrer le pr\xe9nom de l'\xe9tudiant"})),r.a.createElement(j.a.Group,{controlId:"nomEtudiant"},r.a.createElement(j.a.Label,null,"Nom de l'\xe9tudiant"),r.a.createElement(j.a.Control,{type:"text",placeholder:"Entrer le nom de l'\xe9tudiant"})),r.a.createElement(j.a.Group,{controlId:"photoEtudiant"},r.a.createElement(j.a.Label,null,"URL d'une photo de l'\xe9tudiant"),r.a.createElement(j.a.Control,{type:"text",placeholder:"Entrer une URL valide",onBlur:this.handlePhoto})),""!==this.state.photo&&r.a.createElement(O.a,{src:this.state.photo,rounded:!0,width:"125"}),r.a.createElement(j.a.Group,{controlId:"adresseEtudiant"},r.a.createElement(j.a.Label,null,"Adresse"),r.a.createElement(j.a.Control,{type:"text",placeholder:"Entrer l'adresse de l'\xe9tudiant"})),r.a.createElement(j.a.Group,{controlId:"codePostal"},r.a.createElement(j.a.Label,null,"Code postal"),r.a.createElement(j.a.Control,{type:"text",placeholder:"Entrer le code postal"})),r.a.createElement(j.a.Group,{controlId:"telephone"},r.a.createElement(j.a.Label,null,"T\xe9l\xe9phone"),r.a.createElement(j.a.Control,{type:"text",placeholder:"Entrer le t\xe9l\xe9phone"})),r.a.createElement(j.a.Group,{controlId:"cours"},r.a.createElement(j.a.Label,null,"Cours"),r.a.createElement(j.a.Control,{type:"text",placeholder:"Entrer le cours"})),r.a.createElement(x.a,{variant:"primary",type:"submit",onClick:this.handleAdd},"Enregistrer"))))))}}]),a}(r.a.Component),w=a(87),C=a(88),I=a(10),k=(a(38),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){var e={fontWeight:"bold",color:"red"},t={paddingRight:"2rem",paddingLeft:"2rem"};return r.a.createElement(w.a,{className:"color-nav",expand:"md"},r.a.createElement(I.b,{exact:"true",to:"/Accueil"},r.a.createElement(w.a.Brand,null,r.a.createElement(s.Spring,{from:{marginLeft:-1e3},to:{marginLeft:0},config:{delay:500,duration:700}},(function(e){return r.a.createElement("div",{className:"title",style:e},r.a.createElement("h1",null,"projet",r.a.createElement("span",null,"final")," - R\xe9pertoire des \xe9tudiants"))})))," "),r.a.createElement(C.a,{className:"ml-auto"},r.a.createElement(I.c,{to:"/Accueil",style:t,activeStyle:e},"Accueil"),r.a.createElement(I.c,{to:"/Ajout",style:t,activeStyle:e},"Ajouter \xc9tudiant")))}}]),a}(r.a.Component));a(78);function A(){return r.a.createElement("div",{className:" footer"},r.a.createElement("p",{className:"m-0 text-center text-white"},"Copyright \xa9 Eric Martins 2020"))}var B=function(){var e=Object(c.f)();return console.log(e.pathname),r.a.createElement("div",{className:"bg container-fluid"},r.a.createElement(k,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,component:p}),r.a.createElement(c.a,{path:"/Accueil",component:p}),r.a.createElement(c.a,{path:"/Ajout",component:N})),r.a.createElement(A,null))};a(79),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I.a,null,r.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.444dd3eb.chunk.js.map