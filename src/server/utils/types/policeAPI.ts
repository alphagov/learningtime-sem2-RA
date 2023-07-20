export interface PoliceAPIResponse {
    category: string
    location_type: string
    location: {
        latitude: string
        street: {
            id: number
            name: string
        }
        longitude: string
    }
    context: string
    outcome_status: null | string // Replace 'string' with the actual type if the outcome_status can be something other than a string or null.
    persistent_id: string
    id: number
    location_subtype: string
    month: string
}
