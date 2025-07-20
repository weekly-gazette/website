import Text from "@/components/text";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { useContext } from "react";
import MapContext from "@/contexts/map-context";
import clsx from "clsx";

dayjs.extend(advancedFormat);

export default function Timeline({ events, ...props }) {
    const { date, setDate, setLocation } = useContext(MapContext);

    return (
        <div {...props} className="flex flex-col space-y-3">
            {events.map(({ date: eventDate, label, onClick }, index) => (
                <div className="grid grid-cols-[75px_40px_1fr] gap-x-3" key={eventDate}>
                    <Text className="whitespace-nowrap">{dayjs(eventDate).format('MMM. Do')}</Text>
                    <div className="flex flex-col items-center">
                        <button
                            className={clsx(
                                "transition-colors duration-500 ease-in-out",
                                "min-h-[3lvh] min-w-[3lvh] max-h-[3lvh] max-w-[3lvh] rounded-full hover:bg-red-400 cursor-pointer",
                                { "bg-red-400": dayjs(eventDate).isSameOrBefore(date), "bg-white": dayjs(eventDate).isAfter(date) }
                            )}
                            onClick={() => {
                                const timestamp = dayjs(eventDate).valueOf();

                                setDate(timestamp);
                            }}
                        />
                        {(index < events.length - 1) && <div className="h-full w-0 border border-gray-700 min-h-8 mt-3"/>}
                    </div>
                    <Text className="">{label}</Text>
                </div>
            ))}
        </div>
    );
}