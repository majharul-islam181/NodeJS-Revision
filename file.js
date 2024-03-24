//File handling
const fs = require('fs');

//Write with Sync..
// fs.writeFileSync("./text.txt","My name is Majharul Islam")

// Write with Async
// fs.writeFile('./text1.txt', "Hello this is async fs 1", (err)=>{
  
// })

//Read with Sync
// const result = fs.readFileSync("./text1.txt", "utf-16le");
// console.log(result)

// Read with Async
// fs.readFile("./text1.txt", "utf-8", (err,result)=>{
//     if(err){
//         console.log("Error: ", err)
//     }else{
//         console.log(result);
//     }
// })


// AppendFile - for write (overwrite hobe na,new text/something will add automatic)
// fs.appendFileSync("./text2.txt", `My time: ${Date.now()}`)

//File Copy
// fs.copyFileSync("./text2.txt", "./copy.text")

//Delete (unlink)
// fs.unlinkSync('./copy.text');

//file all information Like(creating time,size,blocks)
// console.log(fs.statSync("./text2.txt"));

//Create Folder
// fs.mkdirSync("my-new-folder")
fs.mkdirSync("my-new-folder1/a/b/",{recursive: true})






