import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
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
      topic: data.topic,
    }
    this.setState({blogDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {id, title, imageUrl, avatarUrl, content, author} = blogDetails
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      <div className="container">
        <h1>{title}</h1>
        <div className="container1">
          <img src={avatarUrl} className="img1" alt={`avatar${id}`} />
          <p>{author}</p>
        </div>
        <img src={imageUrl} className="img4" alt={title} />
        <p>{content}</p>
      </div>
    )
  }
}
export default BlogItemDetails
