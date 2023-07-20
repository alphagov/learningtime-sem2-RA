export const getCoords = async (
    postcode: string
): Promise<number[] | string> => {
    const url = new URL(`${postcode}`, 'https://api.postcodes.io/postcodes/')
    const postcodeApiResponse = await fetch(url, {
        method: 'GET'
    })
    const parsedPostcodeResponse = await postcodeApiResponse.json()
    if (parsedPostcodeResponse.status == 404) {
        return 'Invalid postcode, please try again'
    }
    const [lat, long]: number[] = [
        parsedPostcodeResponse.result.latitude,
        parsedPostcodeResponse.result.longitude
    ]
    return [lat, long]
}
