import React from 'react'
import axios from 'axios';
import OneService from './OneService';
import {useState, useEffect} from 'react'

function Services({token, services, createUsage, usages}){

    
    
    return (
    <>
        
        <div className='centerAreaServices'>
            <h1 className='text1'>Usluge</h1>
        </div>
        <div className='services-body'>
            {services==null ? <></> : services.map((service)=>(
                <OneService token={token} service={service} key={service.id} createUsage={createUsage} usages={usages}/>
            ))}
        </div>
    </>
        
    );
}

export default Services