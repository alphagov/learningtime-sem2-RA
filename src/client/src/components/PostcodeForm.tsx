import { FormEvent, useState } from 'react'
import { PoliceAPIResponse } from '../../../server/utils/types/policeAPI'
import { MonthSelector } from './MonthSelector'
import { LatLngExpression } from 'leaflet'
interface PostcodeFormProps {
    postcode: string
    data: Record<string, PoliceAPIResponse[]>
    setMessage: (message: string) => void
    setData: (data: Record<string, PoliceAPIResponse[]>) => void
    setPostcode: (postcode: string) => void
    setCoords: (coords: LatLngExpression) => void
    style?: Record<string, unknown>
}

export const PostcodeForm = ({
    postcode,
    data,
    setMessage,
    setData,
    setPostcode,
    setCoords,
    style
}: PostcodeFormProps) => {
    const [month, setMonth] = useState('2022-06')

    const handleForm = async (event: FormEvent) => {
        event.preventDefault()
        if (!postcode || postcode.length === 0) {
            setMessage('Please enter a valid postcode')
            setData({})
            return
        }
        try {
            const response = await fetch('http://localhost:5000/api/postcode', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ postcode, month })
            })
            const parsedMessage = await response.json()
            if (typeof parsedMessage.data == 'string') {
                setMessage(parsedMessage.data)
                setData({})
            } else {
                setData({ ...data, ...parsedMessage.data })
                setCoords(parsedMessage.coords)
                setMessage('')
            }
        } catch (error) {
            console.error(error)
            setMessage('Whoopsy daisy there was an error lol')
        }
    }
    return (
        <>
            <div className="postcodeForm" style={style}>
                <MonthSelector setMonth={setMonth}></MonthSelector>
                <form className="postcodeInput" onSubmit={handleForm}>
                    <label>Enter your postcode:</label>
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        value={postcode}
                        placeholder="enter your postcode"
                        onChange={(e) => setPostcode(e.target.value)}
                        pattern="([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})"
                        required
                    />
                    <br />
                    <button type="submit">Submit your postcode</button>
                </form>
            </div>
        </>
    )
}
