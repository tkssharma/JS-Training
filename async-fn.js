// callback in javascript 
 [1,2,3].map(function(i){
  console.log(i)
})
 
setTimeout(function(){
   console.log('hello');
}, 3000)


function processUserInput(cb) {
   console.log('Please enter your name.');
   // once you are done 
   // async 
   // async operation here once you get data 
    cb('hello tarun'+c);
}
  
processUserInput(function(name){
  console.log(name);
});


function doHomework(subject, cb) {
    console.log(`Starting my ${subject} homework.`);
    // async operation 
    // once you are done
    cb();
}
  
  doHomework('math', function() {
    console.log('Finished my homework');
  });