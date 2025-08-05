let pid = document.querySelector("#colorDisplay");
//let btn = document.querySelector("button");
let btn = document.querySelector("button");
let devid = document.querySelector("div");
btn.addEventListener('click', function() {
    let randomcolor = Math.floor(Math.random()*16777215).toString(16);

pid.innerText = "Color Code: #" + randomcolor;
devid.style.backgroundColor = "#" + randomcolor;

});

// btns.forEach((btn)=>{
//     btn.onclick= function (){
//         console.log("Button Clicked RED: " + this.innerText);
//         this.style.backgroundColor = "red";
//         this.style.color = "white"; 
//     }
//     btn.onclick= function (){
//         console.log("Button Clicked BLUE: " + this.innerText);
//         this.style.backgroundColor = "blue";
//         this.style.color = "white"; 
//     }
  /* btn.addEventListener('click', function() {
        console.log("Listener 1: Turning red");
        this.style.backgroundColor = "red";
        this.style.color = "white";
    });

    btn.addEventListener('click', function() {
        console.log("Listener 2: Turning blue");
        this.style.backgroundColor = "blue";
        this.style.color = "white";
    }); */
//});
console.log(btns);


