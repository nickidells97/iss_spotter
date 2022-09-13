const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index.js');

// see index.js for printPassTimes 
// copy it from there, or better yet, moduralize and require it in both files

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));


// Call 
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });