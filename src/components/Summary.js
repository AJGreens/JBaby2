import React,{useEffect,useState,useContext} from 'react'
import MyNav from './MyNav'
import {app} from "./Firebase"
import { AuthContext} from '../contexts/AuthContext'
import {Bar} from 'react-chartjs-2'
import {Button} from 'react-bootstrap'

function Summary(){
    const {currUser}=useContext(AuthContext)

    const [dateList,setDateList]= useState([])
    const [servState,setServState]=useState()
    const today = new Date();
    const [show,setShow]=useState(false)
    const todayString=today.getMonth()+1+"-"+today.getDate()+"-"+today.getFullYear();
    const [dayCount, setDayCount] = useState(6)





 
    useEffect(()=>{
        const ref= app.database().ref(currUser.uid);

        let pastSixDays=[]
        let vfdArray = {veg:[],fruit:[],dairy:[]}
        ref.on('value',snapshot=>{
            const allDatesStored= snapshot.val()
            for(let i=dayCount;i>=0;i--){
                const d= new Date();
                d.setDate(d.getDate()-i)
                const dString=d.getMonth()+1+"-"+d.getDate()+"-"+d.getFullYear();
                pastSixDays.push(dString)

                if(allDatesStored[dString]){
                    const storedVFD=allDatesStored[dString]["TotalServs"];
                    for(let serv in storedVFD){
                        vfdArray[serv].push(parseFloat(storedVFD[serv]))
                    }
                }
                else{
                    vfdArray["veg"].push(0)
                    vfdArray["fruit"].push(0)
                    vfdArray["dairy"].push(0)
                }
                
            }
            let allLabels=[]
            const colors=["#f5be41","#CF3721","#31A9B8"]
            let c=0;
            for(let serv in vfdArray){
                allLabels.push({
                    type: dayCount===30? 'line': 'bar',
                    label: serv,
                    backgroundColor: colors[c],
                    borderColor: dayCount===30? colors[c]:'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: vfdArray[serv],
                    plugins: {
                    annotation: {
                        annotations: [{
                            type: 'line',
                            mode: 'horizontal',
                            scaleID: 'y-axis-0',
                            value: '26',
                            borderColor: 'tomato',
                            borderWidth: 1
                        }],
                        drawTime: "afterDraw" // (default)
                    }
                }
                })
                c++;
            }
            allLabels.push({
                type: 'line',
                label: 'Line Dataset',
                data: [2, 2, 2, 2, 2, 2, 2],
                pointRadius:0,
                borderColor:colors[0],
                borderDash:[25, 25],

            })

            setServState({
                labels: pastSixDays,
                datasets: allLabels
            })

        })


    },[dayCount])

    


    return(
        <div style = {{textAlign: 'center'}}>
            <MyNav dActive={false} sActive={true}/>
            <Bar data={servState} options={{
       legend: {
         display: false
       },
       scales: {
         yAxes: [{
           ticks: {
              max: 40,
              min: 0,
              stepSize: 3
            }
          }]
         },
        title: {
         display: true,
         text: "hello"
        }
     }}/>
            <Button onClick = {()=>setDayCount(0)}>Today</Button> 
            <Button onClick = {()=>setDayCount(6)}>Past 7 days</Button>
            <Button onClick = {()=>setDayCount(30)}>Past 30 days</Button>
        </div>






    )




}


export default Summary