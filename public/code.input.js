

class CodeInput extends HTMLElement{
    constructor(){
        super();
    }

   connectedCallback(){
         
   this.setAttribute("contentEditable", "true");
   let es = this;
   this.oninput = ()=>{ 


   var sel = document.getSelection();
   sel.modify("extend","backward","character");
   sel.modify("extend","backward","character");
   var range = sel.getRangeAt(0);

   if(sel.toString().split("")[0] == "<"){ 
       var label = document.createElement("label")
       label.style.color = "#0f0"
    range.surroundContents(label)
   }else{
    var label = document.createElement("label");
    label.style.color = "#fff"
    range.surroundContents(label)
   }
   
   console.log(sel)

   sel.collapseToEnd(true)
   
   }
   
   
   }

}
customElements.define( 'code-input',CodeInput)