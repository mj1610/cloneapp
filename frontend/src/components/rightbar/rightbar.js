import React from 'react';
import "./rightbar.css";

const Rightbar = ({user}) => {

    const HomePageRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="" alt="img" className="birthdayImg"/>
                    <span className="birthdayText"><b>John</b> and <b>3 other friend</b> have birthday today</span>
                </div>
            <img src="" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="friendList">
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="https://images.unsplash.com/photo-1574343062782-e0251cf2589c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwdHJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">John</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="https://images.unsplash.com/photo-1574343062782-e0251cf2589c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwdHJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">John</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="https://images.unsplash.com/photo-1574343062782-e0251cf2589c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwdHJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">John</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="https://images.unsplash.com/photo-1574343062782-e0251cf2589c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwdHJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">John</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="https://images.unsplash.com/photo-1574343062782-e0251cf2589c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwdHJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">John</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="https://images.unsplash.com/photo-1574343062782-e0251cf2589c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwdHJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">John</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="https://images.unsplash.com/photo-1574343062782-e0251cf2589c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwdHJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">John</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="https://images.unsplash.com/photo-1574343062782-e0251cf2589c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwdHJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">John</span>
                </li>
                <li className="rightbarFriend">
                    <div className="rightbarImgContainer">
                        <img src="https://images.unsplash.com/photo-1574343062782-e0251cf2589c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwdHJlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="img" className="rightbarprofileImg"/>
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">John</span>
                </li>
            </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{user.relationship}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">John</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">John</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">John</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">John</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">John</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">John</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar/> : <HomePageRightbar/> }   
            </div>
        </div>
    );
};

export default Rightbar;