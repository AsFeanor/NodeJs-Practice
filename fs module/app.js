const { error } = require('console');
const fs = require('fs');

/*
const files = fs.readdir('./', function (error, data) {
    if(error){
        console.log(error);
    }else{
        console.log(data)
    }
})
*/


/*
const data = fs.readFile('index.html', 'utf8', function(error, data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})
*/

/*
fs.writeFile('deneme.txt', 'Hello World...', (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log('dosya olusturuldu');
    }
})
*/

// fs.appendFile('deneme1.txt', 'Hello World......', (error)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log('dosya olusturuldu');
//     }
// })

// fs.unlink('deneme1.txt', (error)=>{
//     console.log('dosya silindi');
// })

fs.rename('deneme.txt', 'deneme1.txt', (error)=>{
    console.log('dosya degistirildi');
})
