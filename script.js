

function largestPairSum(numbers) {
    let max1 = numbers[0]
    let max2 = numbers[0]
    let posicao = 0
    for (let i=0;i<numbers.length;i++){
        if(numbers[i]>max1){
            max1=numbers[i]
            posicao=i
        }
    }
    if(max1==numbers[0]){
        max2=numbers[1]
    }
    for (let i=0;i<numbers.length;i++){
        if (i!=posicao && numbers[i]>max2)
        max2=numbers[i]
    }
    return max1+max2
  
}

let a = [-3,-4,-5,2]
let n = [1, 3, 45, 86, 2, 0]
let m = [10, 14, 2, 23, 19]
console.log(largestPairSum(a))


// console.log(largestPairSum(n))
// console.log(largestPairSum(m))


 //     if(numbers[i]>max1){
    //     max1 = max2
    //     } else if (numbers[i] < max1 && numbers[i]> aux ) {
    //         max2 = numbers[i]
    //     } else if (numbers[i] < max2) {
    //         aux = numbers[i]
    //     } else {
            
    //     }
    // }
    // return max1 + max2