import Text from "@/components/text";
import gazaData from '@/constants/airstrikes-dataset.json';
import dayjs from "dayjs";
import { Map as ReactMap, FullscreenControl, Marker, NavigationControl } from "@vis.gl/react-maplibre";
import { Slider } from "@/components/ui/slider";
import React, { useMemo, useState, useEffect } from "react";
import Pin from "@/components/pin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCircleStop } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/button";
import clsx from "clsx";

export default function Map() {
    // Map configuration
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

    // Date slider configuration
    const START_TIMESTAMP = dayjs('2023-10-01').valueOf();
    const END_TIMESTAMP = dayjs('2025-06-20').valueOf();
    const STEP_TIMESTAMP = 86400000;
    const DATE_FORMATTING = 'YYYY-MM-DD';

    // Animation configuration
    const SLOW_DELAY = 500;
    const MEDIUM_DELAY = 250;
    const FAST_DELAY = 100;

    // Map state variables
    const [animationDelay, setAnimationDelay] = useState(MEDIUM_DELAY);
    const [animationPlaying, setAnimationPlaying] = useState(false);
    const [animationInterval, setAnimationInterval] = useState(null);
    const [date, setDate] = useState(START_TIMESTAMP);
    const formattedDate = useMemo(() => dayjs(date).format(DATE_FORMATTING), [date]);
    const selectedAirstrikes = useMemo(() =>
            gazaData.filter((airstrike) => airstrike.event_date === formattedDate),
        [formattedDate]
    );
    const cumulativeStatistics = React.useMemo(() => {
       const counts = gazaData.reduce((acc, curr) => {
            const airstrikeDate = dayjs(curr.event_date);
            const queryDate = dayjs(date);

            if (airstrikeDate.isBefore(queryDate)) {
                acc.airstrikesCount += 1;
                acc.deathsCount += parseInt(curr.fatalities);
            }

            return acc;
       }, { airstrikesCount: 0, deathsCount: 0 });

       return {
           airstrikesCount: counts.airstrikesCount.toLocaleString(),
           deathsCount: counts.deathsCount.toLocaleString(),
       };
    }, [date]);

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

    useEffect(() => {
        if (animationInterval) clearInterval(animationInterval);

        if (animationPlaying) {
            const interval = setInterval(() =>
                setDate((prevDate) => prevDate + STEP_TIMESTAMP),
                animationDelay
            );

            setAnimationInterval(interval);
        } else {
            clearInterval(animationInterval);
        }
    }, [animationPlaying, animationDelay]);

    useEffect(() => {
        if (date === END_TIMESTAMP) {
            clearInterval(animationInterval);

            setAnimationPlaying(false);
        }
    }, [date, animationInterval]);

    return (
        <>
            <div className="w-full grid grid-cols-2 pb-5">
                <div className="flex flex-col items-center justify-center">
                    <Text className="text-4xl font-black">
                        {cumulativeStatistics.airstrikesCount}
                    </Text>
                    <Text className="text-gray-300 text-lg">Airstrikes</Text>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Text className="text-4xl font-black">
                        {cumulativeStatistics.deathsCount}
                    </Text>
                    <Text className="text-gray-300 text-lg">Deaths</Text>
                </div>
            </div>
            <div className="h-[50lvh]">
                <ReactMap initialViewState={INITIAL_VIEW_STATE} mapStyle={MAP_STYLE}>
                    <FullscreenControl position="top-left"/>
                    <NavigationControl position="top-left"/>
                    {pins}
                </ReactMap>
            </div>
            <div className="flex gap-x-2 pt-5 items-center">
                <button
                    onClick={() => setAnimationPlaying((prevState) => !prevState)}
                    className="bg-opacity-0 cursor-pointer"
                >
                    <FontAwesomeIcon
                        icon={animationPlaying ? faCircleStop : faCirclePlay}
                        className="text-3xl hover:text-gray-200"
                    />
                </button>
                <Slider
                    defaultValue={[START_TIMESTAMP]}
                    min={START_TIMESTAMP}
                    max={END_TIMESTAMP}
                    step={STEP_TIMESTAMP}
                    onValueChange={([value]) => setDate(value)}
                    value={[date]}
                />
            </div>
            <div className="flex flex-col items-center justify-center">
                <Text className="text-md font-black whitespace-nowrap pt-3">
                    {dayjs(formattedDate).format('MMMM DD, YYYY')}
                </Text>
            </div>
            <div className={clsx(
                "grid grid-cols-3 gap-x-5 pt-5 transition-opacity duration-250 ease-in-out",
                { "opacity-100": animationPlaying, "opacity-0": true },
            )}>
                <Button
                    dark
                    className={clsx("flex justify-center", { "bg-gray-700": animationDelay === SLOW_DELAY })}
                    onClick={() => setAnimationDelay(SLOW_DELAY)}
                >
                    Slow
                </Button>
                <Button
                    dark
                    className={clsx("flex justify-center", { "bg-gray-700": animationDelay === MEDIUM_DELAY })}
                    onClick={() => setAnimationDelay(MEDIUM_DELAY)}
                >
                    Medium
                </Button>
                <Button
                    dark
                    className={clsx("flex justify-center", { "bg-gray-700": animationDelay === FAST_DELAY })}
                    onClick={() => setAnimationDelay(FAST_DELAY)}
                >
                    Fast
                </Button>
            </div>
        </>
    )
}