import React,{useEffect,useState,useContext} from 'react'
import MyNav from './MyNav'
import {app} from "./Firebase"
import { AuthContext} from '../contexts/AuthContext'
import {Bar} from 'react-chartjs-2'
import {Button} from 'react-bootstrap'
import { Chart } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);


function Summary(){
    const {currUser}=useContext(AuthContext)
    const [dataFinal,setdataFinal]=useState()
    const [dataA,setDataA]=useState()
    const [dataB,setDataB]=useState()
    const [dataC,setDataC]=useState()
    const today = new Date();
    const todayString=today.getMonth()+1+"-"+today.getDate()+"-"+today.getFullYear();
    const [dayCount, setDayCount] = useState(6)
    const [loading, setLoading] = useState(true)

 
    useEffect(()=>{
        setLoading(true)
        const ref= app.database().ref(currUser.uid);
        let pastSixDays=[]
        let vfdArray = {veg:[],fruit:[],dairy:[]}
        ref.once('value',snapshot=>{
            const allDatesStored= snapshot.val()
            for(let i=29;i>=0;i--){
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
            let dataSetA=[]
            let dataSetB=[]
            let dataSetC=[]
    
            const colors=["#f5be41","#CF3721","#31A9B8"]
            let c=0;
            // dayCount===29? colors[c]:

            for(let serv in vfdArray){
                dataSetA.push({             //1 day DataSet
                    type: 'bar',
                    label: serv,
                    backgroundColor: colors[c],
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: vfdArray[serv].slice(29,30)
                })
                dataSetB.push({               //7 day DataSet
                    type: 'bar',
                    label: serv,
                    backgroundColor: colors[c],
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: vfdArray[serv].slice(23,30)
                })
                dataSetC.push({               //30 day DataSet
                    type: 'line',
                    label: serv,
                    backgroundColor: colors[c],
                    borderColor: colors[c],
                    borderWidth: 2,
                    data: vfdArray[serv]
                })
                c++;
            }
            setDataA({
                labels: pastSixDays.slice(29,30),  //pastSixDays is really past thirty days
                datasets: dataSetA
            })
            setDataB({
                labels: pastSixDays.slice(23,30),
                datasets: dataSetB
            })
            setDataC({
                labels: pastSixDays,
                datasets: dataSetC
            })

            setdataFinal({labels: pastSixDays.slice(29,30),  //pastSixDays is really past thirty days
                datasets: dataSetA})
            console.log('finally loaded')
            setLoading(false)

        })
        },[])






    const options = {
        elements: {
            point:{
                radius: 0
            }
        },
        // animation: {
        //     duration: loading?1000:1000
        // },
        plugins: {
            autocolors: false,
            title: {
                display: true,
                text: 'Custom Chart Title'
            },
            annotation: {
              annotations: {
                vegLine: {
                  type: 'line',
                  yMin: 2.5,
                  yMax: 2.5,
                  borderColor: "#f5be41",
                  borderWidth: 5,
                  borderDash:[25,5],
                  
                },
                fruitLine:{
                    type: 'line',
                    yMin: 2,
                    yMax: 2,
                    borderColor: "#CF3721",
                    borderWidth: 5,
                    borderDash:[25,10]

                },
                dairyLine:{
                    type: 'line',
                    yMin: 3,
                    yMax: 3,
                    borderColor: "#31A9B8",
                    borderWidth: 5,
                    borderDash:[25,15],
                    label:{
                        backgroundColor:"#31A9B8",
                        color:"#ffffff",
                        content:"dairy guide",
                        enabled:true
                    }
                }
              }
            }
          }
      };


  return(
        <div style = {{textAlign: 'center'}}>
            <MyNav dActive={false} sActive={true}/>

            <Bar data={dataFinal} options={options} /> 

<Button onClick = {()=>setdataFinal(dataA)}>Today</Button> 
 <Button onClick = {()=>setdataFinal(dataB)}>Past 7 days</Button> 
 <Button onClick = {()=>setdataFinal(dataC)}>Past 30 days</Button> 



            {/* <Button onClick = {()=>setDayCount(0)}>Today</Button> 
            <Button onClick = {()=>setDayCount(6)}>Past 7 days</Button>
            <Button onClick = {()=>setDayCount(29)}>Past 30 days</Button> */}
        </div>

    )






}


export default Summary