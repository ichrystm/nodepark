const newentry = require("./newentry/NewentryController");

calcValue = (entryhour, entrydate) => {
  var result;
  var date = getDate();

  result = (date[0].slice(-2) - 17) * -1;

  console.log(result);

  if(result <= 1){
    var entryhour = date[1];
    
  }

}

calcValue();