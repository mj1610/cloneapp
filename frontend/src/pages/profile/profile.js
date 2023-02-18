import React, {useState, useEffect} from 'react';
import Feed from '../../components/feed/feed';
import Rightbar from '../../components/rightbar/rightbar';
import Sidebar from '../../components/sidebar/sidebar';
import Topbar from '../../components/topbar/topbar';
import "./profile.css";
import axios from "axios";
import {useParams} from "react-router";

const Profile = () => {
    const [user, setUser] = useState({});
    const params = useParams().username;

    useEffect(() =>{
        const fetchUser = async ()=>{
            const res = await axios.get(`/users?username=${params}`)
            setUser(res.data)
        }
        fetchUser();
    },[params])

    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src={user.coverpicture || "https://st3.depositphotos.com/5918238/18694/i/600/depositphotos_186942178-stock-photo-grunge-scratched-blue-background-illustration.jpg"} alt="img" className="profileCoverimg"/>
                        <img src={user.profilepicture || "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"} alt="img" className="profileUserimg"/>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.desc}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username={params}/>
                    <Rightbar user= {user}/>            
                </div>
            </div>
        </div>
        </>
    );
};

export default Profile;