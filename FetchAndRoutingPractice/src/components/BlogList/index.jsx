import { Component } from "react"
import { HashLoader } from "react-spinners"

import BlogItem from "../BlogItem"
import "./index.css"

class BlogsList extends Component {
  state = { isLoading: true, blogsData: [] }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    try {
      const response = await fetch("https://apis.ccbp.in/blogs")
      const data = await response.json()
      const formattedData = data.map((eachItem) => ({
        id: eachItem.id,
        title: eachItem.title,
        imageUrl: eachItem.image_url,
        avatarUrl: eachItem.avatar_url,
        author: eachItem.author,
        topic: eachItem.topic,
      }))
      this.setState({ blogsData: formattedData, isLoading: false })
    } catch (error) {
      console.error("Failed to fetch blogs", error)
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { blogsData, isLoading } = this.state

    return (
      <>
        {isLoading ? (
          <div data-testid="loader" className="loader-cnt">
            <HashLoader color="#00BFFF" size={60} />
          </div>
        ) : (
          <ul className="blog-list-container">
            {blogsData.map((item) => (
              <BlogItem blogData={item} key={item.id} />
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default BlogsList
