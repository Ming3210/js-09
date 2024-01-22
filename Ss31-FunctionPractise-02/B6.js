function fakeFind(arr,fn){
    for(let index in arr){
        fn(arr[index],index)
    }
}
fakeFind([1, 4, 5, 6, 3],function (e,i){
    return e%2==0
})