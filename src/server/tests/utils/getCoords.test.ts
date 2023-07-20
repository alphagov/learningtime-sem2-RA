import { when } from 'jest-when'
import { getCoords } from '../../utils/getCoords'
import {
    TEST_INVALID_POSTCODE,
    TEST_INVALID_POSTCODE_API_RESPONSE,
    TEST_POSTCODE_API_RESPONSE,
    TEST_VALID_POSTCODE,
    TEST_VALID_POSTCODE_LONG_LAT
} from '../testConstants'

const fetchSpy = jest.spyOn(global, 'fetch')

describe('Testing the get coordinates function', () => {
    it('fetches the longitude and latitude for a given postcode and returns this in an array', async () => {
        when(fetchSpy)
            .calledWith(`api.postcodes.io/postcodes/${TEST_VALID_POSTCODE}`, {
                method: 'GET'
            })
            .mockResolvedValue(TEST_POSTCODE_API_RESPONSE)
        const response = await getCoords(TEST_VALID_POSTCODE)
        expect(response).toEqual(TEST_VALID_POSTCODE_LONG_LAT)
    })

    it('rejects an invalid postcode input', async () => {
        when(fetchSpy)
            .calledWith(`api.postcodes.io/postcodes/${TEST_INVALID_POSTCODE}`, {
                method: 'GET'
            })
            .mockResolvedValue(TEST_INVALID_POSTCODE_API_RESPONSE)
        const response = await getCoords(TEST_INVALID_POSTCODE)
        expect(response).toEqual('Invalid postcode, please try again')
    })
})
