import { useState } from 'react'
import { MoreVert } from '@mui/icons-material'
import { Users } from '../../dummyData'

import './post.css'

export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="Person" className="postProfileImg" />
            <span className="postUsername"> {Users.filter(u => u.id === post.userId)[0].username} </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"> {post?.desc} </span>
          <img className='postImg' src={post.photo} alt="Author" />
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
