import Text from "@/components/text";
import React from "react";

export default function Numbers() {
    return (
        <div className="grid grid-cols-1 space-y-10 lg:space-y-0 lg:grid-cols-3 py-10">
            <div className="text-center flex flex-col items-center justify-center gap-y-2">
                <Text className="text-5xl font-black">
                    16.3
                </Text>
                <Text className="text-gray-300 text-xl">Airstrike events per day</Text>
            </div>
            <div className="text-center flex flex-col items-center justify-center gap-y-2">
                <Text className="text-5xl font-black">
                    4.5
                </Text>
                <Text className="text-gray-300 text-xl">Casualties per airstrike event</Text>
            </div>
            <div className="text-center flex flex-col items-center justify-center gap-y-2">
                <Text className="text-5xl font-black">
                    9.2 in 10
                </Text>
                <Text className="text-gray-300 text-xl">Residential buildings destroyed</Text>
            </div>
        </div>
    );
}