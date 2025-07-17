import { Link } from 'react-router-dom'
import './index.css'

export default function BlogItem({blogData}) {
  const {id, title, author, imageUrl, avatarUrl, topic} = blogData
  return (
    <Link to={`blogs/${id}`} className="blog-link-item">
    <li className="blog-item">
      <img src={imageUrl} alt={title} className="blog-item-img" />
      <div className="blog-item-txt-cnt">
        <p className="blog-item-topic">{topic}</p>
        <h1 className="blog-item-title">{title}</h1>
        <div className="blog-item-author-cnt">
          <img src={avatarUrl} alt={author} />
          <p className="blog-item-author">{author}</p>
        </div>
      </div>
    </li>
    </Link>
  )
}
