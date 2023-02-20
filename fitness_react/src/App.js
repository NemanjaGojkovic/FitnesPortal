
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from './components/MainPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Services from './components/Services';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ProfilePage from './components/ProfilePage';
import {useState, useEffect} from 'react'
import axios from 'axios';
import Usages from './components/Usages';

function App() {

  const [token, setToken] = useState();

  function addToken(auth_token){
    setToken(auth_token)
  }

  const [users, setUsers]=useState();
    useEffect(()=>{
        if(users==null){
            axios.get("api/users").then((res)=>{
                setUsers(res.data.users);
            });
        }
    },[users]);

    const [currentUser, setCurrentUser] = useState();
    

  function removeToken(){
    setToken(null);
    setCurrentUser(null);
}

  function addUser(u){ 
    if(users != null){
        users.map((user) =>{
            if(user.email == u.email){
                setCurrentUser(user);
                loadUsages()
            };
        });
    };
}


const [usages, setUsages]=useState()

let header= {
  headers: {'Authorization': "Bearer " + token}
};

useEffect(()=>{
  if(usages==null && token!=null){
      axios.get("api/usages", header).then((res)=>{
          console.log(res.data);
          setUsages(res.data.usages);
      });
  }
},[usages]);

function loadUsages() {

  var data = currentUser;

  var config = {
      method: 'get',
      url: 'api/usages',
      headers: { 
      
      Authorization: "Bearer "+ window.sessionStorage.getItem("auth_token"),
      },
      
      data : data,
  };
  
  axios(config)
  .then(function (response) {
      console.log(JSON.stringify(response.data));
      setUsages(response.data.usages);
  })
  .catch(function (error) {
      console.log(error);
  });

  };

const [services, setServices]=useState();
    useEffect(()=>{
        if(services==null){
            axios.get("api/services").then((res)=>{
                setServices(res.data.services);
            });
        }
    },[users]);


  const createUsage = (id, duration) => {

    console.log(id)

    services.map((service)=>{
      if(service.id===id){
        let today = new Date()
        let endDay = new Date(today)
        endDay.setDate(today.getDate()+duration)
        let todaySql = today.toISOString().slice(0, 10); 
        let endSql = endDay.toISOString().slice(0, 10);  
    
        var data = {
         service_id: id,
          date_from: todaySql,
          date_to: endSql
        }

        var config = {
          method: 'post',
          url: 'api/usages',
          headers: { 
      
         Authorization: "Bearer "+ window.sessionStorage.getItem("auth_token"),
         },
      
          data : data,
        };

         axios(config)
         .then(function (response) {
          console.log(JSON.stringify(response.data));
          setUsages(usages => [...usages, response.data[1]]);
         })
          .catch(function (error) {
              console.log(error);
          });
         }
       })
    
    
  
};

// const removeUsage = (id) => {
//   let favBook_id = null;

//     if(favouriteBooks != null){
//         favouriteBooks.map((favBook) =>{
//           if(favBook.book.id == id){
//               favBook_id = favBook.id;
//           }
//         })
//     }

//     var config = {
//       method: 'delete',
//       url: 'http://127.0.0.1:8000/api/favbooks/'+ favBook_id,
//       headers: { 
      
//       Authorization: "Bearer "+ window.sessionStorage.getItem("auth_token"),
//       },
      
//       };

//   axios(config)
//   .then(function (response) {
//       console.log(JSON.stringify(response.data));
//       loadFavourites();
//   })
//   .catch(function (error) {
//       console.log(error);
//   });
// };

// function updateUserData(newData){
//   if(currentUser != null){
//       let newUser = currentUser;
//       if(currentUser.user_data == null){
//           newUser.user_data = newData.id;
//       }
//       newUser.email = newData.email;
//       newUser.name = newData.name;
//       newUser.user_data = newData.id
//       setCurrentUser(newUser);


//   }
// }

  return (
    
    <>
    <BrowserRouter>
      <Navbar token={token} currentUser={currentUser} removeToken={removeToken}></Navbar>
        <Routes>
          <Route path='/' element={
            <MainPage/>
          }/>
          <Route path='/contact' element={
            <ContactPage/>
          }/>
          <Route path='/about' element={
            <AboutPage/>
          }/>
          <Route path='/admin' element={
            <Admin/>
          }/>
          <Route path='/service' element={
            <Services token={token} createUsage={createUsage} services={services} usages={usages}/>
          }/>
          <Route path='/login' element={
            <LoginPage addToken={addToken} addUser={addUser}/>
          }/>
          <Route path='/register' element={
            <RegisterPage/>
          }/>
          <Route path='/profile' element={
            <ProfilePage currentUser={currentUser}/>
          }/>
          <Route path='/usages' element={
            <Usages token={token}/>
          }/>
        </Routes>
      <Footer></Footer>
    </BrowserRouter> 
    </> 
  );
}

export default App;
