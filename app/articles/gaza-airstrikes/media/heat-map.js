import { Map as ReactMap, FullscreenControl, NavigationControl, Source, Layer } from "@vis.gl/react-maplibre";
import React from "react";
import gazaData from '@/constants/geojson-airstrikes-dataset.json';
import dayjs from 'dayjs';
import Text from '@/components/text';

export default function HeatMap() {
    // TODO: Componentize map?

    const GAZA_LATITUDE = 31.43411;
    const GAZA_LONGITUDE = 34.38361;
    const INITIAL_VIEW_STATE = {
        latitude: GAZA_LATITUDE,
        longitude: GAZA_LONGITUDE,
        zoom: 9,
        bearing: 0,
        pitch: 0,
    };
    const MAP_STYLE = "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json";
    const MAX_ZOOM_LEVEL = 15;

    const heatmapLayerConfig = {
        id: 'heatmap',
        maxzoom: MAX_ZOOM_LEVEL,
        type: 'heatmap',
        paint: {
            // Recency-based weight (date scaled from old to new)
            'heatmap-weight': [
                '*',
                [
                    'interpolate',
                    ['linear'],
                    ['get', 'date'],
                    dayjs('2023-10-01').valueOf(), 0,
                    dayjs('2025-06-20').valueOf(), 1
                ],
            ],

            // Radius scales with fatalities
            'heatmap-radius': [
                'interpolate',
                ['linear'],
                ['get', 'fatalities'],
                0, 5, 20, 15,
            ],

            // Intensity increases slightly with zoom
            'heatmap-intensity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0, 1,
                12, 2,
                22, 3
            ],

            // Color based on overall density — keep stops clean and interpretable
            'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0, 'rgba(222, 205, 32, 0)',
                0.01, 'rgba(222, 205, 32)',
                1, 'rgb(208,18,0)'
            ],

            // Opacity
            'heatmap-opacity': 0.7
        }
    };

    return (
        <div>
            <div className="w-full flex justify-center py-3">
                <Text h1>Heatmap of Airstrikes Since Oct. 2023</Text>
            </div>
            <div className="h-[60lvh]">
                <ReactMap initialViewState={INITIAL_VIEW_STATE} mapStyle={MAP_STYLE}>
                    <FullscreenControl position="top-left"/>
                    <NavigationControl position="top-left"/>
                    <Source type="geojson" data={gazaData}>
                        <Layer {...heatmapLayerConfig} />
                    </Source>
                </ReactMap>
            </div>
            <div className="flex flex-col gap-y-5 pt-5">
                <div>
                    <div className="flex justify-between pb-3">
                        <Text paragraph>Older</Text>
                        <Text paragraph>Newer</Text>
                    </div>
                    <div className="h-[1.5lvh] w-full bg-gradient-to-r from-yellow-300 to-red-600 rounded-sm"/>
                </div>
                <div className="flex justify-between w-full">
                    <div className="flex items-center gap-x-2">
                        <Text paragraph>Less casualties</Text>
                        <div className="rounded-xl border border-white border-dotted h-[15px] w-[15px]"/>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Text paragraph>More casualties</Text>
                        <div className="rounded-3xl border border-white border-dotted h-[35px] w-[35px]"/>
                    </div>
                </div>
            </div>
        </div>
    );
}