var x = ["gela","gocha","nika","gurami"]

const filtering = (items) => {
    return items.length > 4
}

console.log(x.filter(filtering))


var z = x.filter((item) => {
    return item.length > 4
})
console.log(z)