function fizzBuzz() {
    for(let i = 1; i <= 100; i++){
        let numArr = [3,5,7]
        let strArr = ['Fizz','Buzz','Bang']
        let finalStr = ''
        const factorFunc = (factor,string) => {
            const newi = i%factor === 0 ? string : ''
            finalStr += newi 
        }
        for (let j = 0; j<numArr.length; j++){
            factorFunc(numArr[j],strArr[j])
        }
        finalStr = finalStr.length > 0 ? finalStr : i
        console.log(finalStr)
    }
}

fizzBuzz()