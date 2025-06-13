import { useEffect, useState, useRef } from 'react'
import { io } from "socket.io-client"

// Assets
import person from '../assets/person.svg'
import send from '../assets/send.svg'

// Socket
const socket = io('ws://localhost:3030')

const Messages = ({ account, currentChannel }) => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    socket.emit('get messages')
    socket.on('get messages', (messages) => {
      setMessages(messages)
    })
    socket.on('new message', (messages) => {
      setMessages(messages)
    })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = (e) => {
    e.preventDefault()
    if (message) {
      const msg = {
        channel: currentChannel.id,
        account: account,
        text: message
      }
      socket.emit('new message', msg)
      setMessage('')
    }
  }

  return (
    <div className="text">
      <div className="messages">
        {messages
          .filter(message => message.channel === currentChannel?.id)
          .map((message, index) => (
            <div key={index} className="message">
              <img src={person} alt="Person" />
              <div className="message_content">
                <h3>{message.account}</h3>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder={`Message #${currentChannel?.name}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">
          <img src={send} alt="Send" />
        </button>
      </form>
    </div>
  );
}

export default Messages;