
    // const modifiedServ=veggieServing.map(serving=>{
    //     const firstChange=serving.replace(/[{)}]/g, '');
    //     const secondChange= firstChange.replace(/[{(}]/g, ',')
    //     const thirdChange=secondChange.replace(/\s/g, "")
    //     const fourthChange=thirdChange.replace(/[{;}]/g, ',')
    //     return fourthChange
    // }  
    // )

//     let i=0;
//    const veggieObjects= veggies.map(veg=>{

//         const noCommas=veggieServing[i].split(",")
// //         //["1g","1cup"]

        
//         const aSpace = noCommas.map(item=>{
//             const re = (/[a-zA-Z]+|[0-9][/][0-9]+|[0-9]+/g); 
//             const result = item.replace(re, '$& ');
//             return (result)
//         })
// //         //["1 g ","1 cup "]
        
//         const splitUnit= aSpace.map(item=>{
//             return item.split(" ")
//         }
//         )
// //         //[["1","g"],["1","cup"]]
//         let rObject={}

//        for(let i=0;i<splitUnit.length;i++){
//         //    console.log('arr: ' + splitUnit[i][1])
//             if("medium"===splitUnit[i][1]||"small"===splitUnit[i][1]||"large"===splitUnit[i][1]||"mini"===splitUnit[i][1]){
//                 rObject[veg+"s"]=splitUnit[i][0]
//             }
//             else{
//                 rObject[splitUnit[i][1]]=splitUnit[i][0]
//             }

//        }

//         const resultObject=rObject
//         i++;

//         return {name: veg,serving:rObject}
//     }        
//     )
//     console.log(veggieObjects)





    
    // console.log(modifiedServ)
    // console.log(fruits.length)
    // console.log(modifiedServ.length)
