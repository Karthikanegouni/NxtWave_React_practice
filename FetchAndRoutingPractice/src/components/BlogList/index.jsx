import { Component } from "react"
import BlogItem from "../BlogItem"
import "./index.css"

export default class BlogList extends Component {
  state = {
    blogList: [],
  }

  componentDidMount() {
    this.getData()
  }

  async getData() {
    const url = "https://apis.ccbp.in/blogs"
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }
      const json = await response.json()
      let list = []
      json.forEach((item) => {
        const { id, title, author, image_url, avatar_url, topic } = item
        list.push({
          id: id,
          title: title,
          author: author,
          imageUrl: image_url,
          avatarUrl: avatar_url,
          topic: topic,
        })
      })
      this.setState({
        blogList: list,
      })
    } catch (error) {
      console.error(error.message)
    }
  }

  render() {
    const { blogList } = this.state
    return (
      <ul className="blog-list">
        {blogList.map((blogitem) => (
          <BlogItem key={blogitem.id} blogitem={blogitem} />
        ))}
      </ul>
    )
  }
}
