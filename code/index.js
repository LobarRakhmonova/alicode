var method = prompt("enter method:");

if (method == "shift") {
  var array = [];
  var text = prompt("enter the array element:").split(" ");
  array = array.concat(text);
  console.log(array.shift());
  console.log(array);
}
if (method == "unshift") {
  var array = [];
  var text = prompt("enter the array element:").split(" ");
  array = array.concat(text);
  var addtext = prompt("enter the add text:");
  console.log("org array", array);
  console.log(array.unshift(addtext));
  console.log("unshifted", array);
}

if (method == "concat") {
  var array = [];
  var array2 = [];
  var text = prompt("enter the array element:").split(" ");
  array = array.concat(text);
  var text = prompt("enter the 2 array element:").split(" ");
  array2 = array2.concat(text);
  console.log("org array", array);
  console.log("concat", array.concat(array2));
}

if (method == "delete") {
  var array = [];
  var text = prompt("enter the array element:").split(" ");
  array = array.concat(text);
  var inx = prompt("enter the index text:");
  console.log("org array", array);
  console.log(delete array[inx]);
  console.log("deleted", array);
}
