function generateItinerary(event){
  event.preventDefault();
  
  
  let travelElement = document.querySelector("#travel-itinerary");
  travelElement.innerHTML = "Day 1: Arrive in Stockholm";

  
  new Typewriter("#travel-itinerary", {
    strings: travelElement.innerHTML,
    autoStart: true,
    cursor:"",
    delay:40,
  }); 

}


let itineraryElement = document.querySelector("#itinerary-generator");
itineraryElement.addEventListener("submit", generateItinerary);


//<br />
//Day 2: Go skydiving