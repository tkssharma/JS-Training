var myCollection = {
    "cars": [
              { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
              { "name":"BMW", "models":[ "320", "X3", "X5" ] },
              { "name":"Fiat", "models":[ "500", "Panda" ] }
            ]
    }

    for ( x in myCollection.cars ) {
      //console.log(x);
      var keys = Object.entries(myCollection.cars[x])
      console.log(keys);
    }
  
    // collection 
