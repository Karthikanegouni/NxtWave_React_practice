import "./index.css"

export default function BlogItem({ blogitem }) {
  const { id, title, author, imageUrl, avatarUrl, topic } = blogitem
  return (
    <li className="blog-item">
      <img src={imageUrl} alt={title} className="blog-item-img" />
      <div className="blog-item-txt-cnt">
        <p className="blog-item-topic">{topic}</p>
        <p className="blog-item-title">{title}</p>
        <div className="blog-item-author-cnt">
          <img src={avatarUrl} alt={author} />
          <p className="blog-item-author">{author}</p>
        </div>
      </div>
    </li>
  )
}
