var mainoutercontainer  = document.createElement("div");
mainoutercontainer.id="maindiv";
var outercontainer = document.createElement("div");
outercontainer.id="citem";
var button = document.createElement("button");
button.innerHTML = "Help";
button.id="mybutton";

outercontainer.appendChild(button);
mainoutercontainer.appendChild(outercontainer);
var body = document.getElementsByTagName("body")[0];
let activeElement="INPUT";
let activeFeildName="";
// This function to check active feild on page 
body.addEventListener("click",function(){
    if(activeElement==document.activeElement.tagName){
    activeElemet= document.activeElement.tagName;
    activeFeildName= document.activeElement.id;
    } 
});

body.appendChild(mainoutercontainer);

 
// Floating button code
let model_visible=false;
button.addEventListener("click",function(){
   if (model_visible) {
       model_visible=false;
       var element=document.getElementById("container");
            element.parentElement.removeChild(element);
   }
  else{
      //To fetch the Description from API regarding input feild
fetch('https://konnexa-api.herokuapp.com/descriptions/')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.getElementById("descriptionContainer").innerHTML="<h1>We dont have description for this feild!!<h1>"
      data.map((item)=>{
          if(item.fieldName==activeFeildName)
         {
             var element=document.getElementById("descriptionContainer")
             element.innerHTML=`<h1>${item.description}<h1>`
         }
      })
    });


          
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
       bugInputField.placeholder = "Write bug report here..."
       bugInputField.id = "bugInputField"
       reportBugField.appendChild(bugInputField);  
       var reportBugButtonContainer = document.createElement("div")
       reportBugButtonContainer.id = "reportBugButtonContainer"
       var reportBugButton = document.createElement('button')
       reportBugButton.id = "reportBugButton";

       reportBugButton.onclick=function(event){
        event.preventDefault();   
        reportBug();
       }

       reportBugButton.type = "Submit"
       reportBugButton.innerHTML = "Report Bug"
       reportBugButtonContainer.appendChild(reportBugButton);    
       form.appendChild(reportBugField);
       form.appendChild(reportBugButtonContainer);
       reportBugContainer.appendChild(form);    
       var chatContainer = document.createElement("div");
       chatContainer.id = "chatContainer";
       var chatButton = document.createElement("button")
       chatButton.id = "chatButton";
       chatButton.innerHTML = "Let's Talk";
       //This function populates the chat feature
       chatButton.onclick = function() {
            var chatPopUp = document.createElement("div")
            chatPopUp.id = "myForm"
                var formContainer = document.createElement("div")
                formContainer.id="form-container"
                    var header = document.createElement("h1")
                    header.innerHTML = "Chat"
                   var label = document.createElement("label")
                    var textarea = document.createElement("textarea");
                    textarea.placeholder = "Type Message..."
                    textarea.name = "msg"
                    textarea.id="messageBox";
                    //sendmessageButton
                    var submitButtonComponent = document.createElement("button")
                    submitButtonComponent.className = "btn"
                    submitButtonComponent.type = "submit"
                    submitButtonComponent.innerHTML = "Send"
                    submitButtonComponent.id="sendMessage"

                    submitButtonComponent.onclick =function(event){
                        event.preventDefault();   
                        sendMessage();
                       }
            
                    var closeButtonComponent = document.createElement("button")
                    closeButtonComponent.className= "btn2"
                    closeButtonComponent.type = "Cancel"
                    closeButtonComponent.innerHTML = "Cancel"
                    closeButtonComponent.onclick = function(){ 
                        closeForm()
                        }
                formContainer.appendChild(header)
                formContainer.appendChild(label)
                formContainer.appendChild(textarea)
                formContainer.appendChild(submitButtonComponent)
                formContainer.appendChild(closeButtonComponent)

            chatPopUp.appendChild(formContainer)
            var element = document.getElementById("descriptionContainer")
            element.innerHTML="";
            element.appendChild(chatPopUp);
           openForm()
         }
       chatContainer.appendChild(chatButton);    
   
       bugReportingContainer.appendChild(reportBugContainer);
       bugReportingContainer.appendChild(chatContainer);
         
       container.appendChild(descriptionContainer);
       container.appendChild(bugReportingContainer);
       outercontainer.appendChild(container);      
        model_visible=true;
        
      

    } 
});

var dragItem = document.querySelector("#citem");
var container = document.querySelector("#maindiv");

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
    }else {
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

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    var element = document.getElementById("myForm")
    element.parentElement.removeChild(element);
}
// This function used to report bug
function reportBug()
{
var currentUrl = window.location.href;
var reportMessage = document.getElementById("bugInputField").value;
var hostname=window.location.hostname;
fetch('https://konnexa-api.herokuapp.com/reportbug/', {
	method: 'POST',
	body: JSON.stringify({id:3,site_id:"fsdf",report:"fdsjfk"}), 
	
}).then(res=>res.json())
.then(data=>{
    if(data){
    var element=document.getElementById("descriptionContainer");
    element.innerHTML="Thank for reporting this bug"
    }
})
}

function sendMessage()
{
    var element=document.getElementById("messageBox").value;
    fetch('https://konnexa-api.herokuapp.com/chatbot/', {
        method: 'POST',
        body: JSON.stringify({message:element}), 
        
    }).then(res=>{
        
     console.log(res)
    console.log(res.json())
    console.log(Object.entries(res))
     })
    .then(data=>{
        console.log(data)
        if(data){
            var element=document.getElementById("messageBox");
            element.innerHTML = data.response
        }
    })
}