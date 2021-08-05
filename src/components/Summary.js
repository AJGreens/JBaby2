import React,{useEffect,useState,useContext} from 'react'
import MyNav from './MyNav'
import {app} from "./Firebase"
import { AuthContext} from '../contexts/AuthContext'
import {Bar, Line} from 'react-chartjs-2'
import {Button} from 'react-bootstrap'
import 'chartjs-plugin-annotation';

function Summary(){
    const {currUser}=useContext(AuthContext)

    const [servState,setServState]=useState()
    const [dayCount, setDayCount] = useState(6)
    const [loading, setLoading] = useState(true)
    let [vfdLg, setVfdLg] = useState({veg:[],fruit:[],dairy:[]})
    let [vfdMed, setVfdMed] = useState({veg:[],fruit:[],dairy:[]})
    let [vfdSm, setVfdSm] = useState({veg:[],fruit:[],dairy:[]})
    let [dates, setDates] = useState([])

    let [bigData, setBigData] = useState([])
    let [medData, setMedData] = useState([])
    let [smData, setSmData] = useState([])


    useEffect(()=>{
        console.log('useEffectin Summary')
        let vfdArray = {veg:[],fruit:[],dairy:[]}
        const ref = app.database().ref(currUser.uid)
        ref.once("value", snapshot=>{
            const userDates = snapshot.val()
 
            const allDates = []
        const d = new Date()
        d.setDate(d.getDate()-29)
        for (let i =0; i<30; i++){
            const dString =  d.getMonth()+1+"-"+d.getDate()+"-"+d.getFullYear();
            allDates.push(dString)

            if (userDates[dString]){
                vfdArray["veg"].push(userDates[dString]["TotalServs"]["veg"])
                vfdArray["fruit"].push(userDates[dString]["TotalServs"]["fruit"])
                vfdArray["dairy"].push(userDates[dString]["TotalServs"]["dairy"])
            }
            else {
                vfdArray["veg"].push(0)
                vfdArray["fruit"].push(0)
                vfdArray["dairy"].push(0)

            }
            d.setDate(d.getDate()+1)
        }
        setDates(allDates)
        setVfdLg(vfdArray)
        console.log(vfdArray)

        const medveg = vfdArray["veg"].slice(23,30)
        const medfruit = vfdArray["fruit"].slice(23,30)
        const meddairy = vfdArray["dairy"].slice(23,30)

        let vfdMedium = {"veg": medveg, "fruit": medfruit, "dairy": meddairy}
        console.log("med: " + vfdMedium["fruit"])
        setVfdMed(vfdMedium)

        const smveg = vfdArray["veg"].slice(29,30)
        const smfruit = vfdArray["fruit"].slice(29,30)
        const smdairy = vfdArray["dairy"].slice(29,30)

        let vfdSmall = {"veg": smveg, "fruit": smfruit, "dairy": smdairy}
        console.log("sm: " + vfdSmall["fruit"])
        setVfdSm(vfdSmall)




const colors=["#f5be41","#CF3721","#31A9B8"]

let c=0;
let SmLabels=[]
    for(let serv in vfdSmall){
    SmLabels.push({
        // type: 'bar',
        label: serv,
        backgroundColor: colors[c],
        borderColor: colors[c],
        // borderColor: dayCount===29? colors[c]:'rgba(0,0,0,1)',
        borderWidth: 2,
        data: vfdSmall[serv],
        fill: false
     
    })
    c++;
}
setSmData(SmLabels)

c=0;
let MedLabels=[]
console.log("day count is 6")
for(let serv in vfdMedium){
    console.log('dataMed' + vfdMedium[serv])
    MedLabels.push({
        // type: 'bar',
        label: serv,
        backgroundColor: colors[c],
        borderColor: colors[c],
        // borderColor: dayCount===29? colors[c]:'rgba(0,0,0,1)',
        borderWidth: 2,
        data: vfdMed[serv],
        fill: false
     
    })
    c++;
}
setMedData(MedLabels)

c=0;
let LgLabels=[]
for(let serv in vfdArray){
    console.log('dataLg' + vfdArray[serv])
    LgLabels.push({
        // type: 'bar',
        label: serv,
        backgroundColor: colors[c],
        borderColor: colors[c],
        // borderColor: dayCount===29? colors[c]:'rgba(0,0,0,1)',
        borderWidth: 2,
        data: vfdLg[serv],
        fill: false
     
    })
    c++;
}
setBigData(LgLabels)
setLoading(false)
    })

    },[])





    // useEffect(()=>{
    //     setLoading(true)
    //     const ref= app.database().ref(currUser.uid);

    //     let pastSixDays=[]
    //     let vfdArray = {veg:[],fruit:[],dairy:[]}
    //     let vfdGuide={veg:[],fruit:[],dairy:[]}
    //     ref.once('value',snapshot=>{
    //         const allDatesStored= snapshot.val()
    //         for(let i=dayCount;i>=0;i--){
    //             const d= new Date();
    //             d.setDate(d.getDate()-i)
    //             const dString=d.getMonth()+1+"-"+d.getDate()+"-"+d.getFullYear();
    //             pastSixDays.push(dString)
    //             // vfdGuide["veg"].push(2.5)
    //             // vfdGuide["fruit"].push(2)
    //             // vfdGuide["dairy"].push(3)
    //             if(allDatesStored[dString]){
    //                 const storedVFD=allDatesStored[dString]["TotalServs"];
    //                 for(let serv in storedVFD){
    //                     vfdArray[serv].push(parseFloat(storedVFD[serv]))
                        
    //                 }
    //             }
    //             else{         
    //                 vfdArray["veg"].push(0)
    //                 vfdArray["fruit"].push(0)
    //                 vfdArray["dairy"].push(0)
    //             }
                
    //         }
    //         let allLabels=[]
    //         const colors=["#f5be41","#CF3721","#31A9B8"]
    //         let c=0;
    //         for(let serv in vfdArray){
    //             allLabels.push({
    //                 // type: 'bar',
    //                 label: serv,
    //                 backgroundColor: colors[c],
    //                 borderColor: colors[c],
    //                 // borderColor: dayCount===29? colors[c]:'rgba(0,0,0,1)',
    //                 borderWidth: 2,
    //                 data: vfdArray[serv],
    //                 fill: false
                 
    //             })
    //             c++;
    //         }


    //         setServState({
    //             labels: pastSixDays,
    //             datasets: allLabels,
                
                
    //         })

    //         setLoading(false)
    //     })

    // },[dayCount])


  
      const myOptions = {title: {
        display: true,
        text: 'Servings Summary'
      },
      elements: {
        point:{
            radius: 0
        }
    },
    //   responsive:true,
      maintainAspectRatio: false,


      animation: {
        duration: 1000,
        easing: 'linear'
    },

    annotation: {
        annotations: [
            {
                type: "line",
                mode: "horizontal",
                scaleID: "y-axis-0",
                value: `2.5`,
                borderColor: "#f5be41",
                borderWidth: 2,
                borderDash:[30, 5],
                label: {
                    backgroundColor: "#f5be41",
                    content: "Ideal Veg",
                    enabled: true
                }
            },

            {
              type: "line",
              mode: "horizontal",
              scaleID: "y-axis-0",
              value: `2`,
              borderColor: "#CF3721",
              borderWidth: 2,
              borderDash:[30, 5],
              label: {                            
                  backgroundColor: "#CF3721",
                  content: "Ideal Fruit",
                  enabled: true
              }
          },

          {
              type: "line",
              mode: "horizontal",
              scaleID: "y-axis-0",
              value: `3`,
              borderColor: "#31A9B8",
              borderWidth: 2,
              borderDash:[30, 5],
              label: {                                 
                  backgroundColor: "#31A9B8",
                  content: "Ideal Dairy",
                  enabled: true
              }
          }
         ]
    },

    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Servings'
        }
      }],
      xAxes: [{
          
          ticks: {
            //   display: dayCount ===29? false: true
            display: true
          }
      }],

      }

    }




    
  


if (!loading) return(
    

        <div style = {{textAlign: 'center', height: '85vh',  border: 'red solid 0px'}}>
            <MyNav dActive={false} sActive={true}/>

            {/* <Bar data={servState} options = {myOptions}/> */}

        

        {dayCount!==29?
        
             <Bar data={dayCount ===6? {
                labels: dates.slice(23,30),
                datasets: medData,
        } : {
            labels: dates.slice(29,30),
            datasets: smData,
    }} options = {myOptions}/>:
            <Line data={{labels: dates,
                datasets: bigData,
            }} options = {myOptions}/>
                        
                        }





            <Button onClick = {()=>setDayCount(0)}>Today</Button> 
            <Button onClick = {()=>setDayCount(6)}>Past 7 days</Button>
            <Button onClick = {()=>setDayCount(29)}>Past 30 days</Button>
        </div>


    )
    else return <div></div>
        




}


export default Summary

