function fizzBuzz() {
    for(let i = 1; i <= 100; i++){
        const newi = i%3 === 0 ? 'Fizz' : 3
        console.log(newi)
    }
}

fizzBuzz()