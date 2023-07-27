import { useState } from 'react'
import { PoliceAPIResponse } from '../../server/utils/types/policeAPI'
import { PostcodeForm } from './components/PostcodeForm'
import { DataTable } from './components/DataTable'
import { Map } from './components/MapComponent'

const App = () => {
    const [postcode, setPostcode] = useState('')
    const [message, setMessage] = useState('')
    const [data, setData] = useState({} as Record<string, PoliceAPIResponse[]>)

    return (
        <>
            <div className="Title">
                <h1>Find local crime data</h1>
            </div>
            <div>
                <PostcodeForm
                    postcode={postcode}
                    data={data}
                    setMessage={setMessage}
                    setPostcode={setPostcode}
                    setData={setData}
                ></PostcodeForm>
            </div>
            <div className="errorMessage">{message}</div>
            <div className="dataTable">
                <DataTable data={data} />
            </div>
            <div id="map">
                <Map></Map>
            </div>
        </>
    )
}

export default App
