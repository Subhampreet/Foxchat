import React from 'react'

function Message({ message }) {
  return (
    <div>
        if (message.type === 'join') return <p>{`${message.sid} just joined`}</p>;
        if (message.type === 'chat') return <p>{`${message.sid}: ${message.message}`}</p>;
    </div>
  )
}

export default Message