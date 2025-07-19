"use client";
import React from "react";
import Preface from './copy/preface';
import LineGraph from '@/app/articles/gaza-airstrikes/media/line-graph';
import HeatMap from '@/app/articles/gaza-airstrikes/media/heat-map';
import Numbers from '@/app/articles/gaza-airstrikes/media/numbers';
import Text from "@/components/text";
import PrefaceSection from "@/app/articles/gaza-airstrikes/sections/preface-section";
import AirstrikesGeneralSection from "@/app/articles/gaza-airstrikes/sections/airstrikes-general-section";

export default function GazaAirstrikes() {
    return (
        <div className="h-[100vh] overflow-scroll bg-black text-white">
            <header className="px-10 pt-10 pb-5">
                <Text className="text-5xl font-bold">Gaza&apos;s Airstrikes, Visualized</Text>
            </header>
            <section className="grid grid-cols-2">
                <PrefaceSection />
            </section>
            <section className="grid grid-cols-2">
                <AirstrikesGeneralSection />
            </section>
            <section className="w-full flex justify-center items-center">
                <div className="w-3/4">
                    <Numbers />
                </div>
            </section>
            <section className="grid grid-cols-2">
                <Preface />
                <div className="flex justify-center">
                    <div className="w-[90%] sticky top-[0lvh] h-lvh pt-[10lvh]">
                        <LineGraph />
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-2">
                <Preface/>
                <div className="flex justify-center">
                    <div className="w-[90%] sticky top-[0lvh] h-lvh pt-[10lvh]">
                        <HeatMap/>
                    </div>
                </div>
            </section>
        </div>
    );
}