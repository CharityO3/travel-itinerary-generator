function showResponse(response){
  let travelItinerary = response.data.answer;
  new Typewriter("#travel-itinerary", {
    strings: travelItinerary,
    autoStart: true,
    cursor:"",
    delay:20,
  }); 
  
}
function generateItinerary(event){
  event.preventDefault();
  let instructionElement = document.querySelector("#user-itinerary-instruction");
  let apiKey = "b125a59f9afa4ebc141352te1ao60a9c";
  let context ="you are a globe trotter AI assistant that as travelled to all 180+ countries, give at most a 5 days itinerary in a basic HTML format with a <br /> after each sentences, don't include the word HTML when writing your response, e.g. Day 1: Arrive in user input city, be polite and provide a very short answer, make sure to follow the user's input. Sign the itinerary with 'SheCodes AI' inside a <strong> element";
  let prompt= `The user's input: Generate a travel itinerary on ${instructionElement.value}`
  let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showResponse);
  
  let travelElement = document.querySelector("#travel-itinerary");
  travelElement.innerHTML = "Generating itinerary...please wait"
}



let itineraryElement = document.querySelector("#itinerary-generator");
itineraryElement.addEventListener("submit", generateItinerary);


//<br />
//Day 2: Go skydiving

    
  