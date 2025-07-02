"use client";
import 'maplibre-gl/dist/maplibre-gl.css';
import React from "react";
import SectionOneCopy from './section-one-copy';
import Map from '@/app/articles/gaza-airstrikes/map';
import LineGraph from '@/app/articles/gaza-airstrikes/line-graph';
import HeatMap from '@/app/articles/gaza-airstrikes/heat-map';
import Numbers from '@/app/articles/gaza-airstrikes/numbers';
import Text from "@/components/text";
import Image from "@/components/image";
import gazaHistorical from '@/public/gaza_historical.jpg';

export default function GazaAirstrikes() {
    return (
        <div className="h-[100vh] overflow-scroll bg-black text-white">
            <header className="px-10 pt-10 pb-5">
                <Text className="text-5xl font-bold">Gaza&apos;s Airstrikes, Visualized</Text>
            </header>
            <section className="grid grid-cols-2">
                <SectionOneCopy />
                <div className="flex justify-center">
                    <div className="flex justify-center w-[90%] sticky top-[0lvh] h-lvh pt-[15lvh]">
                        <div className="w-[40lvw]">
                            <Image src={gazaHistorical} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-2">
                <SectionOneCopy/>
                <div className="flex justify-center">
                    <div className="w-[90%] sticky top-[0lvh] h-lvh pt-[5lvh]">
                        <Map/>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-2">
                <SectionOneCopy/>
                <div className="flex justify-center">
                    <div className="w-[90%] sticky top-[0lvh] h-lvh pt-[30lvh]">
                        <Numbers/>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-2">
                <SectionOneCopy/>
                <div className="flex justify-center">
                    <div className="w-[90%] sticky top-[0lvh] h-lvh pt-[15lvh]">
                        <LineGraph/>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-2">
                <SectionOneCopy/>
                <div className="flex justify-center">
                    <div className="w-[90%] sticky top-[0lvh] h-lvh pt-[15lvh]">
                        <HeatMap/>
                    </div>
                </div>
            </section>
        </div>
    );
}