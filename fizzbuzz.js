const factorFunc = (i,factor,string) => {
    return i%factor === 0 ? string : ''
}

function fizzBuzz() {
    const numArr = [3,5,7]
    const strArr = ['Fizz','Buzz','Bang']
    for(let i = 1; i <= 100; i++){
        let finalStr = ''
        if (i%11 === 0){
            finalStr = 'Bong'
        } else {
            for (let j = 0; j<numArr.length; j++){
                finalStr += factorFunc(i,numArr[j],strArr[j])
            }
        }
        finalStr = finalStr.length > 0 ? finalStr : i
        console.log(finalStr)
    }
}
fizzBuzz()