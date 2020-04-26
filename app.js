const array = [1, 2, 3]
const object = {
    a: 1,
    b: 2,
    c: 3,
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

for (const index in array) {
    console.log(index)
}

for (const key in object) {
    console.log(key)
}
for (const key in object) {
    console.log(object[key])
}