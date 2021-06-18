// Write your JavaScript code here!
let missionTarget = document.getElementById("missionTarget");
let launchForm = document.getElementById("launchForm");
let launchStatusCheck = document.getElementById("launchStatusCheck");
let pilotName = document.getElementById("pilotName");
let copilotName = document.getElementById("copilotName");
let fuelLevel = document.getElementById("fuelLevel");
let cargoMass = document.getElementById("cargoMass");
let button = document.getElementById("formSubmit");

window.addEventListener("load", function() {
 // let form = document.getElementById("form");
  let button = document.getElementById("formSubmit");
   button.addEventListener("click", function(event){
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    console.log(pilotName.value);
      if(pilotName.value === ""){
        
        event.preventDefault();
         }
       if (copilotName.value === "" ){
        console.log(copilotName);
         event.preventDefault();
       }
        if(fuelLevel.value === Number){
         console.log(fuelLevel);
         event.preventDefault();
       }
       if(cargoMass.value === Number){
         console.log(cargoMass);
         event.preventDefault();
       } else{
            alert("All fields are required!");
                  event.preventDefault();
      };

      
      
      let faultyItems = document.getElementById("faultyItems")
      if(fuelLevel.value < 10000){
        `faultyItems {
            visibility: visible;
            color: red;
         }
         <li id=${fuelStatus.value}>There is not enough fuel for the journey</li>
         <h2 id="launchStatus">Shuttle not ready for launch</h2>
        } 
         `
          
        div.innerHTML += `
         
        <div id="launchStatusCheck">
            <h2 id="launchStatus">Awaiting Information Before Launch</h2>
            <div  id="faultyItems">
                <ol>
                    <li id=${pilotStatus.value}>Pilot Ready</li>
                    <li id=${copilotStatus.value}>Co-pilot Ready</li>
                    <li id=${fuelStatus.value}>Fuel level high enough for launch</li>
                    <li id=${cargoStatus.value}>Cargo mass low enough for launch</li>
                </ol>
            </div>
        </div>
        `;    

      };
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
