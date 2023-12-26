// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsApp extends Component {
  state = {
    selectedId: 0,
  }

  onClickLeftArrow = () => {
    this.setState(prevState => {
      if (prevState.selectedId > 0) {
        return {selectedId: prevState.selectedId - 1}
      }
      return {selectedId: 0}
    })
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const objlength = reviewsList.length - 1
    // console.log(objlength)

    this.setState(prevState => {
      if (prevState.selectedId < objlength) {
        return {selectedId: prevState.selectedId + 1}
      }
      return {selectedId: objlength}
    })
  }

  render() {
    const {reviewsList} = this.props
    const {selectedId} = this.state

    const {imgUrl, username, description, companyName} = reviewsList[selectedId]

    return (
      <div className="app-container">
        <h1 className="app-heading">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            className="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="eachItem-container">
            <img src={imgUrl} alt={username} className="image" />
            <p className="user-name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsApp

// import {Component} from 'react'

// import './index.css'

// class ReviewsCarousel extends Component {
//   state = {
//     activeReviewIndex: 0,
//   }

//   onClickRightArrow = () => {
//     const {activeReviewIndex} = this.state
//     const {reviewsList} = this.props

//     if (activeReviewIndex < reviewsList.length - 1) {
//       this.setState(prevState => ({
//         activeReviewIndex: prevState.activeReviewIndex + 1,
//       }))
//     }
//   }

//   renderActiveReview = review => {
//     const {imgUrl, username, companyName, description} = review

//     return (
//       <div className="review-container">
//         <img src={imgUrl} alt={username} />
//         <p className="username">{username}</p>
//         <p className="company">{companyName}</p>
//         <p className="description">{description}</p>
//       </div>
//     )
//   }

//   onClickLeftArrow = () => {
//     const {activeReviewIndex} = this.state

//     if (activeReviewIndex > 0) {
//       this.setState(prevState => ({
//         activeReviewIndex: prevState.activeReviewIndex - 1,
//       }))
//     }
//   }

//   render() {
//     const {reviewsList} = this.props
//     const {activeReviewIndex} = this.state
//     const currentReviewDetails = reviewsList[activeReviewIndex]

//     return (
//       <div className="app-container">
//         <h1 className="heading">Reviews</h1>
//         <div className="carousel-container">
//           <button
//             type="button"
//             onClick={this.onClickLeftArrow}
//             testid="leftArrow"
//             className="arrow-button"
//           >
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
//               alt="left arrow"
//             />
//           </button>
//           {this.renderActiveReview(currentReviewDetails)}
//           <button
//             type="button"
//             onClick={this.onClickRightArrow}
//             testid="rightArrow"
//             className="arrow-button"
//           >
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
//               alt="right arrow"
//             />
//           </button>
//         </div>
//       </div>
//     )
//   }
// }

// export default ReviewsCarousel
