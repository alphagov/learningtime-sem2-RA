import { useState } from 'react'
import { PoliceAPIResponse } from '../../server/utils/types/policeAPI'
import { PostcodeForm } from './components/PostcodeForm'

const App = () => {
    const [postcode, setPostcode] = useState('')
    const [message, setMessage] = useState('')
    const [data, setData] = useState({} as Record<string, PoliceAPIResponse[]>)

    return (
        <>
            <div>
                <h1>Find local crime data</h1>
            </div>
            <PostcodeForm
                postcode={postcode}
                data={data}
                setMessage={setMessage}
                setPostcode={setPostcode}
                setData={setData}
            ></PostcodeForm>
            <div className="card"></div>
            <div>{message}</div>
            <div>
                {Object.keys(data).map((key) => (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{data[key].length}</td>
                    </tr>
                ))}
            </div>
        </>
    )
}

export default App
