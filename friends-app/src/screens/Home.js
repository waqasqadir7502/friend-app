import { Button } from "antd";
import React from "react";
import { auth, signOut } from '../config/firebase';
import '../screens/Home.css'

function Home() {
    function LogOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });          
    }
    return(
        <>
        <div className='descrip-div'>
            <div className='col'>
            <div className='img'><p>Pretend You See A Pic Here</p></div>
            </div>
            <div className='col'>
            <div className='name-div'><h2>Waqas Qadir</h2></div>
            <div className='bio-div'><p>Hello Friends Welcome To My Minecraft Channel</p></div>
            </div>
            <div className='col'>
            <div className="signOut-div">
        <Button onClick={LogOut}>Log Out</Button>
        </div>
            </div>
        </div>
        </>
    );
}

export default Home;