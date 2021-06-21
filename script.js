// Write your JavaScript code here!


window.addEventListener("load", function() {
  fetch("https://handlers.education.launchcode.org/static/planets.json").then (function(response){ 
    response.json().then(function(json){
      missionTarget.innerHTML = `<h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[2].name}</li>
         <li>Diameter: ${json[2].diameter}</li>
         <li>Star: ${json[2].star}</li>
         <li>Distance from Earth: ${json[2].distance}</li>
         <li>Number of Moons: ${json[2].moons}</li>
      </ol>
      <img src="${json[2].image}">
      `;
    });
  });
  let missionTarget = document.getElementById("missionTarget");
  let launchForm = document.getElementById("launchForm");
  let launchStatusCheck = document.getElementById("launchStatusCheck");
  let form = document.querySelector("form");
  let button = document.getElementById("formSubmit");
   button.addEventListener("click", function(event){
     event.preventDefault();
   let pilotName = document.querySelector("input[name=pilotName]");
    console.log(pilotName.value);
    let copilotName = document.querySelector("input[name=copilotName]");
    console.log(copilotName.value);
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus= document.getElementById("copilotStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let faultyItems = document.getElementById("faultyItems")
    if (pilotName.value === "" || copilotName.value === ""||fuelLevel.value=== ""|| cargoMass.value === ""){
    alert("all fields are required")
    }
     else if (isNaN(pilotName.value)=== false ){
      // copilotStatus.innerHTML = "Co-Pilot is not ready";
      // pilotStatus.innerHTML = "Pilot is not ready";
      // faultyItems.style.visibility= "visible";
      alert("Pilot should be a name(string)");
        
          console.log(isNaN(pilotName.value));
      } 
      else if (isNaN(copilotName.value) === false){
        alert("Co-pilot should be a name(string)");
      }
      else if (isNaN(fuelLevel.value)=== true){
      alert("Fuel level should be a number");
        } 
        else if (isNaN(cargoMass.value) === true){
          alert("Cargo Mass should be a number");
        }

    changes();
    
    function changes(){
          if (fuelLevel.value < 10000){
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
          copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready`;
           //faultyItems.style.color = "red";
            faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "There is not enough fuel for the journey";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
          }    
      
            if(cargoMass.value >= 10000){
          faultyItems.style.visibility = "visible";
          cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
          launchStatus.innerHTML = "Shuttle not ready for launch";
          launchStatus.style.color = "red";
            //faultyItems.style.color = "red";
           }
           
             else if (fuelLevel.value >= 10000 && cargoMass.value < 10000) {
          launchStatus.style.color = " green";
          launchStatus.innerHTML = "Shuttle is ready for launch";
          cargoStatus.innerHTML = "Cargo mass low enough for launch";
          fuelStatus.innerHTML = "Fuel level high enough for launch";
          faultyItems.style.visibility = "visible";
          pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
          copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready`;
            }
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
