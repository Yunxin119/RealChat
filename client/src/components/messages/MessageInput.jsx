import React from 'react'
import { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage'

const MessageInput = () => {
    const [message, setMessage] = useState('')
    const { loading, sendMessage } = useSendMessage()
    const submitHandler = async (e) => {
        e.preventDefault()
        await sendMessage(message)
        setMessage("") // after sending the message we need to set it to "" again
    }

    return (
        <form className="px-4 my-3" onSubmit={submitHandler}>
            <div className="w-full flex items-center">
                <input
                    type="text"
                    placeholder="What you wanna say?"
                    className="input border text-sm rounded-lg block p-2.5 flex-grow"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className="btn ml-2 glass btn-circle" disabled={loading}>
                    {loading ? (
                        <span className='loading loading-spinner'></span>
                    ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="size-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12Zm0 0h7.5"
                    />
                    </svg>
                    )}
                </button>
            </div>
        </form>
    );
}

export default MessageInput
