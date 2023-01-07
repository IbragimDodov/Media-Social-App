import { MoreVert } from '@mui/icons-material'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/4.jfif" alt="Person" className="postProfileImg" />
            <span className="postUsername">Safak Kocaoglu</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! Its my first post :) </span>
          <img className='postImg' src="/assets/post/3.jfif" alt="Author" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src="/assets/like.png" alt="like" />
            <img className='likeIcon' src="/assets/heart.png" alt="heart" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
