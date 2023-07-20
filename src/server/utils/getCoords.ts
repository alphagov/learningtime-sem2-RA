export const getCoords = async (
    postcode: string
): Promise<number[] | string> => {
    const postcodeApiResponse = await fetch(
        `api.postcodes.io/postcodes/${postcode}`,
        {
            method: 'GET'
        }
    )
    const parsedPostcodeResponse = await postcodeApiResponse.json()
    if (parsedPostcodeResponse.status == 404) {
        return 'Invalid postcode, please try again'
    }
    const [long, lat]: number[] = [
        parsedPostcodeResponse.result.longitude,
        parsedPostcodeResponse.result.latitude
    ]
    return [long, lat]
}
