import axios from 'axios';
import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function RegisterPage(){

    const [userDate, setUserData]=useState({
        firstname: "",
        lastname: "",
        birthday: "",
        category: "",
        email: "",
        password: "",
    })

    function handleInput(e){
        let newUserData=userDate;
        newUserData[e.target.name] = e.target.value;
        setUserData(newUserData)
    }

    let navigate = useNavigate()

    function handleRegister(e){
        e.preventDefault()
        axios.post("api/register", userDate)
        .then((res)=>{
            navigate("/login")
        }).catch((e)=>console.log(e))
    }



    return (
    <>
        <div className='login-body'>
        <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registracija</h3>
          <div className="form-group mt-3">
            <label>Ime</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Unesi ime"
            />
          </div>
          <div className="form-group mt-3">
            <label>Prezime</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Unesi prezime"
            />
          </div>
          <div className="form-group mt-3">
            <label>Datum rodjenja</label>
            <input
              type="date"
              className="form-control mt-1"
              placeholder="Unesi datum rodjenja"
            />
          </div>
          <div className="form-group mt-3">
            <label>Kategorija</label>
            <select className='combobox' name="" id="">
                
            </select>
          </div>
          <div className="form-group mt-3">
            <label>Email adresa</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Unesi email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Lozinka</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Unesi lozinku"
            />
          </div>
          <div className="button-div">
            <button type="submit" className="btn-login">
              Potvrdi
            </button>
          </div>
          
        </div>
      </form>
    </div>
        </div>
    </>
        
    );
}

export default RegisterPage