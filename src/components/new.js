var arr=[45,23,78,5,12];

// var newarr=[];

// for(var i=0;i<arr.length;i++){
//     newarr.push(arr[i]+5);
// }

// console.log(newarr); // [50, 28, 83, 10, 17]




var newarr=arr.map(function(element){
    return element+5;
})

console.log(newarr); // [50, 28, 83, 10, 17]