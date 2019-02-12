import React, { Component } from 'react'
import Message from './Message.jsx'

class MessageList extends Component {

  render() {
    return (
			<div>
			<p>{JSON.stringify(this.props)}</p>
      <ul>{
        this.props.messages.map( message => {
          return(
            <Message key={message.id} message={message} />
          )
        })
      }</ul>
			</div>
    )
  }

}

export default MessageList
