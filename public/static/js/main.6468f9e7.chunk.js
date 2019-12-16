(this["webpackJsonpreact-auth-client-done-v2"]=this["webpackJsonpreact-auth-client-done-v2"]||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(34),r=a.n(o),c=a(1),s=a(2),i=a(4),u=a(3),m=a(5),h=a(13),p=(a(43),a(15)),d=a(7),g=a(6),f=a.n(g),b=new(function(){function e(){Object(c.a)(this,e),this.auth=f.a.create({baseURL:"https://exhibit-me.herokuapp.com",withCredentials:!0})}return Object(s.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password,n=e.email,l=e.theme,o=e.space_name;return this.auth.post("/auth/signup",{username:t,password:a,email:n,theme:l,space_name:o}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),E=l.a.createContext(),v=E.Consumer,y=E.Provider,j=function(e){return function(t){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(s.a)(a,[{key:"render",value:function(){var t=this;return l.a.createElement(v,null,(function(a){var n=a.login,o=a.signup,r=a.user,c=a.logout,s=a.isLoggedin,i=a.isLoading;return l.a.createElement(e,Object.assign({login:n,signup:o,user:r,logout:c,isLoggedin:s,isLoading:i},t.props))}))}}]),a}(l.a.Component)},O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={isLoggedin:!1,user:null,isLoading:!0},a.signup=function(e){var t=e.username,n=e.password,l=e.email,o=e.theme,r=e.space_name;b.signup({username:t,password:n,email:l,theme:o,space_name:r}).then((function(e){return a.setState({isLoggedin:!0,user:e})})).catch((function(e){return console.log(e)}))},a.login=function(e){var t=e.username,n=e.password;b.login({username:t,password:n}).then((function(e){return a.setState({isLoggedin:!0,user:e})})).catch((function(e){return console.log(e)}))},a.logout=function(){b.logout().then((function(){return a.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.me().then((function(t){return e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user,o=this.login,r=this.logout,c=this.signup;return l.a.createElement(y,{value:{isLoading:t,isLoggedin:a,user:n,login:o,logout:r,signup:c}},this.props.children)}}]),t}(l.a.Component),C=j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={input:""},a.handleInput=function(e){var t=e.target.value;a.props.filterUsers(t),a.setState({input:t})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("li",{id:"search-bar"},l.a.createElement("input",{type:"text",name:"search",onChange:this.handleInput,value:this.state.input,placeholder:"Search"}),l.a.createElement("button",{id:"search-button"},"Search"))}}]),t}(n.Component)),k=j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.user,e.logout),a=e.isLoggedin;return l.a.createElement("div",null,a?l.a.createElement("nav",{className:"nav-style"},l.a.createElement("ul",null,l.a.createElement("span",null,l.a.createElement(d.b,{to:"/"},l.a.createElement("p",{id:"logo"},"Exhibit Me"))),l.a.createElement("li",{id:"home"},l.a.createElement(d.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/profile"},"Profile")),l.a.createElement(C,{filterUsers:this.props.filterUsers}),l.a.createElement("li",{id:"logout-btn"},l.a.createElement("button",{onClick:t},"Logout")))):l.a.createElement("nav",{className:"nav-style"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d.b,{to:"/login"}," ",l.a.createElement("button",null,"Login")," ")),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement(d.b,{to:"/signup"}," ",l.a.createElement("button",{className:"logout-btn"},"Signup")," ")))))}}]),t}(n.Component)),w=j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",space_name:"",theme:"",email:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,l=t.password,o=t.space_name,r=t.theme,c=t.email;a.props.signup({username:n,password:l,space_name:o,theme:r,email:c}),console.log(o)},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(p.a)({},n,l))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.space_name,o=e.theme,r=e.email;return l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.04)"}},l.a.createElement("h1",null,"Sign Up"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",name:"email",value:r,onChange:this.handleChange}),l.a.createElement("label",null,"Name Your 3D Space:"),l.a.createElement("input",{type:"text",name:"space_name",value:n,onChange:this.handleChange}),l.a.createElement("label",null,"Your Space's Theme:"),l.a.createElement("input",{type:"text",name:"theme",value:o,onChange:this.handleChange}),l.a.createElement("input",{type:"submit",value:"Signup"})),l.a.createElement("p",null,"Already have account?"),l.a.createElement(d.b,{to:"/login"}," Login")))}}]),t}(n.Component)),S=j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,l=t.password;a.props.login({username:n,password:l})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(p.a)({},n,l))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.04)"}},l.a.createElement("h1",null,"Login"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",name:"username",value:t,onChange:this.handleChange}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),l.a.createElement("input",{type:"submit",value:"Login"}))))}}]),t}(n.Component)),L=j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={users:[],selected:[]},a.filterUsers=function(e){console.log(a.state.users),console.log(a.state.selected);var t=a.state.users.filter((function(t){return t.username.includes(e)}));console.log(t),a.setState({selected:t})},a.getAllUsers=function(){f.a.get("".concat("https://exhibit-me.herokuapp.com","/users")).then((function(e){console.log(e.data[0].username);var t=e.data;a.setState({users:t,selected:t})})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllUsers()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k,{filterUsers:this.filterUsers}),l.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.04)"}},l.a.createElement("h1",null,"Welcome to Exhibit Me"),l.a.createElement("div",{id:"user-name"},this.state.selected.map((function(e){return l.a.createElement("div",{key:e._id,className:"one-user"},l.a.createElement(d.b,{to:"/".concat(e._id)},l.a.createElement("h3",null,e.theme),l.a.createElement("h3",null,e.username)))})))),l.a.createElement("footer",null,"Rose Beatty 2019"))}}]),t}(n.Component)),_=(a(64),a(37)),x=(a(33),j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={theme:"",space_name:"",username:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user._id;f.a.get("".concat("https://exhibit-me.herokuapp.com","/users/").concat(t)).then((function(t){console.log("Hello",t.data.username);var a=t.data;e.setState({username:a.username,space_name:a.space_name,theme:a.theme})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return console.log(this.props),l.a.createElement("div",{className:"vrscene"},l.a.createElement("div",{id:"myEmbeddedScene"},l.a.createElement(_.Scene,{id:"scene",embedded:!0},l.a.createElement("a-sky",{color:"white"}),l.a.createElement("a-assets",{id:"assets-id"},l.a.createElement("img",{id:"sky",src:"bali.jpg"})),l.a.createElement("a-camera",{position:"200 100 0"}),l.a.createElement("a-sky",{src:"#sky"})),l.a.createElement("h2",{id:"vrscene-theme"},"Theme: ",this.state.theme)))}}]),t}(n.Component))),A=(new function e(){Object(c.a)(this,e),this.comments=f.a.create({baseURL:"http://localhost:5000/",withCredentials:!0})},j(function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleInput=function(e){var t=e.target.value;a.setState({input:t})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.input,n=a.props.user._id;f.a.post("".concat("https://exhibit-me.herokuapp.com","/comments/create/").concat(n),{comment:t,userId:n}).then((function(e){console.log("Hello",e.data);var t=e.data;a.props.getComments(),a.setState({initialComments:t})})).catch((function(e){console.log(e)}))},a.state={input:"",initialComments:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{onChange:this.handleInput,type:"text",name:"comment",value:this.state.input,placeholder:"Add a public comment..."}),l.a.createElement("button",null,"COMMENT"),l.a.createElement("button",null,"CANCEL"))}}]),t}(n.Component))),U=j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={comments:[],input:"",commentId:[],initialComments:[]},a.componentDidMount=function(){a.getComments(),console.log(a.props.userInfo),console.log(a.state.comments)},a.getComments=function(){a.props.user._id;f.a.get("".concat("https://exhibit-me.herokuapp.com","/comments")).then((function(e){var t=e;a.setState({initialComments:t.data}),console.log(t.data),console.log(a.state.initialComments)})).catch((function(e){console.log(e)}))},a.deleteComment=function(e){console.log(e);var t=e;console.log(t);var n=a.state.initialComments.filter((function(e){return e._id!==t}));a.setState({initialComments:n}),f.a.delete("".concat("https://exhibit-me.herokuapp.com","/comments/delete/").concat(t)).then((function(e){console.log("Hello",e);var t=e.data;console.log(t)})).catch((function(e){console.log(e)}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.initialComments.reverse();return l.a.createElement("div",{id:"comments-wrapper"},l.a.createElement("h3",null,"400 Comments"),l.a.createElement("div",{className:"comment"},l.a.createElement(A,{getComments:this.getComments}),l.a.createElement("div",null,t.map((function(t,a){return l.a.createElement("div",{key:t._id,className:"comment"},l.a.createElement("h3",null,t.comment),l.a.createElement("button",{onClick:function(a){return e.deleteComment(t._id)}},"Delete"),l.a.createElement("hr",null))}))),l.a.createElement("p",null,"Rose 1 week ago"),l.a.createElement("p",null,"HelloThereHelloThereHelloThereHelloThereHelloThereHelloThereHelloThereHelloThereHelloThere"),l.a.createElement("p",null,"Reply"),l.a.createElement("hr",null)))}}]),t}(n.Component)),N=j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",email:"",space_name:"",theme:"",comments:[],file:null,fileName:"",path:"",objects:[]},a.onChangeHandler=function(e){a.setState({file:e.target.files[0]})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.user._id,n=a.state.file,l=new FormData;l.append("file",n);f.a.post("".concat("https://exhibit-me.herokuapp.com","/users/upload/").concat(t),l,{headers:{"content-type":"multipart/form-data"}}).then((function(e){alert("The file was successfully uploaded"),console.log(e);var t=a.fileUpload.files[0];a.setState({fileName:t.name,objects:e.data.objects}),a.uploadFile()})).catch((function(e){console.log(e)}))},a.uploadFile=function(){var e=a.state.fileName,t=document.createElement("a-asset-item");t.setAttribute("src","".concat("https://exhibit-me.herokuapp.com","/images/")+e),t.setAttribute("id",e),document.getElementById("assets-id").appendChild(t);var n="#"+t.id;console.log(t.id);var l=document.createElement("a-entity");l.setAttribute("gltf-model",n),l.setAttribute("id","rig"),l.setAttribute("wasd-controls"),l.setAttribute("wasd-controls","acceleration:5005"),l.setAttribute("look-controls"),document.getElementById("scene").appendChild(l),console.log(l)},a.showForm=function(){document.getElementById("edit-profile-form").style.display="block",document.getElementById("user-details").style.display="none"},a.handleInput=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(p.a)({},n,l))},a.editProfile=function(e){e.preventDefault(),document.getElementById("edit-profile-form").style.display="none",document.getElementById("user-details").style.display="block",console.log(a.props.user);var t=a.state,n=t.username,l=t.email,o=t.space_name,r=t.theme,c=a.props.user._id;f.a.put("".concat("https://exhibit-me.herokuapp.com","/users/update/").concat(c),{username:n,email:l,space_name:o,theme:r}).then((function(e){console.log("Hello",e.data),a.setState({username:n,email:l,space_name:o,theme:r})})).catch((function(e){console.log(e)}))},a.deleteObject=function(){var e=a.state.objects.pop();f.a.delete("".concat("https://exhibit-me.herokuapp.com","/users/deleteObject/").concat(e)).then((function(e){a.setState({path:null,fileName:null}),document.getElementById("rig").remove(),console.log("Hello",e)})).catch((function(e){console.log(e)}))},a.componentDidMount=function(){console.log(a.props);var e=a.props.user._id;f.a.get("".concat("https://exhibit-me.herokuapp.com","/users/").concat(e)).then((function(e){console.log("Hello",e.data);var t=e.data;a.setState({username:t.username,email:t.email,space_name:t.space_name,theme:t.theme,comments:t.comments})})).catch((function(e){console.log(e)})),f.a.get("".concat("https://exhibit-me.herokuapp.com","/users/filename")).then((function(e){console.log("Hello",e.data);var t=e.data.map((function(e){return e._id}));a.setState({path:"/"+e.data.pop().path,fileName:e.data.pop().path,objects:t}),a.uploadFile(),console.log(a.state.path)})).catch((function(e){console.log(e)}))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"profile-wrapper"},l.a.createElement("div",{className:"container env",style:{paddingLeft:"2rem",width:"77.5%"}},l.a.createElement("div",{className:"profile-details"},l.a.createElement("a",{onClick:this.showForm},l.a.createElement("h2",{style:{color:"black"}},"Edit Profile")),l.a.createElement("div",{id:"user-details"},l.a.createElement("h3",null,"Username: ",l.a.createElement("span",null,this.state.username)," "),l.a.createElement("h3",null,"Email: ",l.a.createElement("span",null,this.state.email)),l.a.createElement("h3",null,"Space Name: ",l.a.createElement("span",null,this.state.space_name)),l.a.createElement("h3",null,"Theme: ",l.a.createElement("span",null,this.state.theme))),l.a.createElement("form",{id:"edit-profile-form",onSubmit:this.editProfile},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",value:this.state.username,name:"username",onChange:this.handleInput}),l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",value:this.state.email,name:"email",onChange:this.handleInput}),l.a.createElement("label",null,"Space Name:"),l.a.createElement("input",{type:"text",value:this.state.space_name,name:"space_name",onChange:this.handleInput}),l.a.createElement("label",null,"Theme:"),l.a.createElement("input",{type:"text",value:this.state.theme,name:"theme",onChange:this.handleInput}),l.a.createElement("button",null,"Save"))),l.a.createElement("div",{className:"profile-details"},l.a.createElement("ul",{className:"env",style:{display:"flex",flexDirection:"row"}},l.a.createElement("li",null,l.a.createElement("h2",null,"Upload a 3D object into your space (.glb format)"),l.a.createElement("form",{onSubmit:this.handleSubmit,encType:"multipart/form-data"},l.a.createElement("input",{onChange:this.onChangeHandler,type:"file",name:"file",ref:function(t){return e.fileUpload=t},style:{paddingLeft:"20%"}}),l.a.createElement("button",{type:"submit",value:"upload"},"Save"),l.a.createElement("button",{style:{border:"1px solid black",color:"black",backgroundColor:"transparent",width:"60%"},onClick:this.deleteObject},"Delete current object")))))),l.a.createElement(U,{comments:this.state.comments}))}}]),t}(n.Component)),H=(a(107),j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",space_name:"",theme:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user._id;f.a.get("".concat("https://exhibit-me.herokuapp.com","/users/").concat(t)).then((function(t){console.log("Hello",t.data.username);var a=t.data;e.setState({username:a.username,space_name:a.space_name,theme:a.theme})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement("div",{style:{backgroundColor:"rgba(255, 255, 255, 0.04)"}},l.a.createElement("div",{className:"vrscene-h1"},l.a.createElement("h1",{style:{marginTop:"0.5em"}},"Welcome back to ",this.state.space_name,", ",this.state.username)),l.a.createElement(x,null),l.a.createElement(N,null)),l.a.createElement("footer",null,"Rose Beatty 2019"))}}]),t}(n.Component))),I=j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={user:[]},a.getUser=function(e){f.a.get("".concat("https://exhibit-me.herokuapp.com","/users/").concat(e)).then((function(e){console.log(e);var t=e.data;a.setState({user:t})})).catch((function(e){return console.log(e)}))},a.componentDidMount=function(){var e=a.props.match.params.id;console.log(a.props),a.getUser(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(k,null),l.a.createElement("h2",null,"Welcome to ",this.state.user.username,"'s space "),l.a.createElement(x,{getUser:this.getUser}),l.a.createElement(U,{getUser:this.getUser}))}}]),t}(n.Component)),D=a(18);var T=j((function(e){var t=e.component,a=e.isLoggedin,n=e.isLoading,o=Object(D.a)(e,["component","isLoggedin","isLoading"]);return n?l.a.createElement("h1",null,"Loading"):l.a.createElement(h.b,Object.assign({},o,{render:function(e){return a?l.a.createElement(h.a,{to:"/"}):l.a.createElement(t,e)}}))}));var M=j((function(e){var t=e.component,a=e.isLoggedin,n=e.isLoading,o=Object(D.a)(e,["component","isLoggedin","isLoading"]);return n?l.a.createElement("h1",null,"Loading"):l.a.createElement(h.b,Object.assign({},o,{render:function(e){return a?l.a.createElement(t,e):l.a.createElement(h.a,{to:"/login"})}}))})),B=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h.d,null,l.a.createElement(T,{exact:!0,path:"/signup",component:w}),l.a.createElement(T,{exact:!0,path:"/login",component:S}),l.a.createElement(M,{exact:!0,path:"/",component:L}),l.a.createElement(M,{exact:!0,path:"/profile",component:H}),l.a.createElement(M,{exact:!0,path:"/:id",component:I})))}}]),t}(n.Component);r.a.render(l.a.createElement(d.a,null,l.a.createElement(O,null,l.a.createElement(B,null))),document.getElementById("root"))},38:function(e,t,a){e.exports=a(108)},43:function(e,t,a){}},[[38,1,2]]]);
//# sourceMappingURL=main.6468f9e7.chunk.js.map