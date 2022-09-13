const path = require('path')
const fs = require('fs')

const files = ['.bash_profile', 'klgm', '.npmrc']

files.forEach((file) => {
    try{
        const filePath = path.resolve(process.env.Home, file)
        const data = fs.readFileSync(filePath)
        console.log('File data is', data)
    }catch(err){
        console.log('file not found')
    }
})