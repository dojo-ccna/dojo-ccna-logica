var count = 0
for (let i=0; i< 1000; i++) {
    if(i%3 == 0 || i%5 == 0){
        count = count + i
    }
}
console.log("Result: ", count)
