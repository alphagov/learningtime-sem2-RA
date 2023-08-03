import { LatLngExpression } from 'leaflet'
import React from 'react'
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
                key={`${crimeEntry.category}/${crimeEntry.id}`}
                center={[
                    Number(crimeEntry.location.latitude),
                    Number(crimeEntry.location.longitude)
                ]}
                color={colourDict[crimeEntry.category]}
                radius={5}
                fillOpacity={1}
            >
                <Popup>{crimeEntry.category}</Popup>
            </CircleMarker>
        ))
    })
}

const createFilterButtons = (keys: string[]) =>
    keys.flatMap((key) => <button id={key}>{key}</button>)

const colourDict = {
    'anti-social-behaviour': '#1010ff',
    burglary: '#ff1010',
    'criminal-damage-arson': '#10ff10',
    drugs: '#ffff10',
    'other-theft': '#ff10ff',
    'possession-of-weapons': '#10ffff',
    'public-order': '#a010ff',
    robbery: '#ff6010',
    shoplifting: '#10ff60',
    'theft-from-the-person': '#60ff10',
    'vehicle-crime': '#0050ff',
    'violent-crime': '#ff1060',
    'other-crime': '#60ffff'
}
