export const getPoliceAPIData = async ([lat, long]: number[]): Promise<
    Record<string, unknown> | string
> => {
    const url = `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${long}`
    const data = await fetch(url, {
        method: 'GET'
    })

    const parsedData = await data.json()
    if (parsedData.length === 0) {
        // The api does not validate long/lat input and instead returns an empty [] when given invalid long/lat
        return 'No Data returned for specified area'
    }
    return parsedData
}
