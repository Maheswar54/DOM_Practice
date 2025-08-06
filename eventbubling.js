let ule=document.querySelector("ul");
ule.addEventListener('click', function(event) {
   console.log("Clicked on: " + event.target.tagName);   
});
let eventlistDiv = document.querySelector(".eventlist");
eventlistDiv.addEventListener('click', function(event) {
    console.log("Event List Div Clicked: " + event.target.tagName);
    let h3element = document.querySelector("h3");
    h3element.innerText = "I am Event List Div";
   
});
let eventcontainerDiv = document.querySelector(".eventcontainer");
eventcontainerDiv.addEventListener('click', function(event) {       
    console.log("Event Container Div Clicked: " + event.target.tagName);
    let h2element = document.querySelector("h2");
    h2element.innerText = "I am Event Container Div";
    
}   );  