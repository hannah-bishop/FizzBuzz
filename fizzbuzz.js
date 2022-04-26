function fizzBuzz() {
    for(let i = 1; i <= 100; i++){
        const newi3 = i%3 === 0 ? 'Fizz' : ''
        const newi5 = i%5 === 0 ? 'Buzz' : ''
        const str = newi3 + newi5
        const finalStr = str.length > 0 ? str : i
        console.log(finalStr)
    }
}

fizzBuzz()