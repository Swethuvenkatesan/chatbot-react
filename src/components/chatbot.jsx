import React, { useState } from 'react'; // Correct import of useState
import { analyze } from '../utils';
import ChatMessage from './chatmessage';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: 'Hi, may I know your name?',
    },
  ]);

  const [text, setText] = useState('');

  const onsend = () => {
    let list = [...messages, { message: text, user: true }];

    if (list.length > 2) {
      const reply = analyze(text);
      list = [...list, { message: reply }];
    } else {
      list = [
        ...list,
        {
          message: `Hi, ${text}`,
        },
        {
          message: 'How can I help you?',
        },
      ];
    }

    setMessages(list);
    setText('');

    setTimeout(() => {
      document.querySelector('#copyright').scrollIntoView();
    }, 1);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <img
          src="https://img.freepik.com/premium-vector/robot-icon-chat-bot-sign-support-service-concept-chatbot-character-flat-style_41737-795.jpg"
          alt="logo"
          height={250}
          width={250}
        />
        <h1 className="text-primary"> chat-bot</h1>
        
      </div>

      <div className="chat-message">
        {messages.length > 0 &&
          messages.map((data, index) => <ChatMessage key={index} {...data} />)}

        <div className="d-flex mt-2">
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="button" className="btn btn-primary ms-3" onClick={onsend}>
            Send
          </button>
        </div>

        <div id="copyright" className="mt-3">
          happy coding :)
        </div>
      </div>
    </div>
  );
}