// here it do go
const request = require('request');

// the cat api breed info can be found at: https://api.thecatapi.com/v1/breeds/search
// need to find a breed? https://api.thecatapi.com/v1/breeds/search?q=Siberian - this finds Siberian cat info

let myArguments = process.argv;
myArguments.splice(0, 2);
if (!myArguments[0]) myArguments.push("Siberian");

let myURL = "https://api.thecatapi.com/v1/breeds/search?q=" + myArguments[0];

// declare a blank content variable
let content = "";


request(myURL, (error, response, body) => {
  if (response.statusCode == 200)  {
    console.log("m(^ * >.< * ^)m CAT FOUND!");
    content = JSON.parse(body);
  }
  if (response.statusCode != 200) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
    content = "THERE WAS PORBLEM";
  }
  // fs.writeFile(myLocalFilePath, content, err => {
  //   if (err) {
  //     console.log("File writing error!")
  //     console.error(err);
  //   }
  //   // file written successfully
    
  // });

  
});


setTimeout(() => {
  if (content[0].description !== undefined) {
    console.log(content[0].description);
  } else {
    console.log("Couldn't find breed. ;( ")
  }
}, 2000 );
