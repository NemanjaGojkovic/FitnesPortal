import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Navbar({token, currentUser, removeToken}){

  function handleLogout(){

    var config = {
        method: 'post',
        url: '.http://127.0.0.1:8000/api/logout',
        headers: { 
        
        Authorization: "Bearer "+ window.sessionStorage.getItem("auth_token"),
        
        },
        
    };
    
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.setItem("auth_token",null);
        removeToken();
    })
    .catch(function (error) {
        console.log(error);
    });

  }

  const admin = () =>{
    if(currentUser != null){
      return currentUser.admin;
     }else{
       return false;
     }
  }

    return (
    <div className="inner-width">  
        <nav className="navigation-menu">
          <img src="https://cdn.pixabay.com/photo/2022/07/17/19/15/gym-7328168_960_720.png" alt="" className='logoImage' />
          <h1 className='title'>PowerGym</h1>
          <Link to="/"> Početna</Link>
          <Link to="/service"> Usluge</Link>
          <Link to="/about"> O nama</Link>
          <Link to="/contacts"> Kontakt</Link>
          {token!=null ?
            <Link to="/my_services">Moje usluge</Link> : <></>
          }
          {admin() ? 
          <Link to="/admin"> Admin</Link> :<></>
          }
        </nav>
        { token==null ? (
          <div className='nav2'>
          <Link className='register' to="/register">Registracija</Link>
          <h1 className='razmak'>/</h1>
          <Link className='login' to="/login">Login</Link>
          </div>
        ) : (
          <div className='nav2'>
          <Link className='profile' to="/profile">Profil</Link>
          <Link className='logout' to="/logout">Logout</Link>
          </div>
        )

        }
      </div>

    );
}

export default Navbar