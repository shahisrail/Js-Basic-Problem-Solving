function findMaxMin(arr){
    if (arr.lemgth===0){
        return null
    }
    const max = Math.max(...arr)
    const min = Math.min(...arr)

    return {max, min }
}
const number =[1,4,5,3,5,345,552,2]
const maxmin =  (findMaxMin(number));
console.log("maximum number ",maxmin.max);
console.log("minimum number ",maxmin.min);