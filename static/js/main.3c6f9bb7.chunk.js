(this.webpackJsonpstage_21=this.webpackJsonpstage_21||[]).push([[0],{169:function(e,t,a){e.exports=a(253)},174:function(e,t,a){},253:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"logInAction",(function(){return y})),a.d(n,"signUpAction",(function(){return E})),a.d(n,"logOutAction",(function(){return v})),a.d(n,"signUp",(function(){return S})),a.d(n,"logIn",(function(){return O}));var r=a(0),i=a.n(r),o=a(24),s=a.n(o),u=(a(174),a(64)),c=a(41),l=a(67),m=a(36),d=a(11),p=a(151),g=a(255),b=a(125),h=a(20),f=(a(101),a(42)),x=a(120),w=a.n(x),y=function(e,t){return{type:"LOGIN",profile:{email:e,password:t}}},E=function(e){return{type:"SIGNUP",profile:{username:e.username,email:e.email,password:e.password}}},v=function(){return{type:"LOGOUT"}},S=function(e){var t=e.username,a=e.email,n=e.password;return function(e){w.a.post("https://conduit.productionready.io/api/users",{user:{username:t,email:a,password:n}}).then((function(r){200===r.status&&e(E({username:t,email:a,password:n})),alert("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),console.log(r),console.log(t,a,n)})).catch((function(e){alert("This user is already exsist"),console.log(e.response)}))}},O=function(e){var t=e.email,a=e.password;return function(){return w.a.post("https://conduit.productionready.io/api/users/login",{user:{email:t,password:a}})}},I=Object(m.b)((function(e){return{user:e}}),n)((function(e){var t=e.user,a=e.logIn,n=e.logInAction,r=e.history,o=function(e,t,a,n){return i.a.createElement(h.a,{name:e},(function(e){var r=e.field,o=e.meta;return i.a.createElement("div",null,i.a.createElement(n,Object.assign({type:t,placeholder:a},r,{style:{width:"200px",margin:"5px"}})),o.touched&&o.error&&i.a.createElement("div",{className:"error",style:{color:"red",margin:"5px"}},o.error))}))},s=f.a({password:f.b().matches(/^[a-zA-Z0-9]{0,}$/,"Password have only latin letters and digits").min(8,"Password is too short - should be 8 chars minimum.").max(40,"Must be 40 characters or less").matches(/[0-9]+/,"Password must contain at least one digit").matches(/[A-Z]+/,"Password must contain an one uppercase character").required("You must enter password")});return i.a.createElement(h.c,{initialValues:{password:"",email:"",loged:!1},onSubmit:function(e,i){var o=e.email,s=e.password;a(e).then((function(t){200===t.status&&(n(o,s),e.loged=!0),console.log(t)})).then((function(){console.log(t.loged),e.loged&&r.push("/")})).catch((function(e){alert("Incorrect email or password"),console.log(e)})),i.setSubmitting(!1)},validationSchema:s},(function(e){var t=e.isSubmitting;return i.a.createElement(h.b,{onSubmit:e.handleSubmit,style:{boxSizing:"borderBox",width:"300px",margin:"auto",marginTop:"200px",border:"1px solid gray",padding:"10px",borderRadius:"15px"}},"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043b\u043e\u0433\u0438\u043d\u044c\u0442\u0435\u0441\u044c!",o("email","email","email",g.a),o("password","password","Input password",g.a.Password),i.a.createElement("div",null),i.a.createElement(b.a,{disabled:t,type:"primary",htmlType:"submit",style:{display:"block",margin:"15px",marginLeft:"5px"}},"Log in"),i.a.createElement(u.b,{style:{margin:"15px"},to:"/SignUp"},"SignUp"))}))})),j=a(71),P=a.n(j),U=a(94),L=Object(m.b)((function(e){return{user:e}}),n)((function(e){var t=e.signUp,a=e.signUpAction,n=function(e,t,a,n){return i.a.createElement(h.a,{name:e},(function(e){var r=e.field,o=e.meta;return i.a.createElement("div",null,i.a.createElement(n,Object.assign({type:t,placeholder:a},r,{style:{width:"200px",margin:"5px"}})),o.touched&&o.error&&i.a.createElement("div",{className:"error",style:{color:"red",margin:"5px"}},o.error))}))},r=f.a({username:f.b().max(50,"Must 50 characters or less").required("You must enter Name"),password:f.b().matches(/^[a-zA-Z0-9]{0,}$/,"Password have only latin letters and digits").min(8,"Password is too short - should be 8 chars minimum.").max(40,"Must be 40 characters or less").matches(/[0-9]+/,"Password must contain at least one digit").matches(/[A-Z]+/,"Password must contain an one uppercase character").required("You must enter password"),email:f.b().email("Invalid email address").required("You must enter email")});return i.a.createElement(h.c,{initialValues:{username:"",password:"",email:""},onSubmit:function(){var e=Object(U.a)(P.a.mark((function e(n,r){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(n);case 2:return e.next=4,t(n);case 4:r.setSubmitting(!1);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),validationSchema:r},(function(e){var t=e.isSubmitting;return i.a.createElement(h.b,{onSubmit:e.handleSubmit,style:{boxSizing:"borderBox",width:"300px",margin:"auto",marginTop:"200px",border:"1px solid gray",padding:"10px",borderRadius:"15px"}},void 0,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c!",n("username","input","Input Name",g.a),n("email","email","email",g.a),n("password","password","Input password",g.a.Password),i.a.createElement("div",null),i.a.createElement(b.a,{disabled:t,type:"primary",htmlType:"submit",style:{display:"block",margin:"15px",marginLeft:"5px"}},"Sign Up"),i.a.createElement(u.b,{style:{margin:"15px"},to:"/Login"},"Login"))}))})),T=Object(m.b)((function(e){return{user:e}}),n)((function(e){var t=e.user,a=e.logOutAction,n=e.history;return Object(r.useEffect)((function(){t.loged||n.push("/login")})),i.a.createElement(h.c,{initialValues:{username:""},onSubmit:function(){var e=Object(U.a)(P.a.mark((function e(t,n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:n.setSubmitting(!1);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var a=e.isSubmitting;return i.a.createElement(h.b,{onSubmit:e.handleSubmit,style:{boxSizing:"borderBox",width:"300px",margin:"auto",marginTop:"200px",border:"1px solid gray",padding:"10px",borderRadius:"15px"}},i.a.createElement("span",null,"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435!"," ",t.username),i.a.createElement("div",null),i.a.createElement(b.a,{disabled:a,type:"primary",htmlType:"submit",style:{display:"block",margin:"15px",marginLeft:"5px"}},"Exit"))}))})),A=a(100),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loged:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(A.a)({},e,{},t.profile,{loged:!0});case"SIGNUP":return Object(A.a)({},e,{},t.profile);case"LOGOUT":return Object(A.a)({},e,{loged:!1});default:return e}},_=function(){var e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,t=Object(l.d)(N,e(Object(l.a)(p.a))),a=Object(d.a)();return i.a.createElement(m.a,{store:t},i.a.createElement(u.a,null,i.a.createElement(c.a,{path:"/",component:T,exact:!0,history:a}),i.a.createElement(c.a,{path:"/Login",component:I,history:a}),i.a.createElement(c.a,{path:"/SignUp",component:L})))};s.a.render(i.a.createElement(_,null),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.3c6f9bb7.chunk.js.map