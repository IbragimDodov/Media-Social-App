import { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import { format } from 'timeago.js';
import { MoreVert } from '@mui/icons-material'

import './post.css'

export default function Post({post}) {
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`)
      setUser(res.data)
    }
    fetchUser();
  }, [post.userId])
  
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img src={user.profilePicture || "./../assets/person/noAvatar.png"} alt="Person" className="postProfileImg" />
            </Link>
            <span className="postUsername"> {user.username} </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {post?.desc} </span>
          <img className='postImg' src={post.img || "./../assets/post/noPost.png"} alt="Author" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img onClick={likeHandler} className='likeIcon' src="/assets/like.png" alt="like" />
            <img onClick={likeHandler} className='likeIcon' src="/assets/heart.png" alt="heart" />
            <span className="postLikeCounter"> {like} people like it </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> {post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
