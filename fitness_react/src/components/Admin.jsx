
import {Link} from 'react-router-dom'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';



  function Admin({currentUser, coaches, services}){

  

    const columnsCoaches = [
        { 
          field: 'id', 
          headerName: 'ID', 
          width: 70 ,
        },
        { 
          field: 'firstname', 
          headerName: 'Ime', 
          width: 150 
        },
       { 
          field: 'lastname', 
          headerName: 'Prezime', 
          width: 100 
        },
        {
          field: 'experience',
          headerName: 'Iskustvo',
          type: 'number',
          width: 400,
        },
       {
          field: 'started',
          headerName: 'Godina pocetka',
          width: 150,
       },
    //    {
    //     field: 'started',
    //     headerName: 'Godina pocetka',
    //     width: 150,
    //  },
    //  {
    //     field: 'started',
    //     headerName: 'Godina pocetka',
    //     width: 150,
    //   }
      ];

      const columnsServices = [
        { 
          field: 'id', 
          headerName: 'ID', 
          width: 70 ,
        },
        { 
          field: 'name', 
          headerName: 'Naziv', 
          width: 150 
        },
       { 
          field: 'price', 
          headerName: 'Cena', 
          width: 100 
        },
        {
          field: 'duration',
          headerName: 'Trajanje(dani)',
          type: 'number',
          width: 100,
        },
       {
          field: 'description',
          headerName: 'Opis',
          width: 400,
       },
       {
        field: 'type',
        valueGetter: (param)=> param.row.type.name,
        headerName: 'Tip',
        width: 150,
       }
    //    {
    //     field: 'started',
    //     headerName: 'Godina pocetka',
    //     width: 150,
    //  },
    //  {
    //     field: 'started',
    //     headerName: 'Godina pocetka',
    //     width: 150,
    //   }
      ];


   return (
    <>

{currentUser.admin==1 ? <div className='btn-login'>
  <Link className='adminButton' to="/admin/insertCoach">Dodaj trenera</Link></div>:<></>}
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={coaches}
        columns={columnsCoaches}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
{currentUser.admin==1 ? <div  className='btn-login'>
                          <Link className='adminButton' to="/admin/insertService">Dodaj uslugu</Link> </div>: <></>

}

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={services}
        columns={columnsServices}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
    </>
    );

  
  
  }
export default Admin;