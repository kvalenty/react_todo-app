(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),l=n.n(r),c=(n(15),n(16),n(5)),i=n(8),s=n(1),u=n(2),d=n(4),m=n(3),p=n(18),h=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={value:""},e.onChangeValue=function(t){var n=t.target.value;e.setState({value:n})},e.onSubmitTodo=function(t){t.preventDefault();var n=e.state.value;n&&((0,e.props.onAddTodo)({id:Object(p.a)(),title:n,completed:!1}),e.setState({value:""}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.value;return a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement("form",{onSubmit:this.onSubmitTodo},a.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:e,onChange:this.onChangeValue})))}}]),n}(o.Component),f=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todosList,n=e.onChangeCompleted,o=e.onDeleteTodo;return a.a.createElement("ul",{className:"todo-list"},t.map((function(e){return a.a.createElement("li",{key:e.id,className:e.completed?"completed":""},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",id:"todo-1",value:e.id,checked:e.completed,onChange:n}),a.a.createElement("label",{htmlFor:"todo-1"},e.title),a.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return o(e.id)}})),a.a.createElement("input",{type:"text",className:"edit"}))})))}}]),n}(o.Component),v=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todosList,n=e.onChangeCompleted,o=e.onDeleteTodo,r=e.onDoneAllTodo;return a.a.createElement("section",{className:"main"},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onClick:r}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement(f,{todosList:t,onChangeCompleted:n,onDeleteTodo:o}))}}]),n}(o.Component),b=function(e){var t=e.link,n=t.url,o=t.value,r=e.currentUrl,l=e.isActiveLink;return a.a.createElement("li",null,a.a.createElement("a",{href:n,className:r===n?"selected":"",onClick:l},o))},C=[{url:"#/",value:"All"},{url:"#/active",value:"Active"},{url:"#/completed",value:"Completed"}],g=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={currentUrl:"#/",links:C},e.isActiveLink=function(t){var n=t.target.getAttribute("href");e.props.onChangeUrlPath(n),e.setState({currentUrl:n})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.todoCount,o=t.onClearCompletedTodo,r=this.state,l=r.links,c=r.currentUrl;return a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},"".concat(n," items left")),a.a.createElement("ul",{className:"filters"},l.map((function(t){return a.a.createElement(b,{key:t.url,link:t,currentUrl:c,isActiveLink:e.isActiveLink})}))),a.a.createElement("button",{type:"button",className:"clear-completed",onClick:o},"Clear completed"))}}]),n}(o.Component),E=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todosList:e.props.todosList,urlPath:"#/"},e.onAddTodo=function(t){e.setState((function(e){return{todosList:[].concat(Object(i.a)(e.todosList),[t])}}))},e.onDeleteTodo=function(t){e.setState((function(e){return{todosList:e.todosList.filter((function(e){return e.id!==t}))}}))},e.onClearCompletedTodo=function(){e.setState((function(e){return{todosList:e.todosList.filter((function(e){return!e.completed}))}}))},e.onChangeUrlPath=function(t){e.setState({urlPath:t})},e.onChangeCompleted=function(t){var n=t.target.value;e.setState((function(e){return{todosList:e.todosList.map((function(e){return e.id===n?Object(c.a)(Object(c.a)({},e),{},{completed:!e.completed}):e}))}}))},e.onDoneAllTodo=function(){e.setState((function(e){return{todosList:e.todosList.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{completed:!0})}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.todosList,n=e.urlPath,o=this.onAddTodo,r=this.onChangeCompleted,l=this.onDeleteTodo,c=this.onClearCompletedTodo,i=this.onChangeUrlPath,s=this.onDoneAllTodo,u=t.filter((function(e){return!e.completed})).length,d=t;return"#/active"===n?d=t.filter((function(e){return!e.completed})):"#/completed"===n&&(d=t.filter((function(e){return e.completed}))),a.a.createElement("section",{className:"todoapp"},a.a.createElement(h,{onAddTodo:o}),a.a.createElement(v,{todosList:d,onChangeCompleted:r,onDeleteTodo:l,onDoneAllTodo:s}),a.a.createElement(g,{todoCount:u,onClearCompletedTodo:c,onChangeUrlPath:i}))}}]),n}(o.Component),j=[{id:Object(p.a)(),title:"delectus aut autem",completed:!1},{id:Object(p.a)(),title:"quis ut nam facilis et officia qui",completed:!0}],O=function(){return a.a.createElement(E,{todosList:j})};l.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.5af6cbf3.chunk.js.map