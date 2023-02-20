import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

function Usages({token}){

    let header= {
        headers: {'Authorization': "Bearer " + token}
    };

    const [usages, setUsages]=useState();
    useEffect(()=>{
        if(usages==null){
            axios.get("api/favbooks", header).then((res)=>{
                console.log(res.data);
                setUsages(res.data.usages);
            });
        }
    },[usages]);


return (
<>
<div className='centerAreaUsages'>
    <h1 className='text1'>Trenutna korišćenja usluga</h1>
</div>
</>

);
}

export default Usages