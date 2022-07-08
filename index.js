const fetchBreedDescription = require("./breedFetcher");

// get arguments and set the default cat to Siberian
let myBreed = "Siberian"
if (process.argv[2]) myBreed = process.argv[2];

fetchBreedDescription(myBreed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
 // if (error) console.log(error);
  // console.log(content);
