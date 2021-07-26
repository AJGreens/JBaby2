import React,{useEffect,useState,useContext} from 'react'
import MyNav from './MyNav'
import {app} from "./Firebase"
import { AuthContext} from '../contexts/AuthContext'

function Summary(){
    const {currUser}=useContext(AuthContext)
    const [list,setList]= useState([])

    
    useEffect(()=>{

        const myRef = app.database().ref(currUser.uid)

        myRef.on('value', snapshot=>{
            const allDates=snapshot.val()
            console.log(allDates)
            let tempList=[]
            for(let date in allDates){
                console.log(allDates[date]["veg"])
                tempList.push(date)
            }
            
            setList(tempList)

        })

        
    }
    ,[])




    


    return(
        <>
            <MyNav/>
            <h1> this is the summary page</h1>
            <p>
                <ul>
                    {list.map(item=>{
                        return <li>{item}</li>
                    })
                }
                </ul>
            </p>
        </>






    )




}


export default Summary