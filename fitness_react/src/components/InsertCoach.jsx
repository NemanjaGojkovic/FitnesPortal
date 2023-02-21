import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
// import CategoriesCombo from './CategoriesCombo';

function InsertCoach(){

  


    return (
    <>
        <div className='login-body'>
        <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleRegister}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Unesi podatke o treneru</h3>
          <div className="form-group mt-3">
            <label>Ime</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Unesi ime"
              onInput={handleInput}
              name="firstname"
            />
          </div>
          <div className="form-group mt-3">
            <label>Prezime</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Unesi prezime"
              onInput={handleInput}
              name="lastname"
            />
          </div>
          <div className="form-group mt-3">
            <label>Datum početka</label>
            <input
              type="date"
              className="form-control mt-1"
              placeholder="Unesi datum početka"
              onInput={handleInput}
              name="started"
            />
          </div>
          
          <div className="form-group mt-3">
            <label>Iskustvo</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Unesi iskustvo"
              onInput={handleInput}
              name="experience"
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

export default InsertCoach