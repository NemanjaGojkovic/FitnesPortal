import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Admin(){

    // const[coaches, setCoaches] = useState();

    // useEffect( ()=> {
    //     var config = {
    //         method: 'get',
    //         url: 'http://127.0.0.1:8000/api/coaches',
    //         headers: { 
    //           Authorization: "Bearer "+ window.sessionStorage.getItem("auth_token"),
    //         },
    //     };
        
    //       if(coaches == null){
    //         axios(config)
    //         .then(function (response) {
    //             console.log(JSON.stringify(response.data));
    //             setCoaches(response.data.orders);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         }, [coaches]);
    //       }
    // })

    // const columns = [
    //     { 
    //       field: 'id', 
    //       headerName: 'ID', 
    //       width: 70 ,
    //     },
    //     { 
    //       field: 'firstname', 
    //       headerName: 'Ime', 
    //       width: 150 
    //     },
    //     { 
    //       field: 'lastname', 
    //       headerName: 'Prezime', 
    //       width: 100 
    //     },
    //     {
    //       field: 'experience',
    //       headerName: 'Iskustvo',
    //       type: 'number',
    //       width: 100,
    //     },
    //     {
    //       field: 'started',
    //       headerName: 'Godina pocetka',
    //       width: 150,
    //     }
    //   ];


    // return (
    // <>
    // <div style={{ height: 400, width: '100%' }}>
    //   <DataGrid
    //     rows={coaches}
    //     columns={columns}
    //     pageSize={5}
    //     rowsPerPageOptions={[5]}
    //   />
    // </div>
    // </>
    // );
}

export default Admin;