import React from 'react';
import "./sidebar.css";
import {RssFeed, Chat, Group, Bookmark, HelpOutline, WorkOutline, Event, School, PlayCircleFilledOutlined} from '@material-ui/icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sideBarListText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sideBarListText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sideBarListText">Group</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sideBarListText">Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                        <span className="sideBarListText">Help</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        <span className="sideBarListText">Work</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sideBarListText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sideBarListText">Courses</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon"/>
                        <span className="sideBarListText">Video</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="https://i.pinimg.com/474x/e7/55/36/e75536372a127492de39813775e2660c.jpg" alt="img" className="sidebarFriendImg"/>
                        <span className="sidebarFriendName">John</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://i.pinimg.com/474x/e7/55/36/e75536372a127492de39813775e2660c.jpg" alt="img" className="sidebarFriendImg"/>
                        <span className="sidebarFriendName">John</span>
                    </li> 
                    <li className="sidebarFriend">
                        <img src="https://i.pinimg.com/474x/e7/55/36/e75536372a127492de39813775e2660c.jpg" alt="img" className="sidebarFriendImg"/>
                        <span className="sidebarFriendName">John</span>
                    </li> 
                    <li className="sidebarFriend">
                        <img src="https://i.pinimg.com/474x/e7/55/36/e75536372a127492de39813775e2660c.jpg" alt="img" className="sidebarFriendImg"/>
                        <span className="sidebarFriendName">John</span>
                    </li> 
                    <li className="sidebarFriend">
                        <img src="https://i.pinimg.com/474x/e7/55/36/e75536372a127492de39813775e2660c.jpg" alt="img" className="sidebarFriendImg"/>
                        <span className="sidebarFriendName">John</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="https://i.pinimg.com/474x/e7/55/36/e75536372a127492de39813775e2660c.jpg" alt="img" className="sidebarFriendImg"/>
                        <span className="sidebarFriendName">John</span>
                    </li> 
                    <li className="sidebarFriend">
                        <img src="https://i.pinimg.com/474x/e7/55/36/e75536372a127492de39813775e2660c.jpg" alt="img" className="sidebarFriendImg"/>
                        <span className="sidebarFriendName">John</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;