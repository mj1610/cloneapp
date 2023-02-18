import React, { useState, useEffect } from 'react';
import "./post.css";
import {MoreVert} from "@material-ui/icons";
import axios from "axios";
import {format} from "timeago.js";
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});

    const likehandle = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    useEffect(() =>{
        const fetchUser = async ()=>{
            const res = await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data)
        }
        fetchUser();
    },[post.userId])

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`} >
                        <img src={user.profilepicture || "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"} alt="img" className="postProfileImg"/>
                        </Link>
                        <span className="postUsername" >{user.username}</span>
                        <span className="postDate" >{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <img onClick={likehandle} src="https://www.pngall.com/wp-content/uploads/5/Like-Button-PNG.png" alt="img" className="likeIcon" />
                    <img onClick={likehandle} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" alt="img" className="likeIcon" />
                    <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Post;