(()=>{var e={171:e=>{const t={init:function(){this.createContentDiv(),this.createHeader(),this.createAddTaskDiv()},createHeader:function(){let e=document.createElement("div");e.id="header",document.getElementById("content").appendChild(e)},createContentDiv:function(){let e=document.createElement("div");e.id="content",document.body.appendChild(e),console.log("where is it?")},createAddTaskDiv:function(){let e=document.createElement("div");e.id="addTaskDiv";let t=document.createElement("input");t.className="textBox",t.placeholder="Title",e.appendChild(t),document.getElementById("content").appendChild(e)}};e.exports=t}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}(()=>{function e(e,t,n,o,i){const c={};return c.title=e,c.description=t,c.dueDate=n,c.priority=o,c.projectName=i,c}n(171).init(),new e("Samurai Black","Become black","tomorrow","very important","Cool Things");const t=[],o={init:function(){this.createDefaultProject(),this.getUserInput()},test:function(){console.log("this is the test function")},createNewItem:function(t,n,o,i,c){let r=new e(t,n,o,i,c);console.log(r)},getUserInput:function(){o.createNewItem("Get a gf","Talk to a girl","Tomorrow","Urgent","MINDSET")},createDefaultProject:function(){t.push([])}};o.init()})()})();