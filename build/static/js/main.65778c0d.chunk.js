(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/sos.a9171846.svg"},,,function(e,t,a){e.exports=a.p+"static/media/back.80e9b312.svg"},,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/handshake.be75cf84.svg"},function(e,t,a){e.exports=a.p+"static/media/purple-heart.5f50f59f.svg"},,,function(e,t,a){e.exports=a.p+"static/media/whatsapp.45c6e6ec.svg"},function(e,t,a){e.exports=a.p+"static/media/warning.1b8b6ec3.svg"},function(e,t,a){e.exports=a.p+"static/media/delete.dbd9a29d.svg"},function(e,t,a){e.exports=a(76)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=(a(41),a(4)),s=a(1),u=a(2),i=a(9),m=a.n(i),p=a(29),d=a.n(p),f=a(30),E=a.n(f),h=a(31),b=a.n(h).a.create({baseURL:"http://localhost:3333"}),g=(a(59),function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){b.get("connections").then((function(e){var t=e.data.total;c(t)}))}),[]),r.a.createElement("div",{id:"page-landing"},r.a.createElement("div",{id:"page-landing-content",className:"container"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("h1",null,"SOS Manaus"),r.a.createElement("h2",null,"Doe ou pe\xe7a ajuda!")),r.a.createElement("img",{src:m.a,alt:"Plataforma de emerg\xeancia",className:"sos-image"}),r.a.createElement("div",{className:"buttons-container"},r.a.createElement(o.b,{to:"/alert",className:"alert"},r.a.createElement("img",{src:d.a,alt:"Doar"}),"Ajudar")),r.a.createElement("span",{className:"total-connections"},"Total de"," ".concat(a," "),"conex\xf5es j\xe1 realizadas",r.a.createElement("img",{src:E.a,alt:"Cora\xe7\xe3o branco"}))))}),v=a(3),j=a.n(v),O=a(7),x=a(12),S=a.n(x),k=(a(66),function(e){return r.a.createElement("header",{className:"page-header"},r.a.createElement("div",{className:"top-bar-container"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:S.a,alt:"Voltar"}))),r.a.createElement("div",{className:"header-content"},r.a.createElement("strong",null,e.title),e.description&&r.a.createElement("p",null,e.description),e.children))}),w=a(33),N=a.n(w),y=(a(67),function(e){var t=e.alert;return r.a.createElement("article",{className:"alert-item"},r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("strong",null,t.name_cause),r.a.createElement("span",null,t.whatsapp.substr(3).replace(/\D/g,"").replace(/^(\d{2})(\d)/g,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2")))),r.a.createElement("p",null,t.cause),r.a.createElement("footer",null,r.a.createElement("a",{target:"_blanck",onClick:function(){b.post("connections",{user_id:t.id})},href:"https://wa.me/".concat(t.whatsapp)},r.a.createElement("img",{src:N.a,alt:"Whatsapp"}),"Entrar em contato")))}),C=(a(68),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];function l(){return(l=Object(O.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("alldonations");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]),r.a.createElement("div",{id:"page-alerts",className:"container"},r.a.createElement(k,{title:"Estas s\xe3o as causas dispon\xedveis."}),r.a.createElement("main",null,a.map((function(e){return r.a.createElement(y,{key:e.id,alert:e})}))))}),I=(a(69),function(e){return r.a.createElement("header",{className:"page-header"},r.a.createElement("div",{className:"top-bar-container"},r.a.createElement(o.b,{to:"/profile"},r.a.createElement("img",{src:S.a,alt:"Voltar"}))),r.a.createElement("div",{className:"header-content"},r.a.createElement("strong",null,e.title),e.description&&r.a.createElement("p",null,e.description),e.children))}),$=a(13),D=(a(70),function(e){var t=e.label,a=e.name,n=Object($.a)(e,["label","name"]);return r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",Object.assign({type:"text",id:a},n)))}),z=(a(71),function(e){var t=e.label,a=e.name,n=Object($.a)(e,["label","name"]);return r.a.createElement("div",{className:"textarea-block"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("textarea",Object.assign({id:a},n)))}),_=a(34),A=a.n(_),F=(a(72),function(){var e=Object(s.e)(),t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),i=Object(u.a)(o,2),m=i[0],p=i[1],d=Object(n.useState)(""),f=Object(u.a)(d,2),E=f[0],h=f[1],g=Object(n.useState)(""),v=Object(u.a)(g,2),x=v[0],S=v[1];function k(){return(k=Object(O.a)(j.a.mark((function t(a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),console.log(x),n="+55"+w(E),15!==E.length||0===c.length||0===m.length){t.next=9;break}return r={name_cause:c,whatsapp:n,cause:m},t.next=7,b.post("donations",r,{headers:{authorization:x}}).then((function(){alert("Cadastro realizado com sucessso!"),e.push("/profile")})).catch((function(e){alert("Erro no cadastro!"),console.log(e.response.data)}));case 7:t.next=10;break;case 9:alert("Por favor, preencha todos os campos corretamente.");case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(e){return e=(e=(e=(e=e.replace("(","")).replace(")","")).replace(" ","")).replace("-","")}return Object(n.useEffect)((function(){var e=localStorage.getItem("id");e&&S(e)}),[]),r.a.createElement("div",{id:"page-alert-form",className:"container"},r.a.createElement(I,{title:"Esperamos que consigamos ajudar :)",description:"O primeiro passo \xe9 preencher esse formul\xe1rio de cadastro da causa."}),r.a.createElement("main",null,r.a.createElement("form",{onSubmit:function(e){return k.apply(this,arguments)}},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Seus dados"),r.a.createElement(D,{name:"nameCause",label:"Nome da causa",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement(D,{name:"whatsapp",label:"Whatsapp",value:E,placeholder:"(99) 99999-9999",maxLength:15,onChange:function(e){return t=(t=(t=(t=e.target.value).replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2"),void h(t);var t}}),r.a.createElement(z,{name:"cause",label:"Descri\xe7\xe3o da causa",value:m,onChange:function(e){return p(e.target.value)}})),r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("img",{src:A.a,alt:"Aviso importante"}),"Importante!",r.a.createElement("br",null),"Preencha todos os dados"),r.a.createElement("button",{type:"submit"},"Salvar cadastro")))))}),P=a(10),M=(a(73),function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),m=i[0],p=i[1],d=Object(s.e)();function f(){return(f=Object(O.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0===a.length||0===m.length){e.next=18;break}return e.prev=2,e.next=5,b.post("signin",{email:a,password:m});case 5:n=e.sent,localStorage.setItem("name",n.data.name),localStorage.setItem("email",a),localStorage.setItem("token",n.data.token),localStorage.setItem("id",n.data.user_id),d.push("/profile"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),alert("Falha no login, tente novamente.");case 16:e.next=19;break;case 18:alert("Por favor, preencha todos os campos.");case 19:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"logon-container"},r.a.createElement("section",{className:"form"},r.a.createElement("form",{onSubmit:function(e){return f.apply(this,arguments)}},r.a.createElement("h1",null,"Fa\xe7a seu login"),r.a.createElement("input",{placeholder:"E-mail",type:"email",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{placeholder:"Senha",value:m,type:"password",onChange:function(e){return p(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Entrar"),r.a.createElement(o.b,{className:"back-link",to:"/register"},r.a.createElement(P.b,{size:16,color:"#E02041"}),"Cadastrar"))))}),q=(a(74),function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),p=i[0],d=i[1],f=Object(n.useState)(""),E=Object(u.a)(f,2),h=E[0],g=E[1],v=Object(n.useState)(""),x=Object(u.a)(v,2),S=x[0],k=x[1],w=Object(s.e)();function N(){return(N=Object(O.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),0===a.length||0===p.length||0===h.length||0===S.length){e.next=19;break}if(!(h===S&&h.length>=6&&S.length>=6)){e.next=16;break}return n={name:a,email:p,password:h},e.prev=4,e.next=7,b.post("users",n);case 7:alert("Usu\xe1rio cadastrado com sucesso."),w.push("/logon"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),alert("Erro no cadastro, o email pode j\xe1 existir em nosso banco de dados, Tente novamente.");case 14:e.next=17;break;case 16:alert("A senha deve ser maior que 6 caracteres ou suas senhas n\xe3o s\xe3o iguais.");case 17:e.next=20;break;case 19:alert("Por favor, verifique se todos os campos est\xe3o preenchidos.");case 20:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"register-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:m.a,alt:"SOS MANAUS"}),r.a.createElement("h1",null,"Cadastro"),r.a.createElement("p",null,"Fa\xe7a seu cadastro, entre na plataforma e ajude as pessoas encontrar os casos para doa\xe7\xf5es"),r.a.createElement(o.b,{className:"back-link",to:"/logon"},r.a.createElement(P.a,{size:16,color:"E02041"}),"Voltar a tela de login")),r.a.createElement("form",{onSubmit:function(e){return N.apply(this,arguments)}},r.a.createElement("input",{placeholder:"Nome",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"email",placeholder:"E-mail",value:p,onChange:function(e){return d(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Senha",value:h,onChange:function(e){return g(e.target.value)}}),r.a.createElement("input",{type:"password",placeholder:"Confirme sua senha",value:S,onChange:function(e){return k(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))}),T=a(35),U=a.n(T),V=(a(75),function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),p=i[0],d=i[1],f=Object(n.useState)([]),E=Object(u.a)(f,2),h=E[0],g=E[1],v=Object(s.e)();function x(){return S.apply(this,arguments)}function S(){return(S=Object(O.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("donations",{headers:{authorization:p}});case 3:t=e.sent,g(t.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error em tentar recuperar dados."),setTimeout((function(){return x()}),2e3);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function k(){return(k=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),localStorage.removeItem("name"),localStorage.removeItem("email"),localStorage.removeItem("token"),v.replace("/logon");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(O.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.delete("donations/".concat(t),{headers:{authorization:p}}).then((function(){var e=h.filter((function(e){return e.id!==t}));g(e)})).catch((function(e){alert("Erro em deletar a causa.")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=localStorage.getItem("name"),t=localStorage.getItem("id");e&&c(e),t&&d(t)}),[]),Object(n.useEffect)((function(){x()}),[p]),r.a.createElement("div",{className:"profile-container"},r.a.createElement("header",null,r.a.createElement("img",{src:m.a,alt:"Sos Manaus"}),r.a.createElement("span",null,"Ol\xe1, ".concat(a)),r.a.createElement(o.b,{className:"button",to:"/alert-forms"},"Cadastrar novo caso"),r.a.createElement("button",{onClick:function(e){return function(e){return k.apply(this,arguments)}(e)},type:"button",title:"logout"},r.a.createElement(P.c,{size:18,color:"#E02041"}))),r.a.createElement("h1",null,"Casos Cadastrados"),r.a.createElement("ul",null,h.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("strong",null,"Nome da Causa:"),r.a.createElement("p",null,e.name_cause),r.a.createElement("strong",null,"Whatsapp:"),r.a.createElement("p",null,e.whatsapp),r.a.createElement("strong",null,"Causa:"),r.a.createElement("p",null,e.cause),r.a.createElement("button",{type:"button",onClick:function(){return function(e){return w.apply(this,arguments)}(e.id)}},r.a.createElement("img",{src:U.a,alt:"trash"})))}))))}),W=function(){return r.a.createElement(o.a,null,r.a.createElement(s.a,{path:"/",exact:!0,component:g}),r.a.createElement(s.a,{path:"/alert",exact:!0,component:C}),r.a.createElement(s.a,{path:"/alert-forms",exact:!0,component:F}),r.a.createElement(s.a,{path:"/logon",exact:!0,component:M}),r.a.createElement(s.a,{path:"/register",exact:!0,component:q}),r.a.createElement(s.a,{path:"/profile",exact:!0,component:V}))},J=function(){return r.a.createElement(W,null)};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.65778c0d.chunk.js.map