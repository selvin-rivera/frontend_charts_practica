'use client'

import { getPrecio_MayorProducto } from '@/service/Api';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

//creando funcion 
export default function Precio_MayorProducto() {

  const [chartData, setChartData] = useState({
    labels:[],
    datasets:[
        {
            label:'',
            data:[],
            backgroundColor:''
        }
    ]
  })

  useEffect(()=>{
    getPrecio_MayorProducto().then(data=>{
        const  tipoProducto = data.map((item:any) => item.productType);
        const productos= data.map((item:any) => item.Valor_Total);
        
        setChartData({
            labels:tipoProducto,
            datasets:[{
                label: 'Precio mas alto de producto',
                data:productos,
                backgroundColor:'rgb(255, 99, 132)'
            }
            ]
        })

    })
    .catch((error)=>{console.log('ocurrio un error',error)})
  },[]);

  return (
    <>

    <div>
        {
            chartData ? (
                <div>
                    <h3>Titulo del componente</h3>

                    <Bar data={chartData}></Bar>
                </div>
            ) :(
                <div> loading..</div>
            )
        }
    </div>
        
    </>
  )
}
