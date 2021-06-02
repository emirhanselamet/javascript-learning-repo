const array1 = [2,4,5,7,8]
const result1 = array1.every((number,index,arr)=>{
    console.log(index,arr);
    return number % 2 ===0
})
console.log(result1);