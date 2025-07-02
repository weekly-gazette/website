import Text from "@/components/text";
import React from "react";

export default function SectionOneCopy() {
    return (
        <div className="p-10">
            {Array.from(Array(10).keys()).map(() => (
                <div>
                    <Text h1>History</Text>
                    <Text className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </Text>
                    <br />
                </div>
            ))}
        </div>
    );
}