let a = prompt("Nhập 1 chuỗi")
let b = prompt("Nhập chuỗi con")
function c(a,b) {
    let count = 0
    let i = a.length - b.length
    for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            count++;
        }
        i++;
    }
    if(count == b.length) return true
    else return false
}
console.log(c(a,b))