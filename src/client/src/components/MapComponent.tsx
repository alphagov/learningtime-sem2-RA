import { LatLngExpression } from 'leaflet'
import React from 'react'
import {
    Circle,
    LayerGroup,
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap
} from 'react-leaflet'
import { PoliceAPIResponse } from '../../../server/utils/types/policeAPI'

interface MapProps {
    coords: LatLngExpression
    data: Record<string, PoliceAPIResponse[]>
}

export const Map = ({ coords, data }: MapProps) => {
    const ChangeView = ({ center }) => {
        const map = useMap()
        map.flyTo(center, 14)
        return null
    }

    const markers = createMarkers(data)
    const buttons = createFilterButtons(Object.keys(data))

    return (
        <>
            {Object.keys(data).length > 0 ? (
                <>
                    <div>{buttons}</div>
                    <button>all</button>
                    <MapContainer
                        center={coords}
                        zoom={14}
                        scrollWheelZoom={false}
                    >
                        <ChangeView center={coords} />
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LayerGroup>
                            <Circle
                                center={coords}
                                pathOptions={{ fillColor: 'blue' }}
                                radius={1609.34}
                            />
                            {markers}
                        </LayerGroup>
                    </MapContainer>
                </>
            ) : (
                ''
            )}
        </>
    )
}

const createMarkers = (
    data: Record<string, PoliceAPIResponse[]>
): React.JSX.Element[] => {
    return Object.keys(data).flatMap((key) => {
        const dataArr = data[key]
        return dataArr.flatMap((crimeEntry) => (
            <Marker
                key={`${crimeEntry.category}/${crimeEntry.id}`}
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

const createFilterButtons = (keys: string[]) =>
    keys.flatMap((key) => <button>{key}</button>)
