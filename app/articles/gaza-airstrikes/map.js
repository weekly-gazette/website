import Text from "@/components/text";
import gazaData from '@/constants/airstrikes-dataset.json';
import dayjs from "dayjs";
import { Map as ReactMap, FullscreenControl, GeolocateControl, Marker, NavigationControl} from "@vis.gl/react-maplibre";
import {Slider} from "@/components/ui/slider";
import React, {useMemo, useState} from "react";
import Pin from "@/components/pin";

export default function Map() {
    // Map configuration
    const GAZA_LATITUDE = 31.43411;
    const GAZA_LONGITUDE = 34.38361;
    const INITIAL_VIEW_STATE = {
        latitude: GAZA_LATITUDE,
        longitude: GAZA_LONGITUDE,
        zoom: 10,
        bearing: 0,
        pitch: 0,
    };
    const MAP_STYLE = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

    // Date slider configuration
    const START_TIMESTAMP = 1672531200000;
    const END_TIMESTAMP = 1750377600000;
    const STEP_TIMESTAMP = 86400000;
    const DATE_FORMATTING = 'YYYY-MM-DD';

    const [date, setDate] = useState(START_TIMESTAMP);
    const formattedDate = useMemo(() => dayjs(date).format(DATE_FORMATTING), [date]);
    const selectedAirstrikes = useMemo(() =>
            gazaData.filter((airstrike) => airstrike.event_date === formattedDate),
        [formattedDate]
    );

    const pins = useMemo(() => selectedAirstrikes
        .map((airstrike) => (
            <Marker
                key={airstrike.event_id_cnty}
                longitude={parseFloat(airstrike.longitude)}
                latitude={parseFloat(airstrike.latitude)}
                anchor="bottom"
            >
                <Pin />
            </Marker>
        ), [selectedAirstrikes]));

    return (
        <div className="items-center w-[90%] h-[90lvh]">
            <Text paragraph>
                {formattedDate},
                # of daily airstrikes: {selectedAirstrikes.length},
                # of daily deaths: {selectedAirstrikes.reduce((acc, curr) => acc + parseInt(curr.fatalities), 0)}
                # of cumulative
                airstrikes: {gazaData.reduce((acc, curr) => acc + (dayjs(curr.event_date).isBefore(dayjs(date)) ? 1 : 0), 0)}
                # of cumulative
                fatalities: {gazaData.reduce((acc, curr) => acc + parseInt(dayjs(curr.event_date).isBefore(dayjs(date)) ? curr.fatalities : 0), 0)}
            </Text>
            <ReactMap initialViewState={INITIAL_VIEW_STATE} mapStyle={MAP_STYLE}>
                <GeolocateControl position="top-left"/>
                <FullscreenControl position="top-left"/>
                <NavigationControl position="top-left"/>
                {pins}
            </ReactMap>
            <Slider
                className="pt-5"
                defaultValue={[START_TIMESTAMP]}
                min={START_TIMESTAMP}
                max={END_TIMESTAMP}
                step={STEP_TIMESTAMP}
                onValueChange={([value]) => setDate(value)}
            />
        </div>
    )
}