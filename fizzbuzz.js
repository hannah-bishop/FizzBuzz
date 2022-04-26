const factorFunc = (i,factor,string) => {
    return i%factor === 0 ? string : ''
}

const createArray = (i,finalArr,numberArray,stringArray) => {
    for (let j = 0; j<numberArray.length; j++){
        finalArr.push(factorFunc(i,numberArray[j],stringArray[j]))
    }
}

function fizzBuzz() {
    const numArr = [3,13,5,7]
    const numArr2 = [13,11]
    const strArr = ['Fizz','Fezz','Buzz','Bang']
    const strArr2 = ['Fezz', 'Bong']
    for(let i = 1; i <= 255; i++){
        let finalArr = []
        if (i%11 === 0){
            createArray(i,finalArr,numArr2,strArr2)
        } else {
            createArray(i,finalArr,numArr,strArr)
        }
        finalArr = finalArr.filter(finalArr => finalArr.length>0)
        if (i%17 === 0){
            finalArr= finalArr.reverse()
        }
        finalStr = finalArr.length > 0 ? finalArr.join('') : i
        console.log(finalStr)
    }
}
fizzBuzz()