var arr = new Array(3,2,7,4,5)
var len = arr.length
var temp = {
    a : "aaa",
    b : 'bbb',
    c : 'ccc',
    d : 'ddd'
}
// arr.forEach( (s) => {
//     console.log("----->",s);
// })

// for (const iterator of temp) {
//     console.log(iterator);
// }

// for (const key in temp) {
//     console.log(`temp -> ${temp} , key -> ${temp[key]}`);
//     // if (Object.hasOwnProperty.call(temp, key)) {
//     //     const element = temp[key];
//     //     console.log("element",element);
//     // }
// }

var reverseArray = (arr,len) => {
    var tempArray = new Array()
    while (len > 0) {
        var i = len - 1
        tempArray.push(arr[i])
        len = len - 1
    }
    return tempArray
}

var maxElement = (arr, len) => {
    var maxElement = 0
    for (i = 0; i < len; i++){
        if (arr[i] > maxElement) {
            maxElement = arr[i]
        }
    }
    return maxElement
}

var sortElement = (arr, len) => {
    var min = arr[0]
    var tempArray = new Array()
    for (i = 0; i < len; i++){
        console.log("arr[i]",arr[i]);
        if (arr[i] <= min) {
            tempArray.push(arr[i])                
        }
    }
    return tempArray
}

// console.log(reverseArray(arr,len));
// console.log(maxElement(arr,len));
// console.log(sortElement(arr,len));
