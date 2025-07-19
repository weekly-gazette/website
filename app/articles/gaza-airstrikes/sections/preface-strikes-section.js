import PrefaceHistory from "@/app/articles/gaza-airstrikes/copy/preface-history";
import Image from "@/components/image";
import gazaHistorical from "@/public/gaza_historical.jpg";
import React from "react";
import PrefaceStrikes from "@/app/articles/gaza-airstrikes/copy/preface-strikes";

export default function PrefaceStrikesSection() {
    return (
        <>
            <PrefaceStrikes />
            <div className="flex justify-center">
                <div className="flex justify-center w-[90%] sticky top-[0lvh] h-lvh pt-[15lvh]">
                    <div className="w-[40lvw]">
                        <Image src={gazaHistorical}/>
                    </div>
                </div>
            </div>
        </>
    );
}