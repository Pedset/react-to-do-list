(this["webpackJsonpreact-to-do-list"]=this["webpackJsonpreact-to-do-list"]||[]).push([[0],{32:function(t,e,o){t.exports=o(61)},37:function(t,e,o){},38:function(t,e,o){},61:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(29),c=o.n(r),l=(o(37),o(18)),i=o(31),u=o(7),s=o(8),d=o(10),p=o(9),m=o(13),h=o(1),f=(o(38),function(t){Object(d.a)(o,t);var e=Object(p.a)(o);function o(){return Object(u.a)(this,o),e.apply(this,arguments)}return Object(s.a)(o,[{key:"getStyle",value:function(){return{backgroundColor:"green",padding:"10px",borderBottom:"1px dotted #ccc",textDecoration:this.props.todo.completed?"line-through":"none"}}},{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("input",{type:"checkbox",onChange:this.props.markCompleteProp2.bind(this,e)}),o,a.a.createElement("button",{onClick:this.props.deleteTodoProp2.bind(this,e),style:b},"x"))}}]),o}(n.Component)),b={float:"right"},y=f,v=function(t){Object(d.a)(o,t);var e=Object(p.a)(o);function o(){return Object(u.a)(this,o),e.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var t=this,e=this.props.todos;return a.a.createElement("div",null,e.map((function(e){return a.a.createElement(y,{key:e.id,todo:e,markCompleteProp2:t.props.markCompleteProp,deleteTodoProp2:t.props.deleteTodoProp})})))}}]),o}(n.Component);var E={color:"blue",textDecoration:"none"},j={background:"tomato"},O=function(){return a.a.createElement("header",{style:j},a.a.createElement("h1",null,"To do list"),a.a.createElement(m.b,{style:E,to:"/"},"Home")," ","|"," ",a.a.createElement(m.b,{style:E,to:"/about"},"About"))},g=function(t){Object(d.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(u.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){return t.setState({title:e.target.value})},t.onSubmit=function(e){e.preventDefault(),""!==t.state.title&&(t.props.addTodo(t.state.title),t.setState({title:""}))},t}return Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"",style:{flex:1},placeholder:"Add Things to do",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",name:"submit"}))}}]),o}(n.Component);function k(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the todoList app v1.0.0. It is part of a React crash course"))}var C=o(14),T=o.n(C),S=o(63),x=function(t){Object(d.a)(o,t);var e=Object(p.a)(o);function o(){var t;Object(u.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.deleteTodo=function(e){T.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(o){return t.setState({todos:t.state.todos.filter((function(t){return t.id!==e}))})}))},t.addTodo=function(e){T.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,id:Object(S.a)(),completed:!1}).then((function(e){t.setState({todos:[].concat(Object(i.a)(t.state.todos),[Object(l.a)(Object(l.a)({},e.data),{},{id:Object(S.a)()})])})})).catch((function(t){}))},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var t=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})})).catch((function(t){}))}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement(O,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,{addTodo:t.addTodo}),a.a.createElement(v,{todos:t.state.todos,markCompleteProp:t.markComplete,deleteTodoProp:t.deleteTodo}))}}),a.a.createElement(h.a,{path:"/about",component:k})))}}]),o}(n.Component);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3593f760.chunk.js.map