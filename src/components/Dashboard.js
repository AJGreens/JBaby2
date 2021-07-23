import React,{useContext, useState} from 'react'
import { AuthContext } from '../contexts/AuthContext'
import {Button} from 'react-bootstrap'

function Dashboard(){
    const {currUser,signOut}=useContext(AuthContext)
    const fruitObjects=[{"name":"Acerola – West Indian Cherry","serving":{"g":"5","fruit":"1"}},{"name":"Apple","serving":{"g":"140","fruit":"1"}},{"name":"Apricots","serving":{"g":"105","fruit":"3"}},{"name":"Avocado","serving":{"g":"130","fruit":"1/5"}},{"name":"Banana","serving":{"g":"140","fruit":"1"}},{"name":"Blackberries","serving":{"/A":"N","cup":"1"}},{"name":"Blackcurrant","serving":{"g":"59","ml":"125"}},{"name":"Blueberries","serving":{"g":"80","cup":"1/2"}},{"name":"Breadfruit","serving":{"g":"96","fruit":"1/4"}},{"name":"Cantaloupe","serving":{"g":"150","fruit":"1/4"}},{"name":"Carambola","serving":{"g":"89","fruit":"1"}},{"name":"Cherimoya","serving":{"g":"312","fruit":"1"}},{"name":"Cherries","serving":{"g":"140","cherries":"21","cup":"1"}},{"name":"Clementine","serving":{"g":"74","fruit":"1"}},{"name":"Coconut Meat","serving":{"g":"100"}},{"name":"Cranberries","serving":{"cup":"1"}},{"name":"Custard-Apple","serving":{"g":"120","fruit":"1/2"}},{"name":"Date Fruit","serving":{"g":"94","mL":"125"}},{"name":"Durian","serving":{"g":"128","mL":"125"}},{"name":"Elderberries","serving":{"g":"77","ml":"125"}},{"name":"Feijoa","serving":{"g":"100","fruits":"2"}},{"name":"Figs","serving":{"g":"100","fruit":"2"}},{"name":"Gooseberries","serving":{"g":"79","ml":"125"}},{"name":"Grapefruit","serving":{"g":"140","fruit":"1/2"}},{"name":"Grapes","serving":{"g":"140","grapes":"21","cup":"1"}},{"name":"Guava","serving":{"g":"90","fruit":"1"}},{"name":"Honeydew Melon","serving":{"g":"150","fruit":"1/6"}},{"name":"Jackfruit","serving":{"g":"87","ml":"125"}},{"name":"Java-Plum","serving":{"g":"60","fruits":"20"}},{"name":"Jujube Fruit","serving":{"g":"70","fruits":"5"}},{"name":"Kiwifruit","serving":{"g":"140","fruit":"2"}},{"name":"Kumquat","serving":{"g":"95","fruits":"5"}},{"name":"Lemon","serving":{"g":"55","fruit":"1"}},{"name":"Lime","serving":{"g":"55","fruit":"1"}},{"name":"Longan","serving":{"g":"64","fruits":"20"}},{"name":"Loquat","serving":{"g":"157","mL":"250"}},{"name":"Lychee","serving":{"g":"96","fruits":"10"}},{"name":"Mandarin","serving":{"g":"88","mediummandarin":"1"}},{"name":"Mango","serving":{"g":"140","fruit":"1/2"}},{"name":"Mangosteen","serving":{"g":"83","mL":"100"}},{"name":"Mulberries","serving":{"g":"74","ml":"125"}},{"name":"Nectarine","serving":{"g":"140","fruit":"1"}},{"name":"Olives","serving":{"g":"57","mL":"100"}},{"name":"Orange","serving":{"g":"140","fruit":"1"}},{"name":"Papaya","serving":{"g":"153","fruit":"1/2"}},{"name":"Passion Fruit","serving":{"g":"36","fruits":"2"}},{"name":"Peaches","serving":{"g":"140","fruit":"1"}},{"name":"Pear","serving":{"g":"140","fruit":"1"}},{"name":"Persimmon","serving":{"g":"168","fruit":"1"}},{"name":"Pitaya (Dragonfruit)","serving":{"cupscoopedflesh":"1/2","grams":"100"}},{"name":"Pineapple","serving":{"g":"140","mediumslices":"2"}},{"name":"Pitanga","serving":{"g":"73","mL":"100"}},{"name":"Plantain","serving":{"g":"81","mL":"125"}},{"name":"Plums","serving":{"g":"140","fruit":"1"}},{"name":"Pomegranate","serving":{"g":"77","fruit":"1/2"}},{"name":"Prickly Pear","serving":{"g":"103","fruit":"1"}},{"name":"Prunes","serving":{"g":"25","driedfruits":"3"}},{"name":"Pummelo","serving":{"g":"100","mL":"125"}},{"name":"Quince","serving":{"g":"92","fruit":"1"}},{"name":"Raspberries","serving":{"g":"80","cup":"1/2"}},{"name":"Rhubarb","serving":{"ml":"125","cup":"1/2"}},{"name":"Rose-Apple","serving":{"g":"100"}},{"name":"Sapodilla","serving":{"g":"85","fruit":"1/2"}},{"name":"Mamey Sapote","serving":{"g":"113","fruit":"1/2"}},{"name":"Soursop","serving":{"g":"119","mL":"125"}},{"name":"Strawberries","serving":{"g":"140","fruit":"7"}},{"name":"Sugar-Apple","serving":{"g":"106","mL":"100"}},{"name":"Tamarind","serving":{"g":"100"}},{"name":"Tangerine","serving":{"g":"140","fruit":"2"}},{"name":"Watermelon","serving":{"g":"150","fruit":"1/28","cupdiced":"1"}}]
//     const fruits=["Acerola – West Indian Cherry", "Apple", "Apricots", "Avocado", "Banana", "Blackberries", "Blackcurrant", "Blueberries", "Breadfruit", 
//     "Cantaloupe", "Carambola", "Cherimoya", "Cherries", "Clementine", "Coconut Meat", "Cranberries", "Custard-Apple",  "Date Fruit", 
//     "Durian", "Elderberries", "Feijoa", "Figs", "Gooseberries", "Grapefruit", "Grapes", "Guava", "Honeydew Melon", "Jackfruit", 
//     "Java-Plum", "Jujube Fruit", "Kiwifruit", "Kumquat", "Lemon", "Lime", "Longan", "Loquat", "Lychee", "Mandarin", "Mango", "Mangosteen", 
//     "Mulberries", "Nectarine", "Olives", "Orange", "Papaya", "Passion Fruit", "Peaches", "Pear", "Persimmon", "Pitaya (Dragonfruit)", 
//     "Pineapple", "Pitanga", "Plantain", "Plums",  "Pomegranate", "Prickly Pear", "Prunes", "Pummelo", "Quince", "Raspberries", 
//     "Rhubarb", "Rose-Apple", "Sapodilla", "Mamey Sapote", "Soursop", "Strawberries", "Sugar-Apple", "Tamarind", "Tangerine", 
//     "Watermelon"]
//     const fruitServing= ["5g,1fruit", "140g,1medium", "105g,3small", "130g,1/5fruit", "140g,1large", "N/A,1cup", "59g,125ml", "80g,1/2cup", "96g,1/4fruit", "150g,1/4medium", "89g,1medium", "312g,1fruit", "140g,21cherries,1cup", "74g,1fruit", "100g", "1cup", "120g,1/2medium", "94g,125mL", "128g,125mL", "77g,125ml", "100g,2fruits", "100g,2medium", "79g,125ml", "140g,1/2large", "140g,21grapes,1cup", "90g,1fruit", "150g,1/6medium", "87g,125ml", "60g,20fruits", "70g,5fruits", "140g,2medium", "95g,5fruits", "55g,1small", "55g,1small", "64g,20fruits", "157g,250mL", "96g,10fruits", "88g,1mediummandarin", "140g,1/2large", "83g,100mL", "74g,125ml", "140g,1medium", "57g,100mL", "140g,1medium", "153g,1/2fruit", "36g,2fruits", "140g,1medium", "140g,1medium", "168g,1fruit", "1/2cupscoopedflesh,100grams", "140g,2mediumslices", "73g,100mL", "81g,125mL", "140g,1medium", "77g,1/2fruit", "103g,1medium", "25g,3driedfruits", "100g,125mL", "92g,1fruit", "80g,1/2cup", "125ml,1/2cup", "100g", "85g,1/2fruit", "113g,1/2fruit", "119g,125mL", "140g,7medium", "106g,100mL", "100g", "140g,1large,2small", "150g,1/12mini,1/18small,1/28large,1cupdiced"]

//     let i=0;
//    const fruitObjects= fruits.map(fruit=>{

//         const noCommas=fruitServing[i].split(",")
//         //["1g","1cup"]

        
//         const aSpace = noCommas.map(item=>{
//             const re = (/[a-zA-Z]+|[0-9][/][0-9]+|[0-9]+/g); 
//             const result = item.replace(re, '$& ');
//             return (result)
//         })
//         //["1 g ","1 cup "]
        
//         const splitUnit= aSpace.map(item=>{
//             return item.split(" ")
//         }
//         )
//         //[["1","g"],["1","cup"]]
//         let rObject={}

//        for(let i=0;i<splitUnit.length;i++){
//         //    console.log('arr: ' + splitUnit[i][1])
//             if("medium"===splitUnit[i][1]||"small"===splitUnit[i][1]||"large"===splitUnit[i][1]||"mini"===splitUnit[i][1]){
//                 rObject["fruit"]=splitUnit[i][0]
//             }
//             else{
//                 rObject[splitUnit[i][1]]=splitUnit[i][0]
//             }

//        }




//         const resultObject=rObject
//         i++;

//         return {name: fruit,serving:rObject}
//     }        
//     )
//     console.log(fruitObjects)
    // const modifiedServ=fruitServing.map(serving=>{
    //     const firstChange=serving.replace(/[{)}]/g, '');
    //     const secondChange= firstChange.replace(/[{(}]/g, ',')
    //     const thirdChange=secondChange.replace(/\s/g, "")
    //     const fourthChange=thirdChange.replace(/[{;}]/g, ',')
    //     return fourthChange
    // }  
    // )




    
    // console.log(modifiedServ)
    // console.log(fruits.length)
    // console.log(modifiedServ.length)



    const iterAmts = ()=>{

        const amts = fruitObjects[fruitID].serving
        console.log(amts)
        const myarr = []
        for (var key in amts){
            myarr.push(key)
        }
        console.log('myarr: ' + myarr[1])

        return myarr

    }


    const [fruitID,setFruitID] = useState(0)

    

    return(
        <>
            <h1>Hello, {currUser.displayName}</h1>
            <Button onClick={signOut}>Sign Out</Button>
            <h3>Veggies</h3>
            
            <div className = 'dropdown' style = {{height: '30px', overflow: 'hidden'}} >
                
                <select id = 'chooseFruit' value = {fruitID} onChange = {(e)=>setFruitID(e.target.value)}>
                    <option>--       select fruit      --</option>
                    {fruitObjects.map((fruit, index)=>{

                        return(
                            <option key = {index} value = {index}>{fruit.name}</option>          
                              )
                    })
                    }
                    
                </select>

                {/* <Button onClick = {()=>console.log(document.getElementById('chooseFruit').value)}>CLICK ME</Button> */}





                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>

                    
                </select>


                <select>  
                
                    <option>-- handfuls  --</option>
                    {iterAmts().map(item=>{
                        return(<option>{item}</option>)
                    })}

                    {/* {fruitObjects[fruitID].serving.map(key=>{
                        return <option>key</option>
                    })
                    } */}
                    
                    
                </select>
            

            </div>
 
            <Button onClick = {()=>{
                console.log('fruitID' + fruitID)

                const amts = fruitObjects[document.getElementById('chooseFruit').value].serving

                for (var key in amts){
                    console.log('key'+key)
                }
            }}>Add</Button>



        </>
    )
}
export default Dashboard