import { PoliceAPIResponse } from './policeAPI'

export const sortObject = (obj: Record<string, PoliceAPIResponse[]>) =>
    Object.fromEntries(
        Object.entries(obj).sort(([_key, a], [_, b]) =>
            a.length < b.length ? 1 : -1
        )
    )
