// Write your JavaScript code here!
let missionTarget = document.getElementById("missionTarget");
let launchForm = document.getElementById("launchForm");
let launchStatusCheck = document.getElementById("launchStatusCheck");
// let pilotName = document.querySelector("input[name=pilotName]");
//     let copilotName = document.querySelector("input[name=copilotName]");
//     let fuelLevel = document.querySelector("input[name=fuelLevel]");
//     let cargoMass = document.querySelector("input[name=cargoMass]");
let button = document.getElementById("formSubmit");

window.addEventListener("load", function() {
 let form = document.querySelector("form");
  let button = document.getElementById("formSubmit");
   button.addEventListener("click", function(event){
     event.preventDefault();
    let pilotName = document.getElementById("pilotName");
    console.log(pilotName.value);
    let copilotName = document.querySelector("input[name=copilotName]");
    console.log(copilotName.value);
    form.addEventListener("submit", function(event){
      event.preventDefault();
    if (isNaN(pilotName.value) || isNaN(copilotName.value)){
      console.log(pilotName.value);
    } else if (fuelLevel.value !== Number || cargoMass.value !== Number){
      alert("Not a number");
    } else {
      alert("All fields are required!");
    };            
          
    
    
    
    
      
     
  

      // if(pilotName.value === ""|| copilotName.value === ""){
      //   console.log(copilotName);
      // }
      //   if(fuelLevel.value === Number || cargoMass.value === Number){
      //    console.log(fuelLevel);
      
      //  }
        // else {
        //     alert("All fields are required!");
        //           event.preventDefault();
      

      
      
      let faultyItems = document.getElementById("faultyItems")
      
      
      
      if(fuelLevel.value < 10000){
            faultyItems.style.color = "red";
            faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "There is not enough fuel for the journey";
         launchStatus.innerHTML = "Shuttle not ready for launch";
        };    

      
    });
    });
  });
   

   

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
