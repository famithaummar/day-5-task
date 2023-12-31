var json = [
  {
    name: "famitha",
        task: "day 5",
    zenclass: "MERN",
        status: " muduchurvanu nenaikra",
    
  
    },
  {
    name: "famitha shepnam",
        task: "day 3",
    zenclass: "MERN",
        status: " innu pannitu tha iruka",
  },
];
//for loop
for (var i = 0; i < json.length; i++) {
  var obj = json[i];

  console.log(obj.name);
  console.log(obj.task);
  console.log(obj.zenclass);
  console.log(obj.status);
}
//for Each
json.forEach(function (obj) {
  console.log(obj.status);
});

//for In
for (var key in json) {
  if (json.hasOwnProperty(key)) {
    console.log(json[key].name);
    //console.log(json[key].status);
  }
}
//for Of
let text = "";
for (let x of json[key].name) {
  text += x;
}
console.log(text);
