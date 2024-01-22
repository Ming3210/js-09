let a = prompt("Nhập 1 chuỗi")
let b = prompt("Nhập số chữ muốn rút gọn")
let subA = a.split('')
for(let i = 0; i <b;i++){
    subA.pop()
}
let subB = subA.join('')
console.log(subB+"...")