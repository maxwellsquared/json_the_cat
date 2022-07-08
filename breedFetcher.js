// here it do go
const request = require('request');

// the cat api breed info can be found at: https://api.thecatapi.com/v1/breeds/search
// need to find a breed? https://api.thecatapi.com/v1/breeds/search?q=Siberian - this finds Siberian cat info



const fetchBreedDescription = function(breedname, callback) {
  let myURL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedname;
  let toSend = "";
  request(myURL, (error, response, body) => {
    if (body === "[]")  { toSend = null; error = "No cat here!"}
    if (body !== "[]") toSend = JSON.parse(body)[0].description
    callback(error, toSend);
  });
}


module.exports = fetchBreedDescription;



// OLD VERSION:

// const fetchBreedDescription = function(breedname, callback) {
//   let myURL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedname;
//   request(myURL, (error, response, body) => {
//     if (response && response.statusCode == 200) {
//       if (JSON.parse(body)[0]) {
//         console.log("m(^ * >.< * ^)m CAT FOUND!");
//         callback(error, JSON.parse(body))
//       }
//       if (body === "[]") {
//         console.log("Uh-oh. No cat.");
//         callback(error, JSON.parse(body));
//       }
//     }
//   });
// }
