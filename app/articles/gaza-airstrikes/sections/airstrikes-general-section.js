"use client";
import 'maplibre-gl/dist/maplibre-gl.css';
import AirstrikesGeneral from "@/app/articles/gaza-airstrikes/copy/airstrikes-general";
import Map from "@/app/articles/gaza-airstrikes/media/map";
import MapContext from "@/contexts/map-context";
import { useState, useMemo } from "react";
import dayjs from "dayjs";

export default function AirstrikesGeneralSection() {
    const [date, setDate] = useState(dayjs('2023-10-01').valueOf());
    const [location, setLocation] = useState(null);

    const mapContext = useMemo(() => ({
        date,
        location,
        setDate,
        setLocation,
    }), [date, location]);

    return (
        <MapContext value={mapContext}>
            <AirstrikesGeneral />
            <div className="flex justify-center">
                <div className="w-[90%] sticky top-[0lvh] lg:h-lvh lg:pt-[12lvh]">
                    <Map />
                </div>
            </div>
        </MapContext>
    )
}