"use client";
import 'maplibre-gl/dist/maplibre-gl.css';
import gazaData from '../../../constants/cleaned-gaza-data.json';
import React, { useMemo, useState } from "react";
import { Marker } from "react-map-gl/maplibre";
import Pin from "@/components/pin";
import { FullscreenControl, GeolocateControl, Map, NavigationControl } from "@vis.gl/react-maplibre";
import { Slider } from "@/components/ui/slider";
import dayjs from "dayjs";
import Text from '@/components/text';

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
const START_TIMESTAMP = 1672531200000;
const END_TIMESTAMP = 1750377600000;
const STEP_TIMESTAMP = 86400000;
const DATE_FORMATTING = 'YYYY-MM-DD';

export default function GazaAirstrikes() {
    // TODO: Add autoplay to slider
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
      <div className="flex h-[100vh] overflow-scroll">
          <div className="h-[300vh] w-1/2">
              <Text h1>History</Text>
              <Text paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Text h1>Airstrikes in Gaza</Text>
              <Text paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
          </div>
          <div className="sticky top-0 w-1/2">
              <div className="items-center w-[90%] h-[90lvh]">
                  <Text paragraph>
                      {formattedDate}, # of airstrikes: {selectedAirstrikes.length}, # of deaths: {selectedAirstrikes.reduce((acc, curr) => acc + parseInt(curr.fatalities), 0)}
                  </Text>
                  <Map initialViewState={INITIAL_VIEW_STATE} mapStyle={MAP_STYLE}>
                      <GeolocateControl position="top-left"/>
                      <FullscreenControl position="top-left"/>
                      <NavigationControl position="top-left"/>
                      {pins}
                  </Map>
                  <Slider
                      className="pt-5"
                      defaultValue={[START_TIMESTAMP]}
                      min={START_TIMESTAMP}
                      max={END_TIMESTAMP}
                      step={STEP_TIMESTAMP}
                      onValueCommit={([value]) => setDate(value)}
                  />
              </div>
          </div>
      </div>
    );
}