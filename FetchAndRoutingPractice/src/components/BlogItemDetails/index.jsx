import {Component} from 'react'
import {HashLoader} from 'react-spinners'
import './index.css'

export default class BlogItemDetails extends Component {
  state = {blogItemData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    try {
      const {match} = this.props
      const {params} = match
      const {id} = params
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const data = await response.json()

      const updatedData = {
        id: data.id,
        title: data.title,
        imageUrl: data.image_url,
        avatarUrl: data.avatar_url,
        author: data.author,
        content: data.content,
      }

      this.setState({
        blogItemData: updatedData,
        isLoading: false,
      })
    } catch (error) {
      console.error('Failed to fetch blogs', error)
      this.setState({isLoading: false})
    }
  }

  render() {
    const {blogItemData, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogItemData
    return (
      <>
        {isLoading ? (
          <div data-testid="loader" className="loader-cnt">
            <HashLoader color="#00BFFF" size={60} />
          </div>
        ) : (
          <div>
            <h1 className="blog-item-details-title">{title}</h1>
            <div className="blog-item-details-cnt">
              <div className="blog-item-details-author-cnt">
                <div className="blog-item-details-author-img-cnt">
                  <img
                    src={avatarUrl}
                    alt={author}
                    className="blog-item-details-author-img"
                  />
                </div>
                <p className="blog-item-details-author-name">{author}</p>
              </div>
              <div className="blog-item-details-img-cnt">
                <img
                  src={imageUrl}
                  alt={title}
                  className="blog-item-details-img"
                />
              </div>
              <p className="blog-item-details-description">{content}</p>
            </div>
          </div>
        )}
      </>
    )
  }
}
