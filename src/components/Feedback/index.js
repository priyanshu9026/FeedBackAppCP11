import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbacksel: false,
  }

  clickOnEmoji = () => {
    this.setState({isFeedbacksel: true})
  }

  renderfeedback = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emoji-list">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  type="button"
                  className="btn"
                  onClick={this.clickOnEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji-img"
                  />
                  <br />
                  <span className="emoji-name">{emoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThanks = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        <div className="cards">
          <img src={loveEmojiUrl} alt="love emoji" className="emoji-img" />
          <h1 className="thnku">Thank You!</h1>
          <p className="description">
            We will use your feedback ti omprove our customer support
            performance
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedbacksel} = this.state

    return (
      <div className="container">
        <div className="feedback-card">
          {isFeedbacksel ? this.renderThanks() : this.renderfeedback()}
        </div>
      </div>
    )
  }
}
export default Feedback
