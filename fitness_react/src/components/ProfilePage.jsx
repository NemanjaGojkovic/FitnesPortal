import React from 'react'

function ProfilePage({currentUser}){
    return (
    <>
        <div className='profile'>
            <p className='name'>{currentUser.firstname}</p>
            <p className='price'>Cena: {currentUser.lastname}</p>
            <p className='description'>{currentUser.email}</p>
            <p className='duration'>{currentUser.admin}</p>
            <p className='type'>{currentUser.category.name}</p>
            <p className='type'>{currentUser.birthday}</p>
        </div>
    </>

    );
}

export default ProfilePage