const factorFunc = (i,factor,string) => {
    return i%factor === 0 ? string : ''
}

function fizzBuzz() {
    const numArr = [3,13,5,7]
    const strArr = ['Fizz','Fezz','Buzz','Bang']
    for(let i = 1; i <= 255; i++){
        let finalStr = ''
        if (i%13 === 0 && i%11 === 0 ){
            finalStr = 'FezzBong'
        } else if (i%11 === 0) {
            finalStr = 'Bong'
        }else {
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