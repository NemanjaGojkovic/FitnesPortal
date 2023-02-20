import React from 'react'

function OneUsage(){
return (
<>
<div className='usages'>
            <div className='name'>{service.name}</div>
            <div className='description'>{service.description}</div>
            <div className='img'><img src="https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png" alt="" className='imgService'/></div>
            <div className='grupa1'>
            <div className='price'>Cena: {service.price.toFixed(0)} RSD</div>            
            <div className='duration'>{service.duration} dana</div>
            </div>
            <div className='type'>Tip: {service.type.name}</div>
            {token!=null ? <div className='buttonDiv'><button className='activate'>Aktiviraj</button></div> : <></>}
        </div>
</>

);
}

export default OneUsage