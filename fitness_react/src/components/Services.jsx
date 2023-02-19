import React from 'react'
import axios from 'axios';
import OneService from './OneService';
import {useState, useEffect} from 'react'
function Services({token}){

    const [services, setServices]=useState()
    useEffect(()=>{
        if(services==null){
            axios.get("api/services")
                .then((res)=>{
                setServices(res.data.services)
                })
        }
    },[services])
    
    return (
    <>
        
        <div className='centerAreaServices'>
            <h1 className='text1'>Usluge</h1>
        </div>
        <div className='services-body'>
            {services==null ? <></> : services.map((service)=>(
                <OneService token={token} service={service} key={service.id}/>
            ))}
        </div>
    </>
        
    );
}

export default Services