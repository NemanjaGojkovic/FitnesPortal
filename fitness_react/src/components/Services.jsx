import React from 'react'
import axios from 'axios';
import OneService from './OneService';
import {useState, useEffect} from 'react'

function Services({token, createUsage, usages}){

    const [types, setTypes]=useState();
    useEffect(()=>{
        if(types==null){
            axios.get("api/types").then((res)=>{
                setTypes(res.data.types);
            });
        }
    },[types]);

    const[selectedType, setSelectedType]=useState()

     const [services, setServices]=useState();
     useEffect(()=>{
       if(services==null){
       axios.get("api/services").then((res)=>{
      setServices(res.data.services);
    });



          }
                },[services]);
                 const sortPriceAsc = () => {
                     const sortedServices = [...services].sort((a, b) => a.price - b.price);
                      setServices(sortedServices);
                    };
                     const sortPriceDsc = () => {
                         const sortedServices = [...services].sort((a, b) => b.price - a.price);
                          setServices(sortedServices);
                         };
                          const sortNameAsc = () => {
                             const sortedServices = [...services].sort((a, b) => b.name.localeCompare(a.name));
                              setServices(sortedServices);
                             };
                              const sortNameDsc = () => {
                                 const sortedServices = [...services].sort((a, b) => a.name.localeCompare(b.name));
                                  setServices(sortedServices);
                                 };


                                function searchByType(){
                                    const searchedServices = [...services].filter((service)=>
                                        service.type.id===selectedType.id
                                    )
                                    setServices(searchedServices)
                                }

                                function setType(e){
                                    setSelectedType(e.target.value)
                                }
                                 
                                 
                                 return (
                                     <>
                                      <div className='centerAreaServices'>
                                         <h1 className='text1'>Usluge</h1>
                                         </div>
                                          <div className='functionalities'>
                                             <div className='searchDiv'>
                                                 <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                                     <p style={{marginRight: "10px"}}>Pretraži po tipu:</p>
                                                      <select onChange={setType} className='searchType' name="" id="">
                                                      {types==null ? <></> : types.map((type)=>(
                                                        <option key={type.id} value={type.id}>
                                                            {type.name}
                                                         </option>
            ))}
                                                      </select>
                                                      <button onClick={searchByType}>Pretrazi</button>
                                                     </div>
                                                      <input className='search' type="text" 
                                                      placeholder='Unesite tekst za pretragu' />
                                                      <button className='sortD' onClick={sortPriceDsc}>Sortiraj opadajuće po ceni</button>
                                                      <button className='sortA' onClick={sortPriceAsc}>Sortiraj rastuće po ceni</button>
                                                       <button className='sortD' onClick={sortNameDsc}>Sortiraj opadajuće po imenu</button>
                                                       <button className='sortA' onClick={sortNameAsc}>Sortiraj rastuće po imenu</button>
                                                     </div>
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