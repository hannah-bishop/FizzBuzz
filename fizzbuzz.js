const factorFunc = (i,factor,string) => {
    return i%factor === 0 ? string : ''
}

function fizzBuzz() {
    const numArr = [3,13,5,7]
    const numArr2 = [13,11]
    const strArr = ['Fizz','Fezz','Buzz','Bang']
    const strArr2 = ['Fezz', 'Bong']
    for(let i = 1; i <= 2431; i++){
        let finalStr = ''
        if (i%11 === 0){
            if (i%17 === 0){
                for (let j = numArr2.length-1; j>= 0; j--){
                    finalStr += factorFunc(i,numArr2[j],strArr2[j])
                }
            } else {
                for (let j = 0; j<numArr2.length; j++){
                    finalStr += factorFunc(i,numArr2[j],strArr2[j])
                }
            }
        } else {
            if (i%17 === 0){
                for (let j = numArr.length-1; j>= 0; j--){
                    finalStr += factorFunc(i,numArr[j],strArr[j])
                }
            } else {
                for (let j = 0; j<numArr.length; j++){
                    finalStr += factorFunc(i,numArr[j],strArr[j])
                }
            }
        }
        finalStr = finalStr.length > 0 ? finalStr : i
        console.log(finalStr)
    }
}
fizzBuzz()