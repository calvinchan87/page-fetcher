'use strict';

const { strict } = require('assert');
const fs = require('fs');

if (process.argv[3].toString().endsWith('.html') === false) {
  console.log("Local file path invalid.");
  } else {

  const request = require('request');
  request('http://' + process.argv[2].toString(), (error, response, body) => {

    if (error !== null) {
      console.log(error);
    } else {

    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  
    var bytes = fs.statSync(process.argv[3].toString()).size;
    console.log("Downloaded and saved " + bytes + " bytes to " + process.argv[3].toString());

    }

  })

};