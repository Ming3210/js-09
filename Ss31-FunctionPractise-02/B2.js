function maxOfMaxOfArrays (...arrays) {
    let subArr = [];
    for (let array of arrays) {
        let max = array[0]
        for(let i = 1;i<array.length;i++) {
            if(array[i] > max) {
                max = array[i]
            }
        }
        subArr.push(max)
    }   
    console.log(subArr)
}
let arr1= [1,2,3,4]
let arr2= [2,5,7,3]
let arr3= [-1,-5,-3]
maxOfMaxOfArrays(arr1, arr2, arr3)
