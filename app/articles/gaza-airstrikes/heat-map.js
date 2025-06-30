import { Map as ReactMap, FullscreenControl, NavigationControl, Source, Layer } from "@vis.gl/react-maplibre";
import React from "react";
import gazaData from '@/constants/geojson-airstrikes-dataset.json';

export default function HeatMap() {
    // TODO: Componentize map?

    const GAZA_LATITUDE = 31.43411;
    const GAZA_LONGITUDE = 34.38361;
    const INITIAL_VIEW_STATE = {
        latitude: GAZA_LATITUDE,
        longitude: GAZA_LONGITUDE,
        zoom: 10,
        bearing: 0,
        pitch: 0,
    };
    const MAP_STYLE = "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json";
    const MAX_ZOOM_LEVEL = 15;

    const maxFatalities = Math.max(...(gazaData.features.map((airstrike) => parseInt(airstrike.properties.fatalities))));
    console.log(maxFatalities);

    const heatmapLayerConfig = {
        id: 'heatmap',
        maxzoom: MAX_ZOOM_LEVEL,
        type: 'heatmap',
        paint: {
            // Increase the heatmap weight based on frequency and property magnitude
            'heatmap-weight': ['interpolate', ['linear'], ['get', 'fatalities'], 0, 0, 30, 1],
            'heatmap-radius': ['interpolate', ['linear'], ['get', 'fatalities'], 0, 0, 90, 10],
            // Increase the heatmap color weight weight by zoom level
            // heatmap-intensity is a multiplier on top of heatmap-weight
            'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, MAX_ZOOM_LEVEL, 5],
            // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
            // Begin color ramp at 0-stop with a 0-transparancy color
            // to create a blur-like effect.
            'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(33,102,172,0)',
                0.2,
                'rgb(103,169,207)',
                0.4,
                'rgb(209,229,240)',
                0.6,
                'rgb(253,219,199)',
                0.8,
                'rgb(239,138,98)',
                0.9,
                'rgb(255,201,101)'
            ],
            // Adjust the heatmap radius by zoom level
            // Transition from heatmap to circle layer by zoom level
            'heatmap-opacity': 0.75
        }
    };

    return (
        <>
            <div className="h-[60lvh]">
                <ReactMap initialViewState={INITIAL_VIEW_STATE} mapStyle={MAP_STYLE}>
                    <FullscreenControl position="top-left"/>
                    <NavigationControl position="top-left"/>
                    <Source type="geojson" data={gazaData}>
                        <Layer {...heatmapLayerConfig} />
                    </Source>
                </ReactMap>
            </div>
        </>
    );
}