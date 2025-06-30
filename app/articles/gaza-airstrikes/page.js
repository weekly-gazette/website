"use client";
import 'maplibre-gl/dist/maplibre-gl.css';
import React from "react";
import SectionOneCopy from './section-one-copy';
import Map from '@/app/articles/gaza-airstrikes/map';
import LineGraph from "@/app/articles/gaza-airstrikes/line-graph";

export default function GazaAirstrikes() {
    return (
        <div className="h-[100vh] overflow-scroll bg-black text-white">
            <section className="grid grid-cols-2">
                <SectionOneCopy />
                <div className="flex justify-center">
                    <div className="items-center w-[90%] sticky top-[0lvh] h-lvh pt-[15lvh]">
                        <Map />
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-2">
                <SectionOneCopy />
                <div className="flex justify-center">
                    <div className="items-center w-[90%] sticky top-[0lvh] h-lvh pt-[15lvh]">
                        <LineGraph />
                    </div>
                </div>
            </section>
        </div>
);
}