import React, { useEffect,useContext } from 'react'
import {Col,Row,Container} from 'react-bootstrap'
import BoardForm from './BoardForm'
import '../style/dashboard.css'
import MyNav from './MyNav'
import { AuthContext } from '../contexts/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot,faAppleAlt,faCheese } from '@fortawesome/free-solid-svg-icons'
import {app} from './Firebase'

 
function Dashboard(){
    const{currUser}=useContext(AuthContext)

    const d=new Date();
    const dString=d.getMonth()+1+"-"+d.getDate()+"-"+d.getFullYear();

    
    const fruitObjects=[{"name":"Apple","serving":{"Apples":"1","g":"140"}},{"name":"Apricots","serving":{"Apricots":"3","g":"105"}},{"name":"Avocado","serving":{"Avocados":"0.2","g":"130"}},{"name":"Banana","serving":{"Bananas":"1","g":"140"}},{"name":"Barbados Cherry","serving":{"Cherries":"1","g":"5"}},{"name":"Blackberries","serving":{"cup":"1"}},{"name":"Blackcurrant","serving":{"g":"59","ml":"125"}},{"name":"Blueberries","serving":{"cup":"0.5","g":"80"}},{"name":"Breadfruit","serving":{"Breadfruit":"0.25","g":"96"}},{"name":"Cantaloupe","serving":{"Cantaloupes":"0.25","g":"150"}},{"name":"Carambola","serving":{"Carambolas":"1","g":"89"}},{"name":"Cherimoya","serving":{"Cherimoya":"1","g":"312"}},{"name":"Cherries","serving":{"Cherries":"21","cup":"1","g":"140"}},{"name":"Clementine","serving":{"Clementines":"1","g":"74"}},{"name":"Coconut Meat","serving":{"g":"100"}},{"name":"Cranberries","serving":{"cup":"1"}},{"name":"Custard-Apple","serving":{"Custard-Apples":"0.5","g":"120"}},{"name":"Date Fruit","serving":{"g":"94","mL":"125"}},{"name":"Durian","serving":{"g":"128","mL":"125"}},{"name":"Elderberries","serving":{"g":"77","ml":"125"}},{"name":"Feijoa","serving":{"Feijoas":"2","g":"100"}},{"name":"Figs","serving":{"Figs":"2","g":"100"}},{"name":"Gooseberries","serving":{"g":"79","ml":"125"}},{"name":"Grapefruit","serving":{"Grapefruits":"0.5","g":"140"}},{"name":"Grapes","serving":{"Grapes":"21","cup":"1","g":"140"}},{"name":"Guava","serving":{"Guavas":"1","g":"90"}},{"name":"Honeydew Melon","serving":{"Honeydew Melons":"0.17","g":"150"}},{"name":"Jackfruit","serving":{"g":"87","ml":"125"}},{"name":"Java-Plum","serving":{"Java-Plum":"20","g":"60"}},{"name":"Jujube","serving":{"Jujubes":"5","g":"70"}},{"name":"Kiwi","serving":{"Kiwis":"2","g":"140"}},{"name":"Kumquat","serving":{"Kumquats":"5","g":"95"}},{"name":"Lemon","serving":{"Lemons":"1","g":"55"}},{"name":"Lime","serving":{"Limes":"1","g":"55"}},{"name":"Longan","serving":{"Longans":"20","g":"64"}},{"name":"Loquat","serving":{"g":"157","mL":"250"}},{"name":"Lychee","serving":{"Lychees":"10","g":"96"}},{"name":"Mandarin","serving":{"Mandarins":"1","g":"88"}},{"name":"Mango","serving":{"Mangos":"0.5","g":"140"}},{"name":"Mangosteen","serving":{"g":"83","mL":"100"}},{"name":"Mulberries","serving":{"g":"74","ml":"125"}},{"name":"Nectarine","serving":{"g":"140","Nectarines":"1"}},{"name":"Olives","serving":{"g":"57","mL":"100"}},{"name":"Orange","serving":{"Oranges":"1","g":"140"}},{"name":"Papaya","serving":{"Papayas":"0.5","g":"153"}},{"name":"Passion Fruit","serving":{"Passion Fruits":"2","g":"36"}},{"name":"Peaches","serving":{"Peaches":"1","g":"140"}},{"name":"Pear","serving":{"Pear":"1","g":"140"}},{"name":"Persimmon","serving":{"Persimmon":"1","g":"168"}},{"name":"Dragonfruit","serving":{"cups":"0.5","grams":"100"}},{"name":"Pineapple","serving":{"slices":"2","g":"140"}},{"name":"Pitanga","serving":{"g":"73","mL":"100"}},{"name":"Plantain","serving":{"g":"81","mL":"125"}},{"name":"Plums","serving":{"Plums":"1","g":"140"}},{"name":"Pomegranate","serving":{"Pomegranate":"0.5","g":"77"}},{"name":"Prickly Pear","serving":{"Prickly Pears":"1","g":"103"}},{"name":"Prunes","serving":{"Prunes":"3","g":"25"}},{"name":"Pummelo","serving":{"g":"100","mL":"125"}},{"name":"Quince","serving":{"Quinces":"1","g":"92"}},{"name":"Raspberries","serving":{"cup":"0.5","g":"80"}},{"name":"Rhubarb","serving":{"cup":"0.5","ml":"125"}},{"name":"Rose-Apple","serving":{"g":"100"}},{"name":"Sapodilla","serving":{"Sapodilla":"0.5","g":"85"}},{"name":"Mamey Sapote","serving":{"Mamey Sapote":"0.5","g":"113"}},{"name":"Soursop","serving":{"g":"119","mL":"125"}},{"name":"Strawberries","serving":{"Strawberries":"7","g":"140"}},{"name":"Sugar-Apple","serving":{"g":"106","mL":"100"}},{"name":"Tamarind","serving":{"g":"100"}},{"name":"Tangerine","serving":{"Tangerines":"2","g":"140"}},{"name":"Watermelon","serving":{"Watermelons":"0.04","cups":"1","g":"150"}}]
    const veggieObjects=[{"name":"Amaranth Leaves","serving":{"g":"30","mL":"250"}},{"name":"Arrowroot","serving":{"g":"63","mL":"125"}},{"name":"Artichoke","serving":{"Artichokes":"1","g":"128"}},{"name":"Arugula","serving":{"g":"21","mL":"250"}},{"name":"Asparagus","serving":{"spears":"10","g":"85"}},{"name":"Bamboo Shoots","serving":{"g":"80","mL":"125"}},{"name":"Beans (Green)","serving":{"beans":"20","g":"85"}},{"name":"Beets","serving":{"g":"72","mL":"125"}},{"name":"Belgian Endive","serving":{"g":"95","mL":"250"}},{"name":"Bitter Melon*","serving":{"g":"53","mL":"125"}},{"name":"Bok Choy","serving":{"g":"90","mL":"125"}},{"name":"Broadbeans (Fava Beans)","serving":{"g":"80","mL":"125"}},{"name":"Broccoli","serving":{"stalks":"0.5","g":"85"}},{"name":"Broccoli Rabe","serving":{"cups":"2","g":"80"}},{"name":"Brussel Sprouts","serving":{"sprouts":"4","g":"76"}},{"name":"Cabbage (Green)","serving":{"Cabbages":"0.92","g":"85"}},{"name":"Cabbage (Red)","serving":{"g":"37","mL":"125"}},{"name":"Carrot","serving":{"Carrots":"1","g":"85"}},{"name":"Cassava (Yuca Root)","serving":{"g":"109","mL":"125"}},{"name":"Cauliflower","serving":{"Cauliflowers":"0.17","g":"85"}},{"name":"Celeriac (Celery Root)","serving":{"g":"82","mL":"125"}},{"name":"Celery","serving":{"stalk":"1","g":"85"}},{"name":"Chayote*","serving":{"cup":"0.5","g":"70","mL":"125"}},{"name":"Chicory (Curly Endive)","serving":{"g":"30","mL":"250"}},{"name":"Collards","serving":{"g":"19","mL":"125"}},{"name":"Corn","serving":{"Corns":"1","g":"85"}},{"name":"Crookneck","serving":{"g":"69","mL":"125"}},{"name":"Cucumber","serving":{"Cucumbers":"0.25","g":"85"}},{"name":"Daikon","serving":{"Daikons":"1","g":"338"}},{"name":"Dandelion Greens","serving":{"g":"58","ml":"125"}},{"name":"Edamame (Soybeans)","serving":{"g":"135","mL":"125"}},{"name":"Eggplant","serving":{"g":"43","mL":"125"}},{"name":"Fennel","serving":{"g":"46","mL":"125"}},{"name":"Fiddleheads","serving":{"g":"61","mL":"125"}},{"name":"Ginger Root","serving":{"cup":"0.5","g":"41"}},{"name":"Horseradish","serving":{"g":"100"}},{"name":"Jicama","serving":{"g":"63","mL":"125"}},{"name":"Kale","serving":{"g":"71","mL":"250"}},{"name":"Kohlrabi","serving":{"g":"71","mL":"125"}},{"name":"Leeks","serving":{"leeks":"0.5","g":"47"}},{"name":"Lettuce (Iceberg)","serving":{"head":"0.25","cups":"2","g":"85"}},{"name":"Lettuce (Leaf)","serving":{"cups":"2","g":"85"}},{"name":"Lettuce (Romaine)","serving":{"cups":"2","g":"85"}},{"name":"Mushrooms","serving":{"Mushrooms":"5","g":"85"}},{"name":"Mustard Greens","serving":{"g":"59","mL":"250"}},{"name":"Okra","serving":{"g":"53","mL":"125"}},{"name":"Onion (Red)","serving":{"Red Onions":"0.5","g":"85"}},{"name":"Onions","serving":{"Onions":"0.5","g":"85"}},{"name":"Parsnip","serving":{"g":"70","mL":"125"}},{"name":"Peas (Green)","serving":{"g":"77","mL":"125"}},{"name":"Pepper (Green)","serving":{"Green Peppers":"0.5","g":"85"}},{"name":"Pepper (Sweet Red)","serving":{"Sweet Red Peppers":"0.5","g":"85"}},{"name":"Potato (Red)","serving":{"g":"79","mL":"125"}},{"name":"Potato (White)","serving":{"White Potatos":"1","g":"110"}},{"name":"Potato (Yellow)","serving":{"Yellow Potatos":"1","g":"167"}},{"name":"Pumpkin","serving":{"g":"61","mL":"125"}},{"name":"Radicchio","serving":{"g":"100"}},{"name":"Radishes","serving":{"g":"61","mL":"125"}},{"name":"Rutabaga","serving":{"g":"74","mL":"125"}},{"name":"Salsify (Oysterplant)","serving":{"g":"56","mL":"100"}},{"name":"Shallots","serving":{"g":"68","mL":"100"}},{"name":"Snow Peas","serving":{"g":"85","mL":"125"}},{"name":"Sorrel (Dock)","serving":{"g":"338","radish":"1"}},{"name":"Spaghetti Squash","serving":{"cup":"1"}},{"name":"Spinach","serving":{"cups":"2","g":"85"}},{"name":"Squash (Butternut)","serving":{"Butternut Squashs":"0.084","g":"85"}},{"name":"Sugar Snap Peas","serving":{"g":"100"}},{"name":"Sweet Potato","serving":{"Sweet Potatos":"0.5","g":"110"}},{"name":"Swiss Chard","serving":{"g":"93","mL":"125"}},{"name":"Tomatillo*","serving":{"g":"70","mL":"125"}},{"name":"Tomato*","serving":{"Tomato*s":"0.34","g":"85"}},{"name":"Turnip","serving":{"cup":"0.5","mL":"125"}},{"name":"Watercress","serving":{"g":"36","mL":"250"}},{"name":"Yam Root","serving":{"g":"72","mL":"125"}},{"name":"Zucchini","serving":{"Zucchinis":"0.5","g":"85"}}]
    const dairyObjects=[{"name":"Cheese","serving":{"slices":"1","dice":"3.5","oz":"1.5"}},{"name":"Milk","serving":{"cups":"1","oz":"8"}},{"name":"Yogurt","serving":{"cups":".75","oz":"6"}}]

    useEffect(()=>{
        console.log(currUser)
        const dateRef= app.database().ref(currUser.uid+'/LastLogIn')
        dateRef.once('value',snapshot=>{
            const val=snapshot.val()
            if(val==null){
                dateRef.set({"date":dString})
            }
            else{
                if(dString!==val.date){
                    const ref= app.database().ref(currUser.uid+"/"+val.date+"/Lists")
                    ref.remove()
                    dateRef.update({"date":dString})
                }
            }
        })
    },[currUser,dString])

    return(
        <>
        <MyNav dActive={true} sActive={false}/>
        <Container fluid className="foodGroups text-center">
            <Row>
                    <Col className="foodGroup veg"  md={12} lg={4}>
                        <div className="clouds v">
                            <h2>Veggies <FontAwesomeIcon style= {{color: '#FFDB5C'}}icon={faCarrot} /></h2>
                            <BoardForm list={veggieObjects} fireRef="veg" idealserv = '2.5' />
                        </div>
                    </Col>
                    <Col className="foodGroup fruit"  md={12} lg={4}>
                        <div className="clouds f">
                            <h2>Fruits <FontAwesomeIcon style= {{color: '#5fd797'}}icon={faAppleAlt} /></h2>
                            <BoardForm list={fruitObjects} fireRef="fruit" idealserv = '2.00'/>
                        </div>
                    </Col>
                    <Col className="foodGroup dairy"  md={12} lg={4}>
                        <div className="clouds d">
                            <h2>Dairy <FontAwesomeIcon style= {{color: '#4897D8'}}icon={faCheese}/></h2>
                            <BoardForm list={dairyObjects} fireRef="dairy" idealserv = '3.00'/>
                        </div>
                    </Col>
            </Row>
       
        </Container>
            
        </>
    )
}
export default Dashboard