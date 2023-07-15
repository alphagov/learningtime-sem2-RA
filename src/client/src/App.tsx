const App = () => {
    return (
        <>
            <div>
                <h1>Find local crime data</h1>
            </div>
            <div className="card">
                <form
                    action="/getData"
                    method="POST"
                    style={{
                        display: 'flex',
                        gap: '5px'
                    }}
                >
                    <label>Enter your postcode:</label>
                    <input type="text" id="postcode" name="postcode" />
                    <br />
                    <button type="submit">Submit your postcode</button>
                </form>
            </div>
        </>
    )
}

export default App
