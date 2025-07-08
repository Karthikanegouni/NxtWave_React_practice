import BlogItem from "../BlogItem"
import "./index.css"

export default function BlogList({ blogsList }) {
  return (
    <ul className="blog-list-cnt">
      {blogsList.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </ul>
  )
}

