import React,{useState,useEffect,useContext} from 'react'
import {Button,Form,Row,Col} from 'react-bootstrap'
import { AuthContext } from '../contexts/AuthContext'
import {app} from './Firebase'
import '../style/dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

function BoardForm(props){
    const {currUser}= useContext(AuthContext)

    const items=props.list
    const d=new Date();
    const dString=d.getMonth()+1+"-"+d.getDate()+"-"+d.getFullYear();
    

    const [quantity, setQuantity]=useState(0)
    const [unit, setUnit] = useState('')
    const [itemIndex,setItemIndex] = useState(0)
    const [userList,setUserList]=useState([])
    // console.log(dString)
    const[currServ,setCurrServ]=useState(0)

    useEffect(()=>{

        // app.database().ref(currUser.uid+'/'+dString+'/fruitServ').on('value',snapshot=>{
        //     console.log(snapshot.val())
        //     setCurrServ(snapshot.val())
        // })
        // console.log(currServ)
        
        setUnit(Object.keys(items[itemIndex].serving)[0])//sets intial unit after component mounts
        const ref= app.database().ref(currUser.uid+"/"+dString+"/"+props.fireRef)
        ref.on('value',snapshot=>{
            const userItems= snapshot.val()
            let allItems=[]
            for(let item in userItems){
                allItems.push({
                    id:item,
                    name:userItems[item].name,
                    quantity:userItems[item].quantity,
                    unit:userItems[item].unit,
                    serving:userItems[item].serving
                })
            }
            setUserList(allItems)
        }) 

    },[currUser.uid, dString, itemIndex, items,props.fireRef,currServ])


useEffect(()=>{
    const myRef = app.database().ref(currUser.uid+ "/" + dString +"/"+ "TotalServs")
    myRef.once("value", snapshot=>{
        const items = snapshot.val()

        if(items===null){
            myRef.set({
                veg: 0,
                fruit: 0,
                dairy: 0
            })
        }
    })


},[])



    
    function handleAdd(e){
        console.log('handle add called')

        e.preventDefault()
        const ref= app.database().ref(currUser.uid+"/"+dString+"/"+props.fireRef)
        const currObject=items[itemIndex];
        const serving= Math.ceil(quantity/currObject.serving[unit]*100)/100
        makeTotalServs(serving)
        ref.push({name:currObject.name,quantity:quantity,unit:unit,serving:serving})

    }
    
    function handleRemove(item){
        const ref= app.database().ref(currUser.uid+"/"+dString+"/"+props.fireRef+"/"+item.id)
       
        ref.once("value", snapshot=>{
            const items = snapshot.val()
            makeTotalServs((-1*items['serving']))

        })

        ref.remove()
    }


    function makeTotalServs(addOn){
        const myRef = app.database().ref(currUser.uid+ "/" + dString +"/"+ "TotalServs")
        myRef.once("value", snapshot=>{
            const items = snapshot.val()
            var updatedTotalServs = items[props.fireRef]+addOn;
            myRef.update({[props.fireRef]: updatedTotalServs})

        })
    }




    return(
        <>
        {/* FORM SECTION */}
            <Form className="text-center mb-4">
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <select className="form-select" value={itemIndex} onChange={(e)=>{setItemIndex(e.target.value)}}>
                            {items.map((item,index)=>{
                                return <option value={index} key={index}>{item.name}</option>
                            })
                            }
                        </select>
                    </Form.Group>

                    <Form.Group as={Col}>  
                        <Form.Control  value={quantity} onChange={(e)=>setQuantity(e.target.value)} type="number" min="0"/>
                    </Form.Group>  

                    <Form.Group as={Col}>  
                        <select className="form-select" value={unit} onChange={(e)=>setUnit(e.target.value)}>
                            {Object.keys(items[itemIndex].serving).map((name,index)=>{
                                return <option value={name} key={index}>{name}</option>
                            })
                            }
                        </select>
                    </Form.Group>
                </Row>
                {unit&&<Button className="w-25" onClick = {handleAdd}>Add</Button>}
            </Form>
        {/* FORM SECTION */}
        <ul className={"itemList scroll "+props.fireRef+"List"}>
                {userList.map(item=>{
                    return (<li key={item.id}> 
                        <b>{item.name}</b>({item.quantity}{item.unit}): {item.serving} servings   <button className="deleteBtn" variant="danger" onClick={()=>handleRemove(item)}>
                        <FontAwesomeIcon icon={faMinus} /></button></li>
                        )
                })
            }
                
        </ul>
        {/* FORM SECTION */}
        </>
    )

}
export default BoardForm