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
   
            // let allLabels=[]
            let dataSetA=[]
            let dataSetB=[]
            let dataSetC=[]
    
            const colors=["#f5be41","#CF3721","#31A9B8"]

            let c=0;
            const blankarr = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']

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
    },[])

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
                }
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
                  borderColor: "#f5be41",
                  borderWidth: 5,
                  borderDash:[25,5],
                  label:{
                    backgroundColor:"#f5be41",
                    color:"#ffffff",
                    content:"veg goal",
                    enabled:true
                }
                  
                },
                fruitLine:{
                    type: 'line',
                    yMin: 2,
                    yMax: 2,
                    borderColor: "#CF3721",
                    borderWidth: 5,
                    borderDash:[25,10],
                    label:{
                        backgroundColor:"#CF3721",
                        color:"#ffffff",
                        content:"fruit goal",
                        enabled:true
                    }

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
                        content:"dairy goal",
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
        <div style = {{textAlign: 'center', height: '85vh'}}>
            <MyNav dActive={false} sActive={true}/>
            <Bar data={activeBtn === 'b1'? dataA: (activeBtn ==='b2' ? dataB: dataC)} options={options} /> 
            <Button className = {activeBtn==='b1'? 'activeChartBtn': 'chartBtn'}   name = 'b1' onClick = {handleClick}>Today</Button> &nbsp;
            <Button className = {activeBtn==='b2'? 'activeChartBtn': 'chartBtn'} name = 'b2' onClick = {handleClick}>Past 7 days</Button>  &nbsp;
            <Button className = {activeBtn==='b3'? 'activeChartBtn': 'chartBtn'}  name = 'b3' onClick = {handleClick}>Past 30 days</Button> 
        </div>
    )

}


export default Summary