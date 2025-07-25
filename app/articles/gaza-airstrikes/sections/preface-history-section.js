import PrefaceHistory from "@/app/articles/gaza-airstrikes/copy/preface-history";
import Image from "@/components/image";
import gazaHistorical from "@/public/gaza-historical.png";
import React from "react";
import Text from "@/components/text";

export default function PrefaceHistorySection() {
    return (
        <>
            <PrefaceHistory />
            <div className="flex justify-center">
                <div className="flex justify-center w-[90%] sticky top-[0lvh] lg:h-lvh lg:pt-[15lvh]">
                    <div className="flex flex-col items-center w-[90lvw] lg:w-[40lvw] space-y-3">
                        <Image src={gazaHistorical} priority />
                        <Text className="text-sm">Great Mosque of Gaza, late 1800s. Credit: Maison Bonfils</Text>
                    </div>
                </div>
            </div>
        </>
    );
}