export const getCoords = async (
    postcode: string
): Promise<number[] | string> => {
    const url = `https://api.postcodes.io/postcodes/${postcode}`
    const postcodeApiResponse = await fetch(url, {
        method: 'GET'
    })
    const parsedPostcodeResponse = await postcodeApiResponse.json()
    if (parsedPostcodeResponse.status == 404) {
        return 'Invalid postcode, please try again'
    }
    return [
        parsedPostcodeResponse.result.latitude,
        parsedPostcodeResponse.result.longitude
    ]
}
