import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details
  return (
    <Link to={`/blogs/${id}`} className="link">
      <li className="con">
        <div className="con1">
          <img src={imageUrl} className="img3" alt={`item${id}`} />
        </div>
        <div>
          <p className="pa1">{topic}</p>
          <h1 className="he1">{title}</h1>
          <div className="con3">
            <img src={avatarUrl} className="img2" alt={`avatar${id}`} />
            <p className="pa1">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
