import Timeline from "@/components/timeline";
import Text from "@/components/Text";
import dayjs from "dayjs";

export default function AirstrikesGeneral() {
    const events = [
        { date: '10-07-2023', label: "Hamas kills 1,195 Israelis and takes 251 hostages, prompting Israel to launch airstrikes on the Gaza Strip." },
        { date: '10-13-2023', label: "Israel instructs 1.1 million Palestinians to evacuate from northern Gaza to southern Gaza. Despite the evacuation order, airstrikes continue to strike safe zones in southern Gaza. Hundreds of thousands flee to southern Gaza within two days. Many evacuate by foot due to severe fuel shortages. According to the World Health Organization, the evacuation was a “death sentence” for many hospital patients due to the difficulty of moving them." },
        { date: '10-27-2023', label: "Israel launches its ground invasion of the Gaza Strip." },
        { date: '10-28-2023', label: "By this point, almost 4 in 10 Palestinians who were killed were in the safe zone in southern Gaza." },
        { date: '11-17-2023', label: "The Palestinian Bureau of Statistics estimates that up to 800,000 civilians are still in northern Gaza. Children were “hanging on by a thread”, according to UNICEF regional director. Israeli airstrikes continue in both southern and northern Gaza despite the high number of civilians present." },
        { date: '11-24-2023', label: "Israel and Hamas agree to a ceasefire mediated by Qatar, which lasts until Dec. 1st." },
        { date: '12-03-2023', label: "Palestinian civilians in eastern Khan Younis and Rafah (located in southern Gaza) are ordered to evacuate to western Khan Younis. Israel continues to strike western Khan Younis." },
        { date: '01-29-2024', label: "Israel instructs 88,000 Palestinians to evacuate the coastal side of Gaza City (in northern Gaza) to southern Gaza, despite increasingly crowded and poor conditions in the south. Israel continues to strike southern Gaza." },
        { date: '05-14-2024', label: "Israel instructs over 100,000 Palestinians in al-Karama, al-Zuhur (neighborhoods in northern Gaza, specifically in Jabalia), and Sultan (southern Gaza) to evacuate." },
        { date: '07-10-2024', label: "Israel issues a full evacuation of Gaza City to Deir al-Balah (near the middle of Gaza). According to the Associated Press, no mass exodus occurred as many residents believed that there was nowhere safe to go in the Gaza Strip. Israel continues to strike Deir al-Balah." },
        { date: '08-07-2024', label: "Israel issues evacuation orders to Palestinian civilians in Beit Hanoun and Beit Lahiya (located in northeastern Gaza)." },
        { date: '08-17-2024', label: "Israel issues evacuation orders for Maghazi refugee camp (located in southern Gaza)." },
        { date: '08-22-2024', label: "Israel issues evacuation orders for residents of Deir el-Balah, which is where Palestinians from Gaza City were told to evacuate to only one month prior." },
        { date: '10-06-2024', label: "Israel issues mass evacuation order of over 300,000 Palestinians from northern Gaza, Khan Younis, and Rafah (located in southern Gaza) to the Al-Mawasi humanitarian zone in southern Gaza." },
        { date: '01-19-2025', label: "Israel and Hamas agree to a ceasefire and hostage-and-prisoner exchanges, mediated by Egypt, Qatar, and the United States. Both Israel and Hamas violate the ceasefire by intermittently launching airstrikes at each other." },
        { date: '03-18-2025', label: "Israel launches surprise airstrikes on the Gaza Strip, killing 400 Palestinians and formally ending the ceasefire." },
        { date: '06-29-2025', label: "Israel issues evacuation orders of northern Gaza (Gaza City, Jabalia) to southern Gaza." },
        { date: '07-16-2025', label: "Israel again issues orders to residents in northern Gaza to evacuate to Al-Mawasi in southern Gaza, despite worsening conditions in Al-Mawasi." }
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