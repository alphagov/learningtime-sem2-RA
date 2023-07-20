import { groupBy } from '../utils/groupByObjectKey'
import { PoliceAPIResponse } from '../utils/types/policeAPI'

export const TEST_VALID_POSTCODE = 'SW1A2AA'
export const TEST_VALID_POSTCODE_LAT_LONG = [51.50354, -0.127695]
export const TEST_200_FETCH_RESPONSE: Response = {
    status: 200,
    json: async () => {
        return {}
    },
    ok: true,
    redirected: false,
    headers: {} as Headers,
    statusText: '',
    type: 'default',
    body: null,
    url: '',
    clone: () => {
        return {} as Response
    },
    bodyUsed: false,
    arrayBuffer: async () => {
        return {} as ArrayBuffer
    },
    blob: async () => {
        return {} as Blob
    },
    formData: async () => {
        return {} as FormData
    },
    text: async () => {
        return ''
    }
}
export const TEST_POSTCODE_API_RESPONSE = {
    status: 200,
    result: {
        postcode: 'SW1A 2AA',
        quality: 1,
        eastings: 530047,
        northings: 179951,
        country: 'England',
        nhs_ha: 'London',
        longitude: -0.127695,
        latitude: 51.50354,
        european_electoral_region: 'London',
        primary_care_trust: 'Westminster',
        region: 'London',
        lsoa: 'Westminster 018C',
        msoa: 'Westminster 018',
        incode: '2AA',
        outcode: 'SW1A',
        parliamentary_constituency: 'Cities of London and Westminster',
        admin_district: 'Westminster',
        parish: 'Westminster, unparished area',
        admin_county: null,
        date_of_introduction: '198001',
        admin_ward: 'St. James\'s',
        ced: null,
        ccg: 'NHS North West London',
        nuts: 'Westminster',
        pfa: 'Metropolitan Police',
        codes: {
            admin_district: 'E09000033',
            admin_county: 'E99999999',
            admin_ward: 'E05013806',
            parish: 'E43000236',
            parliamentary_constituency: 'E14000639',
            ccg: 'E38000256',
            ccg_id: 'W2U3Z',
            ced: 'E99999999',
            nuts: 'TLI32',
            lsoa: 'E01004736',
            msoa: 'E02000977',
            lau2: 'E09000033',
            pfa: 'E23000001'
        }
    }
}

export const TEST_POSTCODE_API_FETCH_RESPONSE = {
    ...TEST_200_FETCH_RESPONSE,
    json: async () => {
        return TEST_POSTCODE_API_RESPONSE
    }
}

export const TEST_INVALID_POSTCODE = 'ZZ42BF'
export const TEST_INVALID_POSTCODE_API_RESPONSE = {
    status: 404,
    error: 'Postcode not found'
}
export const TEST_INVALID_POSTCODE_API_FETCH_RESPONSE = {
    ...TEST_200_FETCH_RESPONSE,
    json: async () => {
        return TEST_INVALID_POSTCODE_API_RESPONSE
    }
}

export const TEST_POLICE_API_RESPONSE_DATA: PoliceAPIResponse[] = [
    {
        category: 'anti-social-behaviour',
        location_type: 'Force',
        location: {
            latitude: '51.504126',
            street: { id: 1682088, name: 'On or near Joan Street' },
            longitude: '-0.105409'
        },
        context: '',
        outcome_status: null,
        persistent_id: '',
        id: 110505667,
        location_subtype: '',
        month: '2023-05'
    },
    {
        category: 'anti-social-behaviour',
        location_type: 'Force',
        location: {
            latitude: '51.514684',
            street: { id: 1676465, name: 'On or near Argyll Street' },
            longitude: '-0.140844'
        },
        context: '',
        outcome_status: null,
        persistent_id: '',
        id: 110505724,
        location_subtype: '',
        month: '2023-05'
    }
]

export const TEST_POLICE_API_RESPONSE_DATA_GROUPED_BY_CRIME_TYPE = groupBy(
    TEST_POLICE_API_RESPONSE_DATA,
    (e) => e.category
)
export const TEST_POLICE_API_FETCH_RESPONSE = {
    ...TEST_200_FETCH_RESPONSE,
    json: async () => {
        return [...TEST_POLICE_API_RESPONSE_DATA]
    }
}

export const TEST_POLICE_API_FETCH_RESPONSE_NO_DATA = {
    ...TEST_200_FETCH_RESPONSE,
    json: async () => {
        return []
    }
}

export const TEST_VALID_POLICE_API_LAT_LONG = [...TEST_VALID_POSTCODE_LAT_LONG]
