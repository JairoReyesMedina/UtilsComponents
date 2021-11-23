
class progress_circle extends HTMLElement {

constructor(){
super();
 
this.svg = document.createElement("holder");
}

attributeChangedCallback(name, oldValue, newValue){
 
    if(name == "progress-value"){
         
     this.progressTextValue = newValue;
     try {
         var factor = this.radio/90;
         this.preloader("false")
         this.svg.querySelectorAll("circle")[1].setAttribute("stroke-dashoffset",565.48-((newValue)/this.max)*565.48*(factor));  
    } catch (error) {}
     try{
       this.svg.querySelector("#indicator").textContent = (Math.floor(newValue/this.max*100))+"%";
       if(this.svg.querySelector("#indicator").textContent == "100%"){
          this.svg.querySelector("#indicator").innerHTML = "<svg version='1.0' style='width: 50%; height: 50%;' xmlns='http://www.w3.org/2000/svg'width='100px' height='100px' viewBox='0 0 512.000000 512.000000'preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='"+this.progressValueColor+"' stroke='none'> <path d='M4187 3956 c-22 -8 -50 -25 -64 -38 -14 -12 -459 -504 -990 -1093 -715 -793 -977 -1078 -1016 -1102 -61 -39 -128 -44 -192 -14 -23 10 -261 217 -560 486 -345 310 -535 475 -564 488 -137 61 -294 -41 -294 -192 -1 -31 6 -72 15 -92 11 -26 214 -223 683 -665 367 -346 685 -640 708 -654 63 -37 148 -35 210 5 52 34 2290 2513 2321 2572 70 130 -20 294 -170 308 -30 3 -64 0 -87 -9z'/></g></svg>"
          var event_ = document.createEvent("Event");
          event_.initEvent("complete",true,true);
          this.dispatchEvent(event_);
        }
     }catch(e){
         console.error(e)
     }
    }
    
    if(name == "max"){
    this.max = newValue;
    }
 
   this.width = 200;
   this.height = 200;
    
    if(name == "radio"){
        if(eval(newValue.replace(/\D/gmi,"")) <= 90){
          this.radio = eval(newValue.replace(/\D/gmi,""));  
        }else{
            console.warn("el radio tiene que ser menor a 90")
            this.radio = 90;
        }
    }else{
        this.radio = 90;
    }

    if(name == "progress-width"){
   this.progressWidth = eval(newValue.replace(/\D/gmi,""));
    }
    if(name == "progress-value-color"){
  this.progressValueColor = newValue;
    }
    if(name == "progress-color"){
  this.progressColor = newValue;
    }
    if(name == "indicator-color"){
 this.indicator_color = newValue;
    }
    if(name == "preload"){
 this.preload = newValue;
    }
}

static get observedAttributes(){
    return ['progress-value', 'max',"radio",'progress-width','progress-value-color','progress-color','indicator-color','preload'];
}

connectedCallback(){

if(this.getAttribute("max") == null){
     this.setAttribute("max",100)
 }
 if(this.getAttribute("radio") == null){
     this.setAttribute("radio",90)
 }
 if(this.getAttribute("progress-width") == null){
     this.setAttribute("progress-width",15)
 }
 if(this.getAttribute("progress-value-color") == null){
     this.setAttribute("progress-value-color","#00ff00")
 }
 if(this.getAttribute("progress-color") == null){
     this.setAttribute("progress-color","rgba(0,0,0,0.1)")
 }
 



const shadow = this.attachShadow({mode:"open"});
var max = this.max;
 
 var svg_text = "<span id='indicator' style='color:"+this.indicator_color+";font-size:150%;position:absolute;width:100%;height:100%;display:flex; justify-content:center;align-items:center;align-content:center;' >0%</span>"
  svg_text += "<svg id='svg' style='width: 100%;height:100%;background:none;border-radius:100%;' width='"+(this.width)+"' height='"+(this.height)+"' viewBox='0 0 "+(this.width)+" "+(this.height)+"' version='1.1' xmlns='http://www.w3.org/2000/svg'> <circle r='"+this.radio+"' cx='"+(this.width/2)+"' cy='"+((this.height/2))+"' stroke-linecap='round' stroke='"+this.progressColor+"' stroke-width='"+this.progressWidth+"' fill='none' stroke-dasharray='565.48' stroke-dashoffset='0'></circle> <circle r='"+this.radio+"' cx='"+(this.width/2)+"' cy='"+(this.height/2)+"' stroke-linecap='round' fill='transparent' stroke='"+this.progressValueColor+"' stroke-width='"+this.progressWidth+"' stroke-dasharray='565.48' stroke-dashoffset='565.48'></circle> </svg>"
 this.svg.innerHTML = svg_text;
 this.lastSvg = svg_text;


  var holder = document.createElement("div");
  this.preloader("true")
  holder.style.position = "relative";
  holder.style.width = "100%";
  holder.style.height = "100%";

 
 
 holder.appendChild(this.svg);
 shadow.appendChild(holder);
 
}


preloader(pre){ 
if(pre == "true"){
var icon = "<svg version='1.0' xmlns='http://www.w3.org/2000/svg' style='width:20%;height:20%;' width='100px' height='100px' viewBox='0 0 512.000000 512.000000'preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'fill='"+ this.indicator_color+"' stroke='"+ this.indicator_color +"' stroke-width='"+(this.progressWidth*30)+"' stroke-linecap='round'><path stroke-linecap='round' d='M132 5109 c-68 -20 -132 -111 -132 -189 0 -87 -43 -41 1148 -1232 l1127 -1128 -1127 -1128 c-1037 -1037 -1127 -1131 -1138 -1172 -42 -159 91 -292 250 -250 41 11 135 101 1173 1138 l1127 1127 1128 -1127 c1037 -1037 1131 -1127 1172 -1138 159 -42 292 91 250 250 -11 41 -101 135 -1138 1172 l-1127 1128 1127 1128 c1037 1037 1127 1131 1138 1172 42 159 -91 292 -250 250 -41 -11 -135 -101 -1172 -1138 l-1128 -1127 -1127 1127 c-978 976 -1133 1128 -1168 1137 -47 13 -88 13 -133 0z'/></g></svg>"
var svg_text = "<span id='indicator' class='fa fa-times' style='color:"+this.indicator_color+";font-size:150%;position:absolute;width:100%;height:100%;display:flex; justify-content:center;align-items:center;align-content:center;' >"+icon+"</span>"
svg_text += "<svg id='svg' style='width: 100%;height:100%;background:none;border-radius:100%;' width='"+(this.width)+"' height='"+(this.height)+"' viewBox='0 0 "+(this.width)+" "+(this.height)+"' version='1.1' xmlns='http://www.w3.org/2000/svg'> <circle r='"+this.radio+"' cx='"+(this.width/2)+"' cy='"+((this.height/2))+"' stroke-linecap='round' stroke='"+this.progressColor+"' stroke-width='"+this.progressWidth+"' fill='none' stroke-dasharray='565.48' stroke-dashoffset='0'></circle> <circle r='"+this.radio+"' cx='"+(this.width/2)+"' cy='"+(this.height/2)+"' stroke-linecap='round' fill='transparent' stroke='"+this.progressValueColor+"' stroke-width='"+this.progressWidth+"' stroke-dasharray='565.48' stroke-dashoffset='450'><animateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 100 100' to='360 100 100' dur='1.05s' repeatCount='indefinite'/></circle> </svg>"
this.svg.innerHTML = svg_text
}else{
    this.svg.innerHTML = this.lastSvg; 
}
}



}

customElements.define("progress-circle",progress_circle);
