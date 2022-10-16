import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
    const [text, setText] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const trimmedText = text.trim()
        if (e.key === 'Enter' && trimmedText) {
            setText('')
        }
    }

    return (
        <header className="header">
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </header>
    )
}

export default Header
