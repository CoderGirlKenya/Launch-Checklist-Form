// Write your JavaScript code here!


window.addEventListener("load", function() {
  fetch("https://handlers.education.launchcode.org/static/planets.json").then (function(response){ 
    response.json().then(function(json){
      let i = Math.floor(Math.random()*json.length);
      missionTarget.innerHTML = `<h2>Mission Destination</h2>
      <ol>
         <li>Name: ${json[i].name}</li>
         <li>Diameter: ${json[i].diameter}</li>
         <li>Star: ${json[i].star}</li>
         <li>Distance from Earth: ${json[i].distance}</li>
         <li>Number of Moons: ${json[i].moons}</li>
      </ol>
      <img src="${json[i].image}">
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
    let launchStatusCheck = document.getElementById("launchStatusCheck");
    if (pilotName.value === "" || copilotName.value === ""||fuelLevel.value=== ""|| cargoMass.value === ""){
    alert("all fields are required")
  
    }
     else if (isNaN(pilotName.value)=== false ){
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
          //launchStatus.innerHTML = "Shuttle not ready for launch";
        }

    changes();
     
    function changes(){
    if (isNaN(pilotName.value) === false || copilotName.value === ""|| isNaN(fuelLevel.value) === true|| isNaN(cargoMass.value) === true){
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
       } else {
         launchStatus.innerHTML = "Shuttle is ready to launch"
         launchStatus.style.color = " green";
       }

        if (isNaN(pilotName.value) === false){
        pilotStatus.innerHTML = "Pilot is not ready";
      //faultyItems.style.visibility= "visible";
     // launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";;
        } else {
        pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
      faultyItems.style.visibility= "visible";
      //launchStatusCheck.innerHTML = "Shuttle not ready for launch";
      }
      
          if (isNaN(copilotName.value) === false ){
              copilotStatus.innerHTML = "Co-Pilot is not ready";
             launchStatus.innerHTML = "Shuttle not ready for launch";
             launchStatus.style.color = "red";
            } else {
              copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready`;
            }
            if (fuelLevel.value < 10000 || isNaN(fuelLevel.value) === true){
            faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "There is not enough fuel for the journey";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
          }else{
            fuelStatus.innerHTML = "Fuel level high enough for launch";
          }
      
            if(cargoMass.value >= 10000 ){
          faultyItems.style.visibility = "visible";
          cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
          launchStatus.innerHTML = "Shuttle not ready for launch";
           launchStatus.style.color = "red";
            //faultyItems.style.color = "red";
           } else{
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
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
