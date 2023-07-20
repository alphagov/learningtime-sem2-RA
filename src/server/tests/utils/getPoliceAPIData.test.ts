import { getPoliceAPIData } from '../../utils/getPoliceAPIData'
import { when } from 'jest-when'
import {
    TEST_POLICE_API_FETCH_RESPONSE,
    TEST_POLICE_API_FETCH_RESPONSE_NO_DATA,
    TEST_POLICE_API_RESPONSE_DATA,
    TEST_VALID_POLICE_API_LAT_LONG
} from '../testConstants'

const fetchSpy = jest.spyOn(global, 'fetch')

describe('tests for fetch policeAPI response', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })
    it('fetches all crime data for a given longitude and latitude', async () => {
        when(fetchSpy)
            .calledWith(
                `https://data.police.uk/api/crimes-street/all-crime?lat=${TEST_VALID_POLICE_API_LAT_LONG[0]}&lng=${TEST_VALID_POLICE_API_LAT_LONG[1]}`,
                {
                    method: 'GET'
                }
            )
            .mockResolvedValue(TEST_POLICE_API_FETCH_RESPONSE)
        const res = await getPoliceAPIData(TEST_VALID_POLICE_API_LAT_LONG)

        expect(res).toStrictEqual(TEST_POLICE_API_RESPONSE_DATA)
    })
    it('handles the case where no data is returned', async () => {
        when(fetchSpy)
            .calledWith(
                `https://data.police.uk/api/crimes-street/all-crime?lat=${TEST_VALID_POLICE_API_LAT_LONG[0]}&lng=${TEST_VALID_POLICE_API_LAT_LONG[1]}`,
                {
                    method: 'GET'
                }
            )
            .mockResolvedValue(TEST_POLICE_API_FETCH_RESPONSE_NO_DATA)

        const res = await getPoliceAPIData(TEST_VALID_POLICE_API_LAT_LONG)
        expect(res).toStrictEqual('No Data returned for specified area')
    })
})
