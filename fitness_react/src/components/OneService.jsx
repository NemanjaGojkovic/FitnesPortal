import React from 'react'


function OneService({service, token, createUsage, usages}){
    let activated = false
    if(token!=null && usages!=null){
        usages.map((usage)=>{
        if(usage.service.id === service.id){
            activated=true
        }
        })
    }

    return (
    <>
        <div className='service'>
            <div className='name'>{service.name}</div>
            <div className='description'>{service.description}</div>
            <div className='img'><img src="https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png" alt="" className='imgService'/></div>
            <div className='grupa1'>
            <div className='price'>Cena: {service.price.toFixed(0)} RSD</div>            
            <div className='duration'>{service.duration} dana</div>
            </div>
            <div className='type'>Tip: {service.type.name}</div>
            {token!=null ? (!activated ? <div  className='buttonDiv'><button onClick={()=>{createUsage(service.id, service.duration)}} className='activate'>Aktiviraj</button></div> :
                <div  className='acitaved-service'><p className='textAct'>Usluga je vec aktivirana</p></div> ) : <></>}
        </div>
        
    </>

    );
}

export default OneService