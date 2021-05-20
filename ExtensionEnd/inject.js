var outercontainer = document.createElement("div");
outercontainer.id="citem";
var button = document.createElement("button");
button.innerHTML = "Help";
button.id="mybutton";

outercontainer.appendChild(button);
var body = document.getElementsByTagName("body")[0];
body.addEventListener("click",function(){
    var x = document.activeElement.tagName;
    console.log(x);
});
let model_visible=false;


body.appendChild(outercontainer);
button.addEventListener("click",function(){
   if (!model_visible) {
       model_visible=true;
       var container = document.createElement("div")
       container.id = "container"
      
       var descriptionContainer = document.createElement("div")
       descriptionContainer.id="descriptionContainer"
       var bugReportingContainer = document.createElement("div")
       bugReportingContainer.id="bugReportingContainer"
   
       var reportBugContainer = document.createElement("div");
       reportBugContainer.id = "reportBugContainer"
       var form = document.createElement("form");
       form.id = "formContainer"
       var reportBugField = document.createElement("div")
       reportBugField.id = "reportBugField"
       var bugInputField = document.createElement("textarea")
       bugInputField.id = "bugInputField"
       reportBugField.appendChild(bugInputField);  
       var reportBugButtonContainer = document.createElement("div")
       reportBugButtonContainer.id = "reportBugButtonContainer"
       var reportBugButton = document.createElement('button')
       reportBugButton.id = "reportBugButton";
       reportBugButtonContainer.appendChild(reportBugButton);    
       form.appendChild(reportBugField);
       form.appendChild(reportBugButtonContainer);
       reportBugContainer.appendChild(form);    
       var chatContainer = document.createElement("div");
       chatContainer.id = "chatContainer";
       var chatButton = document.createElement("chatButton");
       chatButton.id = "chatButton";
       chatContainer.appendChild(chatButton);    
   
       bugReportingContainer.appendChild(reportBugContainer);
       bugReportingContainer.appendChild(chatContainer);
   
       container.appendChild(descriptionContainer);
       container.appendChild(bugReportingContainer);
       button.appendChild(container);
       
        //close button
        var exitbtn = document.createElement("button");
        exitbtn.innerHTML = "X";
        exitbtn.id="exit";
        exitbtn.onclick = function(){
            var element=document.getElementById("container");
            element.parentElement.removeChild(element);
            model_visible=true;
        }
        container.appendChild(exitbtn);
        
        
    
   }   
});




var dragItem = document.querySelector("#mybutton");
var container = document.querySelector("#citem");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
    if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
    } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    }

    if (e.target === dragItem) {
    active = true;
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    active = false;
}
function drag(e) {
    if (active) {
    
    e.preventDefault();
    
    if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
    } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
};

