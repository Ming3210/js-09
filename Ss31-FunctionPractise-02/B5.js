function devide(arr, a) {
    let b = [];
  

    for (let i = 0; i < arr.length; i = i +  a) {
      let c = arr.slice(i, i + a);
      b.push(c);
    }
    console.log(b)
}
  
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let chunkedArray = devide(arr, 2);
