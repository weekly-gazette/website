import Image from "@/components/image";
import gazaMosque from "@/public/gaza-mosque.png";
import React from "react";
import PrefaceStrikes from "@/app/articles/gaza-airstrikes/copy/preface-strikes";
import Text from "@/components/text";

export default function PrefaceStrikesSection() {
    return (
        <>
            <PrefaceStrikes />
            <div className="flex justify-center">
                <div className="flex justify-center w-[90%] sticky top-[0lvh] h-lvh pt-[12lvh]">
                    <div className="flex flex-col items-center w-[90lvw] lg:w-[40lvw] space-y-3">
                        <Image src={gazaMosque} />
                        <Text className="text-sm">Toppled minaret in Nuseirat refugee camp, central Gaza. Credit: Eyad Baba, AFP</Text>
                    </div>
                </div>
            </div>
        </>
    );
}