import "./index.css"

export default function BlogItem({ blog }) {
  const { title, description, publishedDate } = blog
  return (
    <li className="blog-item">
      <div className="text-cnt">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-info">{description}</p>
      </div>
      <p className="date">{publishedDate}</p>
    </li>
  )
}
