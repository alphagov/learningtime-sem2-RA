import { FormEvent, useState } from 'react'

const App = () => {
    const [postcode, setPostcode] = useState('')
    const [message, setMessage] = useState('')

    const handleForm = async (event: FormEvent) => {
        event.preventDefault()
        try {
            const response = await fetch('http://localhost:5000/api/postcode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ postcode })
            })
            const parsedMessage = await response.json()
            setMessage(parsedMessage.coords)
        } catch (error) {
            console.error(error)
            setMessage('Whoopsy daisy there was an error lol')
        }
    }

    return (
        <>
            <div>
                <h1>Find local crime data</h1>
            </div>
            <div className="card">
                <form
                    style={{
                        display: 'flex',
                        gap: '5px'
                    }}
                    onSubmit={handleForm}
                >
                    <label>Enter your postcode:</label>
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        value={postcode}
                        placeholder="enter your postcode"
                        onChange={(e) => setPostcode(e.target.value)}
                        pattern="(GIR 0AA)|((([A-Z-[QVX]][0-9][0-9]?)|(([A-Z-[QVX]][A-Z-[IJZ]][0-9][0-9]?)|(([A-Z-[QVX]][0-9][A-HJKSTUW])|([A-Z-[QVX]][A-Z-[IJZ]][0-9][ABEHMNPRVWXY]))))\s?[0-9][A-Z-[CIKMOV]]{2})"
                    />
                    <br />
                    <button type="submit">Submit your postcode</button>
                </form>
            </div>
            <div>
                <p>{message}</p>
            </div>
        </>
    )
}

export default App
