import { LatLngExpression } from 'leaflet'
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { PoliceAPIResponse } from '../../../server/utils/types/policeAPI'

interface MapProps {
    coords: LatLngExpression
    data: Record<string, PoliceAPIResponse[]>
}

export const Map = ({ coords, data }: MapProps) => {
    const ChangeView = ({ center }) => {
        const map = useMap()
        map.flyTo(center, 13)
        return null
    }

    return (
        <>
            {Object.keys(data).length > 0 ? (
                <MapContainer center={coords} zoom={13} scrollWheelZoom={false}>
                    <ChangeView center={coords} />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {Object.keys(data).length > 0 ? createMarkers(data) : ''}
                </MapContainer>
            ) : (
                ''
            )}
        </>
    )
}

const createMarkers = (data: Record<string, PoliceAPIResponse[]>) => {
    return Object.keys(data).flatMap((key) => {
        const dataArr = data[key]
        return dataArr.flatMap((crimeEntry) => (
            <Marker
                key={crimeEntry.id}
                position={[
                    Number(crimeEntry.location.latitude),
                    Number(crimeEntry.location.longitude)
                ]}
            >
                <Popup>{crimeEntry.category}</Popup>
            </Marker>
        ))
    })
}
