import React,{useState,useEffect,useContext} from 'react'
import {Button} from 'react-bootstrap'
import { AuthContext } from '../contexts/AuthContext'
import {app} from './Firebase'

function BoardForm(props){
    const {currUser}= useContext(AuthContext)

    const items=props.list

    const [quantity, setQuantity]=useState(0)
    const [unit, setUnit] = useState('')
    const [itemIndex,setItemIndex] = useState(0)

    const [userList,setUserList]=useState([])
    

    useEffect(()=>{
        setUnit(Object.keys(items[itemIndex].serving)[0])//sets intial unit after component mounts
        const ref= app.database().ref(currUser.uid)
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



    },[])
    
    function handleAdd(e){
        e.preventDefault()
        const ref= app.database().ref(currUser.uid)
        const currObject=items[itemIndex];
        const serving= Math.ceil(quantity/currObject.serving[unit]*100)/100
        ref.push({name:currObject.name,quantity:quantity,unit:unit,serving:serving})
    }
    
    function handleRemove(itemToken){
        const ref= app.database().ref(currUser.uid+"/"+itemToken)
        ref.remove()
    }

    return(
        <>
        {/* FORM SECTION */}
            <select value={itemIndex} onChange={(e)=>{setItemIndex(e.target.value)}}>
                {items.map((item,index)=>{
                    return <option value={index} key={index}>{item.name}</option>
                })
                }
            </select>

            <input value={quantity} onChange={(e)=>setQuantity(e.target.value)} type="number" min="0"/>
            
            <select value={unit} onChange={(e)=>setUnit(e.target.value)}>
                {Object.keys(items[itemIndex].serving).map((name,index)=>{
                    return <option value={name} key={index}>{name}</option>
                })
                }
            </select>
            
            {unit&&<Button onClick = {handleAdd}>Add</Button>}
        {/* FORM SECTION */}
        <ul>
                {userList.map(item=>{
                    return (<li key={item.id}>{item.name} {item.quantity}{item.unit} servings:{item.serving}<Button variant="danger" onClick={()=>handleRemove(item.id)}>Remove</Button></li>)
                })
            }
                
        </ul>
        </>
    )

}
export default BoardForm