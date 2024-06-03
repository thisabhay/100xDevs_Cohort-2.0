//function fs is heavy task so its called and kamal bai keep on working and coder moves to next line
const fs = require('fs');

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
});

//promises yeah vada nah bhulna sanam

// my own asynchronous function
function kiratsReadFile() {
    return new Promise(function (resolve, reject) {
        fs.readFile("a.txt", "utf-8", function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    })
}

// callback function to call
function onDone(data) {
    console.log(data)
}

kiratsReadFile().then(onDone).catch(function(){
    console.log("error");
});

//aync functions with promises with a better aproach

function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      // do some async logic here
      resolve("hi there!")
    });
    return p;
  }
  
  async function main() {
    const value = await kiratsAsyncFunction();
    console.log(value);
  }
  
  main();