// Call Back Function

function modifyArray(arr, callback) {
    arr.push(100);
    callback();
}
var arr = new Array(1,2,3,4,5)
console.log(typeof(arr));
modifyArray(array = arr, callback = function () {
    console.log('element added successfully ->',arr);
}
)

// Empty the array

var array = [1, 2, 3]
while (!(array.length === 0)){
    var i = 0
    array.splice(i,1)
}
console.log("-----> ", array);

// Star pattern -- Reverse

var num = 5
for (i = num; i <= num; i--){
    console.log('*'.repeat(i));
}

// star pyramid

rows = 3
for (i = 1; i <= 3; i++){
    for (j = 1; j < rows - 1; j++){
        console.log(" ");
        for (k = 1; k < i * 2 - 1; k++){
            console.log("*".repeat(k))
        }
        console.log();
    }
}
