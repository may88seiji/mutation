//1
function mutation(arr) {
  var target = arr[1].toLowerCase();
  var item = arr[0].toLowerCase();
  for(var i= 0; i<target.length; i++){
    if(item.indexOf(target[i]) < 0) return false;
    }
    return true;  
}
mutation(["hello", "hey"]);
//2
function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}
//3
function mutation(arr){
    return new RegExp("^[" + arr[0] + "]+$", "i").test(arr[1]);
}