import React,{useEffect,useState,useContext} from 'react'
import MyNav from './MyNav'
import {app} from "./Firebase"
import { AuthContext} from '../contexts/AuthContext'
import {Bar} from 'react-chartjs-2'

function Summary(){
    const {currUser}=useContext(AuthContext)

    const [dateList,setDateList]= useState([])
    const [servState,setServState]=useState({})

    const d=new Date();
    const dString=d.getMonth()+1+"-"+d.getDate()+"-"+d.getFullYear();

    
    useEffect(()=>{

        const myRef = app.database().ref(currUser.uid)

        myRef.on('value', snapshot=>{
            const allDates=snapshot.val()
            let tempList=[]
            for(let date in allDates){
                tempList.push(date)
            }
            setDateList(tempList)
        })
        
    }
    ,[currUser.uid])

    console.log(servState)

    useEffect(()=>{
        const ref= app.database().ref(currUser.uid+"/"+dString+"/TotalServs")
        ref.on('value',snapshot=>{
            const allServs= snapshot.val()

            let allLabelObjects=[]

            for (var serv in allServs){
                console.log(serv)
                console.log(parseFloat(allServs[serv]))
                const oneLabel={
                    label: serv,
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [parseFloat(allServs[serv])]
                }
                allLabelObjects.push(oneLabel)
            }
            const state = {
                labels: [dString],//date
                datasets: allLabelObjects
              }
            setServState(state)

        })
    },[])




    


    return(
        <>
            <MyNav dActive={false} sActive={true}/>
            <h1> this is the summary page</h1>
            <p>
                <ul>
                    {dateList.map(item=>{
                        return <li>{item}</li>
                    })
                }
                </ul>
            </p>
            <Bar 
                data={servState} 
                options={{
                    title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                }}
            />
        </>






    )




}


export default Summary