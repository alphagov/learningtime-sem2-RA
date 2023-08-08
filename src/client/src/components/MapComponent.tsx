import { LatLngExpression } from 'leaflet'
import React, { useEffect, useState } from 'react'
import {
    Circle,
    CircleMarker,
    LayerGroup,
    MapContainer,
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

    const [markers, setMarkers] = useState([] as React.JSX.Element[])
    const buttons = createFilterButtons(Object.keys(data), setMarkers, data)

    useEffect(() => {
        const markers = createMarkers(data)
        setMarkers(markers)
    }, [data])

    return (
        <>
            {Object.keys(data).length > 0 ? (
                <>
                    <div>
                        {buttons}
                        <button
                            onClick={() => {
                                setMarkers(createMarkers(data))
                            }}
                        >
                            All
                        </button>
                    </div>
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
                                radius={1609.34}
                                fillOpacity={0.25}
                                fillColor="white"
                                color="black"
                            />
                            {...markers}
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
            <CircleMarker
                className={crimeEntry.category}
                key={`${crimeEntry.category}/${crimeEntry.id}`}
                center={[
                    Number(crimeEntry.location.latitude),
                    Number(crimeEntry.location.longitude)
                ]}
                radius={5}
                fillOpacity={1}
            >
                <Popup>{crimeEntry.category}</Popup>
            </CircleMarker>
        ))
    })
}

const createFilterButtons = (
    keys: string[],
    setMarkers: (markers: React.JSX.Element[]) => void,
    data: Record<string, PoliceAPIResponse[]>
) =>
    keys.flatMap((key) => (
        <button
            className={key}
            onClick={() => {
                const markers = createMarkers(data)
                const newMarkers = markers.filter(
                    (marker) =>
                        marker.key?.toString().split('/')[0] === `${key}`
                )
                setMarkers(newMarkers)
            }}
            id={key}
        >
            {key}
        </button>
    ))
