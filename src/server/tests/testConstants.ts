export const TEST_VALID_POSTCODE = 'SW1A2AA'
export const TEST_VALID_POSTCODE_LONG_LAT = [-0.127695, 51.50354]
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
export const TEST_POSTCODE_API_RESPONSE: Response = {
    status: 200,
    json: async () => {
        return {
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

export const TEST_INVALID_POSTCODE = 'ZZ42BF'
export const TEST_INVALID_POSTCODE_API_RESPONSE: Response = {
    status: 200,
    json: async () => {
        return {
            status: 404,
            error: 'Postcode not found'
        }
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
