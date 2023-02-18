import React, {useContext} from 'react';
import "./topbar.css";
import {Search, Person, Chat, Notifications} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

const Topbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="topbarContainer">
            <div className="topbarleft">
                <Link to="/" style={{textDecoration: "none"}}>
                <span className="logo">SocialSite</span>
                </Link>
            </div>
            <div className="topbarcenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search" className="searchInput"/>
                </div>
            </div>
            <div className="topbarright">
                <div className="tobarLinks">
                    <Link to="/" style={{textDecoration: "none", color: "white"}}>
                        <span className="topbarLink">Homepage</span>
                    </Link>
                    <Link to="/profile/:username" style={{textDecoration: "none", color: "white"}}>    
                        <span className="topbarLink">Timeline</span>
                    </Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">10</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img src={user.profilepicture ? user.profilepicture : "https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg"} alt="img" className="topbarImg" />
                </Link>
            </div>
        </div>
    );
};

export default Topbar;