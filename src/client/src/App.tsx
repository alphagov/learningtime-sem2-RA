import { useState } from 'react'

function App() {
    const [message, setMessage] = useState({ Hello: 'World' })

    return (
        <>
            <div>
                <p>The current message is {Object.entries(message)} </p>
            </div>
            <div className="card">
                <button
                    onClick={async () => {
                        const response = await fetch(
                            'http://localhost:5000/goodbye'
                        )
                        const data = await response.json()
                        setMessage(data)
                    }}
                >
                    Press to say Goodbye
                </button>
            </div>
        </>
    )
}

export default App
