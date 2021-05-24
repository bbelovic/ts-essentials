let arr = [2, 3, 5, 7, 11, 13];

for (var idx in arr) {
    console.log(`${idx} -> ${arr[idx]}`)
}

for (const val of arr) {
    console.log(`${val}`)
}