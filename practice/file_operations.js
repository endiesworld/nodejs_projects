const fs = require('fs')

let content = "This is what will be written to the file"

fs.writeFile('test.txt', content, (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log("File written!")
    })

    fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
    })

    fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})

console.log("Hello!")