import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
// import CategoriesCombo from './CategoriesCombo';

function InsertService(){

  


    return (
    <>
        <div className='login-body'>
        <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleRegister}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Unesi podatke o usluzi</h3>
          <div className="form-group mt-3">
            <label>Ime</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Unesi ime usluge"
              onInput={handleInput}
              name="name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Cena</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Unesi cenu"
              onInput={handleInput}
              name="price"
            />
          </div>
          <div className="form-group mt-3">
            <label>Trajanje</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Unesi broj dana"
              onInput={handleInput}
              name="duration"
            />
          </div>
          
          <div className="form-group mt-3">
            <label>Opis</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Unesi opis"
              onInput={handleInput}
              name="description"
            />
          </div>

          <div className="form-group mt-3">
            <label>Tip</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Unesi tip"
              onInput={handleInput}
              name="t"
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

export default InsertService