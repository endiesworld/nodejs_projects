const fs = require("fs").promises;


var file_content = '' // Used to hold file contents

const getStats = async (path) => {
    try {
        // Pass in the file path
        const stats = await fs.stat(path);
        console.log(stats);
    } catch (error) {
        console.error(error);
    }
};

getStats("./test.txt");

const readFile = async (path) => {
    try {
        file_content = await fs.readFile(path, "utf8");
        
    } catch (error) {
        console.error(error);
    }

    const writeFile = async (path,data) => {
    try{
            await fs.writeFile(path, data)
        }catch(err){
            console.error(err)
        }
    
    let append_data = " appending another hello world"
        const appendFile = async (path, data) => {
            try {
                await fs.appendFile(path, data);
            } catch (error) {
                console.error(error);
            }
        };
    appendFile("./test_.txt", append_data);
    
    }

    writeFile("./test_.txt", file_content);

    
};

readFile("./test.txt");

// Write your solution here

// const writeFile = async (path,data) => {
//     try{
//         await fs.writeFile(path, data)
//     }catch(err){
//         console.error(err)
//     }
// }

// writeFile("./test_.txt", file_content.toString()); // Writing "hello world" to the file

// let append_data = "appending another hello world"
// const appendFile = async (path, data) => {
//     try {
//         await fs.appendFile(path, data);
//     } catch (error) {
//         console.error(error);
//     }
// };
// appendFile("./test_.txt", append_data);
