import React,{useContext,useState,useEffect} from 'react'
import { AuthContext } from '../contexts/AuthContext'
import {Button} from 'react-bootstrap'
import {app} from './Firebase'
import BoardForm from './BoardForm'

function Dashboard(){
    const {currUser,signOut}=useContext(AuthContext)
    
    const fruitObjects=[{"name":"Acerola – West Indian Cherry","serving":{"g":"5","fruit":"1"}},{"name":"Apple","serving":{"g":"140","fruit":"1"}},{"name":"Apricots","serving":{"g":"105","fruit":"3"}},{"name":"Avocado","serving":{"g":"130","fruit":"1/5"}},{"name":"Banana","serving":{"g":"140","fruit":"1"}},{"name":"Blackberries","serving":{"/A":"N","cup":"1"}},{"name":"Blackcurrant","serving":{"g":"59","ml":"125"}},{"name":"Blueberries","serving":{"g":"80","cup":"1/2"}},{"name":"Breadfruit","serving":{"g":"96","fruit":"1/4"}},{"name":"Cantaloupe","serving":{"g":"150","fruit":"1/4"}},{"name":"Carambola","serving":{"g":"89","fruit":"1"}},{"name":"Cherimoya","serving":{"g":"312","fruit":"1"}},{"name":"Cherries","serving":{"g":"140","cherries":"21","cup":"1"}},{"name":"Clementine","serving":{"g":"74","fruit":"1"}},{"name":"Coconut Meat","serving":{"g":"100"}},{"name":"Cranberries","serving":{"cup":"1"}},{"name":"Custard-Apple","serving":{"g":"120","fruit":"1/2"}},{"name":"Date Fruit","serving":{"g":"94","mL":"125"}},{"name":"Durian","serving":{"g":"128","mL":"125"}},{"name":"Elderberries","serving":{"g":"77","ml":"125"}},{"name":"Feijoa","serving":{"g":"100","fruits":"2"}},{"name":"Figs","serving":{"g":"100","fruit":"2"}},{"name":"Gooseberries","serving":{"g":"79","ml":"125"}},{"name":"Grapefruit","serving":{"g":"140","fruit":"1/2"}},{"name":"Grapes","serving":{"g":"140","grapes":"21","cup":"1"}},{"name":"Guava","serving":{"g":"90","fruit":"1"}},{"name":"Honeydew Melon","serving":{"g":"150","fruit":"1/6"}},{"name":"Jackfruit","serving":{"g":"87","ml":"125"}},{"name":"Java-Plum","serving":{"g":"60","fruits":"20"}},{"name":"Jujube Fruit","serving":{"g":"70","fruits":"5"}},{"name":"Kiwifruit","serving":{"g":"140","fruit":"2"}},{"name":"Kumquat","serving":{"g":"95","fruits":"5"}},{"name":"Lemon","serving":{"g":"55","fruit":"1"}},{"name":"Lime","serving":{"g":"55","fruit":"1"}},{"name":"Longan","serving":{"g":"64","fruits":"20"}},{"name":"Loquat","serving":{"g":"157","mL":"250"}},{"name":"Lychee","serving":{"g":"96","fruits":"10"}},{"name":"Mandarin","serving":{"g":"88","mediummandarin":"1"}},{"name":"Mango","serving":{"g":"140","fruit":"1/2"}},{"name":"Mangosteen","serving":{"g":"83","mL":"100"}},{"name":"Mulberries","serving":{"g":"74","ml":"125"}},{"name":"Nectarine","serving":{"g":"140","fruit":"1"}},{"name":"Olives","serving":{"g":"57","mL":"100"}},{"name":"Orange","serving":{"g":"140","fruit":"1"}},{"name":"Papaya","serving":{"g":"153","fruit":"1/2"}},{"name":"Passion Fruit","serving":{"g":"36","fruits":"2"}},{"name":"Peaches","serving":{"g":"140","fruit":"1"}},{"name":"Pear","serving":{"g":"140","fruit":"1"}},{"name":"Persimmon","serving":{"g":"168","fruit":"1"}},{"name":"Pitaya (Dragonfruit)","serving":{"cupscoopedflesh":"1/2","grams":"100"}},{"name":"Pineapple","serving":{"g":"140","mediumslices":"2"}},{"name":"Pitanga","serving":{"g":"73","mL":"100"}},{"name":"Plantain","serving":{"g":"81","mL":"125"}},{"name":"Plums","serving":{"g":"140","fruit":"1"}},{"name":"Pomegranate","serving":{"g":"77","fruit":"1/2"}},{"name":"Prickly Pear","serving":{"g":"103","fruit":"1"}},{"name":"Prunes","serving":{"g":"25","driedfruits":"3"}},{"name":"Pummelo","serving":{"g":"100","mL":"125"}},{"name":"Quince","serving":{"g":"92","fruit":"1"}},{"name":"Raspberries","serving":{"g":"80","cup":"1/2"}},{"name":"Rhubarb","serving":{"ml":"125","cup":"1/2"}},{"name":"Rose-Apple","serving":{"g":"100"}},{"name":"Sapodilla","serving":{"g":"85","fruit":"1/2"}},{"name":"Mamey Sapote","serving":{"g":"113","fruit":"1/2"}},{"name":"Soursop","serving":{"g":"119","mL":"125"}},{"name":"Strawberries","serving":{"g":"140","fruit":"7"}},{"name":"Sugar-Apple","serving":{"g":"106","mL":"100"}},{"name":"Tamarind","serving":{"g":"100"}},{"name":"Tangerine","serving":{"g":"140","fruit":"2"}},{"name":"Watermelon","serving":{"g":"150","fruit":"1/28","cupdiced":"1"}}]
    const veggieObjects=[{"name":"Amaranth Leaves","serving":{"g":"30","mL":"250"}},{"name":"Arrowroot","serving":{"g":"63","mL":"125"}},{"name":"Artichoke","serving":{"g":"128","Artichokes":"1"}},{"name":"Arugula","serving":{"g":"21","mL":"250"}},{"name":"Asparagus","serving":{"g":"85","spears":"10"}},{"name":"Bamboo Shoots","serving":{"g":"80","mL":"125"}},{"name":"Beans (Green)","serving":{"g":"85","beans":"20"}},{"name":"Beets","serving":{"g":"72","mL":"125"}},{"name":"Belgian Endive","serving":{"g":"95","mL":"250"}},{"name":"Bitter Melon*","serving":{"g":"53","mL":"125"}},{"name":"Bok Choy","serving":{"g":"90","mL":"125"}},{"name":"Broadbeans (Fava Beans)","serving":{"g":"80","mL":"125"}},{"name":"Broccoli","serving":{"g":"85","stalks":"1/2"}},{"name":"Broccoli Rabe","serving":{"cups":"2","g":"80"}},{"name":"Brussel Sprouts","serving":{"g":"76","sprouts":"4"}},{"name":"Cabbage (Green)","serving":{"g":"85","/12":"11"}},{"name":"Cabbage (Red)","serving":{"g":"37","mL":"125"}},{"name":"Carrot","serving":{"g":"85","Carrots":"1"}},{"name":"Cassava (Yuca Root)","serving":{"g":"109","mL":"125"}},{"name":"Cauliflower","serving":{"g":"85","Cauliflowers":"1/6"}},{"name":"Celeriac (Celery Root)","serving":{"g":"82","mL":"125"}},{"name":"Celery","serving":{"g":"85","stalk":"1"}},{"name":"Chayote*","serving":{"g":"70","mL":"125","cup":"1/2"}},{"name":"Chicory (Curly Endive)","serving":{"g":"30","mL":"250"}},{"name":"Collards","serving":{"g":"19","mL":"125"}},{"name":"Corn","serving":{"g":"85","Corns":"1"}},{"name":"Crookneck","serving":{"g":"69","mL":"125"}},{"name":"Cucumber","serving":{"g":"85","Cucumbers":"1/4"}},{"name":"Daikon","serving":{"g":"338","Daikons":"1"}},{"name":"Dandelion Greens","serving":{"g":"58","ml":"125"}},{"name":"Edamame (Soybeans)","serving":{"g":"135","mL":"125"}},{"name":"Eggplant","serving":{"g":"43","mL":"125"}},{"name":"Fennel","serving":{"g":"46","mL":"125"}},{"name":"Fiddleheads","serving":{"g":"61","mL":"125"}},{"name":"Ginger Root","serving":{"g":"41","cup":"1/2"}},{"name":"Horseradish","serving":{"g":"100"}},{"name":"Jicama","serving":{"g":"63","mL":"125"}},{"name":"Kale","serving":{"g":"71","mL":"250"}},{"name":"Kohlrabi","serving":{"g":"71","mL":"125"}},{"name":"Leeks","serving":{"g":"47","leeks":"1/2"}},{"name":"Lettuce (Iceberg)","serving":{"g":"85","cups":"2","head":"1/4"}},{"name":"Lettuce (Leaf)","serving":{"g":"85","cups":"2"}},{"name":"Lettuce (Romaine)","serving":{"g":"85","cups":"2"}},{"name":"Mushrooms","serving":{"g":"85","Mushroomss":"5"}},{"name":"Mustard Greens","serving":{"g":"59","mL":"250"}},{"name":"Okra","serving":{"g":"53","mL":"125"}},{"name":"Onion (Red)","serving":{"g":"85","Onion (Red)s":"1/2"}},{"name":"Onions","serving":{"g":"85","Onionss":"1/2"}},{"name":"Parsnip","serving":{"g":"70","mL":"125"}},{"name":"Peas (Green)","serving":{"g":"77","mL":"125"}},{"name":"Pepper (Green)","serving":{"g":"85","Pepper (Green)s":"1/2"}},{"name":"Pepper (Sweet Red)","serving":{"g":"85","Pepper (Sweet Red)s":"1/2"}},{"name":"Potato (Red)","serving":{"g":"79","mL":"125"}},{"name":"Potato (White)","serving":{"g":"110","Potato (White)s":"1"}},{"name":"Potato (Yellow)","serving":{"g":"167","Potato (Yellow)s":"1"}},{"name":"Pumpkin","serving":{"g":"61","mL":"125"}},{"name":"Radicchio","serving":{"g":"100"}},{"name":"Radishes","serving":{"g":"61","mL":"125"}},{"name":"Rutabaga","serving":{"g":"74","mL":"125"}},{"name":"Salsify (Oysterplant)","serving":{"g":"56","mL":"100"}},{"name":"Shallots","serving":{"g":"68","mL":"100"}},{"name":"Snow Peas","serving":{"g":"85","mL":"125"}},{"name":"Sorrel (Dock)","serving":{"g":"338","radish":"1"}},{"name":"Spaghetti Squash","serving":{"cup":"1"}},{"name":"Spinach","serving":{"g":"85","cups":"2"}},{"name":"Squash (Butternut)","serving":{"g":"85","Squash (Butternut)s":"1/12"}},{"name":"Sugar Snap Peas","serving":{"g":"100"}},{"name":"Sweet Potato","serving":{"g":"110","Sweet Potatos":"1/2"}},{"name":"Swiss Chard","serving":{"g":"93","mLboiled":"125"}},{"name":"Tomatillo*","serving":{"g":"70","mL":"125"}},{"name":"Tomato*","serving":{"g":"85","Tomato*s":"1/3"}},{"name":"Turnip","serving":{"mL":"125","cup":"1/2"}},{"name":"Watercress","serving":{"g":"36","mL":"250"}},{"name":"Yam Root","serving":{"g":"72","mL":"125"}},{"name":"Zucchini","serving":{"g":"85","Zucchinis":"1/2"}}]
    const [quantity, setQuanity] = useState(0)
    const [unit, setUnit] = useState('')
    const [fruitID,setFruitID] = useState(0)
    const [fruitList,setFruitList] = useState([])

    const iterAmts = ()=>{
        const amts = fruitObjects[fruitID].serving
        const myarr = []
        for (var key in amts){
            myarr.push(key)
        }
        return myarr
    }

    function handleAdd(e){
        e.preventDefault()
        const ref= app.database().ref(currUser.uid)
        ref.push({name: fruitObjects[fruitID].name,quantity: quantity,unit: unit,serving: quantity/fruitObjects[fruitID].serving[unit]})
        console.log(quantity/fruitObjects[fruitID].serving[unit])
    }
    function handleRemove(fruitToken){
        const ref= app.database().ref(currUser.uid+"/"+fruitToken)
        ref.remove()
    }

   

    useEffect(()=>{

        const ref = app.database().ref(currUser.uid)
        
        ref.on('value', (snapshot)=>{
            let items = snapshot.val()
            const listArr = []
            
            for (let item in items){
                listArr.push({
                    id: item,
                    name: items[item].name,
                    quantity: items[item].quantity,
                    unit: items[item].unit,
                    serving: items[item].serving,
                    
                })
            }

            setFruitList(listArr)

        })
    },[])


    

    return(
        <>
            {/* <BoardForm list={veggieObjects}/> */}
            <h1>Hello, {currUser.displayName}</h1>
            <Button onClick={signOut}>Sign Out</Button>
            <h3>Fruits</h3>
            
            <select id = 'chooseFruit' value = {fruitID} onChange = {(e)=>setFruitID(e.target.value)}>
                {fruitObjects.map((fruit, index)=>{
                    return(
                        <option key = {index} value = {index}>{fruit.name}</option>          
                    )
                })
                } 
            </select>
            
            <input onChange = {(e)=>setQuanity(e.target.value)} type="number" name="Quanitity" min="0"/>
            
            <select value = {unit} onChange = {(e)=>setUnit(e.target.value)}>  
                {iterAmts().map((u,index)=>{
                     return(<option key={index} value={u}>{u}</option>)
                })}
            </select>
        
            <Button onClick = {handleAdd}>Add</Button>
            <ul>
                {fruitList.map(fruit=>{
                    return (<li key={fruit.id}>{fruit.name} {fruit.quantity}{fruit.unit} servings:{fruit.serving}<Button variant="danger" onClick={()=>handleRemove(fruit.id)}>Remove</Button></li>)
                })
            }
                
            </ul>
            
        </>
    )
}
export default Dashboard