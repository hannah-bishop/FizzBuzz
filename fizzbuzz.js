const factorFunc = (i,factor,string) => {
    return i%factor === 0 ? string : ''
}

const createArray = (i,finalArr,numberArray,stringArray) => {
    for (let j = 0; j<numberArray.length; j++){
        finalArr.push(factorFunc(i,numberArray[j],stringArray[j]))
    }
}

function fizzBuzz() {
    const numArr = [[3,5,7],[11]]
    const strArr = [['Fizz','Buzz','Bang'],['Bong']]
    for(let i = 1; i <= 195; i++){
        let finalArr = []
        if (i%11 === 0){
            createArray(i,finalArr,numArr[1],strArr[1])
        } else {
            createArray(i,finalArr,numArr[0],strArr[0])
        }
        finalArr = finalArr.filter(finalArr => finalArr.length>0)
        if (i%13 === 0){
            for (j=0; j< finalArr.length; j++){
                if (finalArr[j].includes('B')){
                   indexOfB = finalArr.indexOf(finalArr.find(element => element.includes('B')))
                   finalArr = finalArr.slice(0,indexOfB).concat(['Fezz'],finalArr.slice(indexOfB))
                   break
                }
            }
        }
        if (i%17 === 0){
            finalArr= finalArr.reverse()
        }
        finalStr = finalArr.length > 0 ? finalArr.join('') : i
        console.log(finalStr)
    }
}
fizzBuzz()