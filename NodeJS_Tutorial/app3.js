const fs = require('fs');
// fs.mkdir('tutorial',(err)=>{
//     if(err){
//         console.log(err);
//     }  
//     else{
//     //     fs.rmdir('tutorial',(err)=>{
//     //         if(err)
//     //             console.log(err);
//     //         else
//     //             console.log('success')
//     //     })
//     // }
//     // fs.writeFile('./tutorial/example.txt','123',(err)=>{
//     //     if(err)
//     //         console.log(err);
//     //     else{
//     //         console.log('success');
//     //     }
//     // })
//     // }  
// });

// fs.unlink('./tutorial/example.txt',(err)=>{
//         if(err)
//             console.log(err);
//         else{
//             console.log('deleted file');
//         }
//         });

// fs.rmdir('tutorial',(err)=>{
//         if(err)
//             console.log(err);
//         else{
//             console.log('deleted folder');
//         }
// });

fs.readdir('example',(err,files)=>{
    if(err){
        console.log(err);
    }
    else{
        // console.log(files);
        for(let file of files){
            fs.unlink('./example/' + file, (err)=>{
                if(err)
                    console.log(err);
                else{
                    console.log('deleted file');
                }
            });
        }
    }
});