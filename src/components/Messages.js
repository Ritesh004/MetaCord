import { useEffect, useState, useRef } from 'react'
import { io } from "socket.io-client"

// Assets
import person from '../assets/person.svg'
import send from '../assets/send.svg'

// Socket
const socket = io('ws://localhost:3030')
const Messages =({account, messages, currentChannel}) => {
  const [message, setMessage]= useState("")

const messagesEndRef = useRef(null);
useEffect(() => {
    // Scroll to the bottom of the messages when they change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const sendMessage = async (e) => {
    e.preventDefault();
    console.log("sending message...", message);
  }
  return (
    <div className="text">
      <div className="messages">
        
        {currentChannel && messages.filter(message => message.channel === currentChannel.id.toString()).map((message, index) => (
          <div className="message" key={index}>
            <img src = {person} alt= "Person"/>
            <div className="message_content">
              <h3>{message.account.slice(0,6)+'...'+ message.account.slice(38,42)}</h3>
              <p>
                {message.text}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

        <form onSubmit={sendMessage}>
          <input type="text" onChange={(e)=> setMessage(e.target.value)}></input>
          <button type="submit">
            <img src={send} alt="Send Message"/>
          </button>
        </form>

    </div>
  );
}

export default Messages; 
