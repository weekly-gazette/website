import Timeline from "@/components/timeline";
import Text from "@/components/Text";
import dayjs from "dayjs";

export default function AirstrikesGeneral() {
    const events = [
        {
            date: "10-07-2023",
            label: "Hamas kills 1,200 Israeli civilians and takes 251 hostages, prompting Israel to launch airstrikes on the Gaza Strip",
        },
        {
            date: "10-13-2023",
            label: "Evacuation order from Northern Gaza of over 1.1 million Palestinians, prompting hundreds of thousands to flee to southern Gaza within 2 days."
        },
        {
            date: "10-27-2023",
            label: "Israeli ground invasion of the Gaza Strip begins"
        },
        {
            date: "10-28-2023",
            label: "By now, almost 4 in 10 Palestinians that were killed in Gaza were in the safe zone south of Wadi Gaza (according to Francesca Albanese, UN)"
        },
        {
            date: "11-17-2023",
            label: "Palestinian bureau says there are still over 400,000 - 800,000 (according to Palestinian Bureau of Statistics) civilians in Northern Gaza"
        },
        {
            date: "11-24-2023",
            label: "Israel and Hamas agree to a ceasefire mediated by Qatar"
        },
        {
            date: "12-03-2023",
            label: "Evacuations from eastern Khan Younis, Rafah to western Khan Younis"
        },
        {
            date: "01-29-2024",
            label: "thing happened"
        },
        {
            date: "05-14-2024",
            label: "thing happened"
        },
        {
            date: "07-07-2024",
            label: "thing happened"
        },
        {
            date: "07-10-2024",
            label: "thing happened"
        },
        {
            date: "08-07-2024",
            label: "thing happened"
        },
        {
            date: "08-17-2024",
            label: "thing happened"
        },
        {
            date: "08-22-2024",
            label: "thing happened"
        },
        {
            date: "10-06-2024",
            label: "thing happened"
        },
        {
            date: "01-19-2025",
            label: "thing happened"
        },
        {
            date: "03-18-2025",
            label: "thing happened"
        },
        {
            date: "06-29-2025",
            label: "thing happened"
        },
        {
            date: "07-16-2025",
            label: "thing happened"
        },
    ];

    const organizedEvents = Object.entries(events.reduce((acc, curr) => {
        const year = dayjs(curr.date).year();

        if (acc[year]) acc[year].push(curr);
        else acc[year] = [curr];

        return acc;
    }, {}));

    return (
        <div className="p-10">
            <div className="space-y-10">
                {organizedEvents.map(([year, events]) => (
                    <div>
                        <Text className="text-3xl font-bold pb-5">{year}</Text>
                        <Timeline events={events} />
                    </div>
                ))}
            </div>
        </div>
    );
}