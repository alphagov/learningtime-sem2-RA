import { LatLngExpression } from 'leaflet'
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

interface MapProps {
    coords: LatLngExpression
}

export const Map = ({ coords }: MapProps) => {
    const ChangeView = ({ center }) => {
        const map = useMap()
        map.flyTo(center)
        return null
    }

    return (
        <MapContainer center={coords} zoom={13} scrollWheelZoom={false}>
            <ChangeView center={coords} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coords}>
                <Popup>
                    Your postcode location. <br /> Is here.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
