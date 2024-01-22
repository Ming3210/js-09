let a = prompt("Nhập 1 chuỗi")
let arr = []
function check(a) {
    let word = a.split(" ")
    let l = 0
    let maxLength
    for(let i = 0; i < word.length; i++){
        if(word[i].length > l){
            maxLength = word[i]
            l = word[i].length
        }
    }
    console.log("Từ dài nhất",maxLength)
    console.log("Độ dài",l)
}
check(a)