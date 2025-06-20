function showResponse(response){
  let travelItinerary = response.data.answer;
  new Typewriter("#travel-itinerary", {
    strings: travelItinerary,
    autoStart: true,
    cursor:"",
    delay:0,
  }); 
  
}
function generateItinerary(event){
  event.preventDefault();
  let instructionInput = document.querySelector("#user-itinerary-instruction");
  let apiKey = "b125a59f9afa4ebc141352te1ao60a9c";
  let context = "You are a globe trotter AI assistant that has travelled to 180+ countries, give at most a 5 days itinerary in a basic HTML format with a <br /> after each sentences, do not include the word HTML or backticks when writing your response, add some emojis to make it more readable, start the itineray like this: 5 - Days Itinerary in France, with a <br /><br /> after, e.g. Day 1: Arrive in user input city, add a <br /> <br /> after each day listed. Also give an estimated amount for each step. Provide the total cost for the trip in the country's local currency, provide this just before signing the itinerary, e.g, Estimated cost: $40 and in bracket add the € equivalent. Be polite and provide a very short answer, make sure to follow the user's input and this prompt. Add a <br /> before and after the estimated cost. Sign the itinerary with 'SheCodes AI' inside a <strong> element at the end of your response";
  let prompt= `The user's input: Generate a travel itinerary on ${instructionInput.value}`
  let apiUrl =`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showResponse);
  
  let travelElement = document.querySelector("#travel-itinerary");
  travelElement.classList.remove("hidden");
  let instruction = instructionInput.value.toLowerCase();
  instruction = instruction.charAt(0).toUpperCase() + instruction.slice(1);
  travelElement.innerHTML = `<div class="generating">⌛Generating itinerary for ${instruction}...</div>`
}



let itineraryElement = document.querySelector("#itinerary-generator");
itineraryElement.addEventListener("submit", generateItinerary);


    
  