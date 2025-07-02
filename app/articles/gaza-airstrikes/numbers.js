import Text from "@/components/text";
import React from "react";

export default function Numbers() {
    return (
        <div className="flex flex-col gap-y-15">
            <div className="flex flex-col items-center justify-center gap-y-2">
                <Text className="text-5xl font-black">
                    16.3
                </Text>
                <Text className="text-gray-300 text-xl">Airstrikes per day</Text>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
                <Text className="text-5xl font-black">
                    4.5
                </Text>
                <Text className="text-gray-300 text-xl">Deaths per airstrike</Text>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
                <Text className="text-5xl font-black">
                    9 in 10
                </Text>
                <Text className="text-gray-300 text-xl">Residential buildings destroyed</Text>
            </div>
        </div>
    );
}