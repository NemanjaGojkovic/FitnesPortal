import React from 'react'
import {BsInstagram, BsFacebook, BsYoutube, BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom';

function Footer(){
return (
<>
<div className='footer'>
<div className='logo'>

</div>
<div className='social'>
<Link className='icon' to='http://instagram.com'><BsInstagram size={25}/></Link>
<Link className='icon' to='http://facebook.com'><BsFacebook size={25}/></Link>
<Link className='icon' to='http://twitter.com'><BsTwitter size={25}/></Link>
<Link className='icon' to='http://youtube.com'><BsYoutube size={25}/></Link>
</div>
</div>
</>

);
}

export default Footer