getEntryDate = () => {
  var date = new Date();

  var day = String(date.getDate());
  var month = String(date.getMonth()+ 1);
  var year = String(date.getFullYear());

  var hour = String(date.getHours());
  var minutes = String(date.getMinutes());
  if(minutes <= 9){
    minutes = "0" + minutes;
  }
  var seconds = String(date.getSeconds());

  let entryDate = year + "-" + month + "-" + day;
  let entryHour = hour + ":" + minutes + ":" + seconds;

  var values = [entryDate, entryHour];
  
  return values;
}

var teste = getEntryDate();

console.log(teste[1]);