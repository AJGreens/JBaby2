import React,{useEffect,useState,useContext} from 'react'
import MyNav from './MyNav'
import {app} from "./Firebase"
import { AuthContext} from '../contexts/AuthContext'
import {Bar} from 'react-chartjs-2'
import {Button} from 'react-bootstrap'
import { Chart } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import '../style/dashboard.css'

Chart.register(annotationPlugin);

function Summary(){
    const {currUser}=useContext(AuthContext)
    const [dataA,setDataA]=useState()
    const [dataB,setDataB]=useState()
    const [dataC,setDataC]=useState()
    const [activeBtn, setActiveBtn] = useState('b1')

 
    useEffect(()=>{
        const ref= app.database().ref(currUser.uid);
        let pastThirtyDays=[]
        let vfdArray = {veg:[],fruit:[],dairy:[]}
        ref.once('value',snapshot=>{
            const allDatesStored= snapshot.val()
            const d= new Date();
            d.setDate(d.getDate()-29)
            for(let i=29;i>=0;i--){
                const dString=d.getMonth()+1+"-"+d.getDate()+"-"+d.getFullYear();
                pastThirtyDays.push(dString)
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
                d.setDate(d.getDate()+1)
            }
   
            let dataSetA=[]
            let dataSetB=[]
            let dataSetC=[]

            const colors=["#FFDB5C","#5fd797","#4897D8"]
            

            let c=0;
            const blankarr = Array(30).fill('')

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
                    data: vfdArray[serv],
                    tension: 0.1
                })
                c++;
            }
            setDataA({
                labels: pastThirtyDays.slice(29,30),  
                datasets: dataSetA
            })
            setDataB({
                labels: pastThirtyDays.slice(23,30),
                datasets: dataSetB
            })
            setDataC({
                labels: blankarr,
                datasets: dataSetC
            })
        })
    },[currUser.uid])

    const options = {
        elements: {
            point:{
                radius: 0
            }
        },
        maintainAspectRatio: false,
        scales: {
            y: {
                title:{
                    display: true,
                    text: 'Servings'
                },
            }
        },
        plugins: {
            autocolors: false,
            annotation: {
              annotations: {
                vegLine: {
                  type: 'line',
                  yMin: 2.5,
                  yMax: 2.5,
                  borderColor: "#FFDB5C",
                  borderWidth: 5,
                  borderDash:[25,5],
                  label:{
                    backgroundColor:"#FFDB5C",
                    color:"#ffffff",
                    content:"veg goal",
                    enabled:true
                }
                  
                },
                fruitLine:{
                    type: 'line',
                    yMin: 2,
                    yMax: 2,
                    borderColor: "#5fd797",
                    borderWidth: 5,
                    borderDash:[25,10],
                    label:{
                        backgroundColor:"#5fd797",
                        color:"#ffffff",
                        content:"fruit goal",
                        enabled:true
                    }

                },
                dairyLine:{
                    type: 'line',
                    yMin: 3,
                    yMax: 3,
                    borderColor: "#4897D8",
                    borderWidth: 5,
                    borderDash:[25,15],
                    label:{
                        backgroundColor:"#4897D8",
                        color:"#ffffff",
                        content:"dairy goal",
                        enabled:true
                    }
                },
                invisibleLine:{
                    type: 'line',
                    yMin: 3.5,
                    yMax: 3.5,
                    borderColor: "rgba(255,255,255,0)",
                    borderWidth: 1,
                    borderDash:[25,15],
                    label:{
                        backgroundColor:"#4897D8",
                        color:"#ffffff",
                        enabled:true
                    }
                }
              }
            }
          }
      };



    function handleClick(e){
        setActiveBtn(e.target.name)
    }

    return(
        <div style = {{height:'85vh'}} >
            <MyNav dActive={false} sActive={true}/>
            <Bar data={activeBtn === 'b1'? dataA: (activeBtn ==='b2' ? dataB: dataC)} options={options} /> 
            <div className="chartButtons">
                <Button id = {activeBtn==='b1'? 'activeChartBtn': 'chartBtn'}  name = 'b1' onClick = {handleClick}>Today</Button> &nbsp;
                <Button id = {activeBtn==='b2'? 'activeChartBtn': 'chartBtn'}  name = 'b2' onClick = {handleClick}>Past 7 days</Button>  &nbsp;
                <Button id = {activeBtn==='b3'? 'activeChartBtn': 'chartBtn'}  name = 'b3' onClick = {handleClick}>Past 30 days</Button> 
            </div>
        </div>
    )

}


export default Summary