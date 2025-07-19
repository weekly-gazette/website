import Text from "@/components/text";

export default function PrefaceAnalysis() {
    return (
        <div className="p-10">
            <Text className="text-lg">
                From an investigation by Israeli newspaper +972 Magazine, former IDF intelligence members involved in
                planning airstrikes stated that one reason for bombing civilian targets was that “a deliberate attack on
                Palestinian society will exert ‘civil pressure’ on Hamas.” Moreover, an intelligence member stated that
                “if they [IDF intelligence] would tell the whole world that the [Islamic Jihad] offices on the 10th
                floor are not important as a target, but that its existence is a justification to bring down the entire
                high-rise with the aim of pressuring civilian families who live in it in order to put pressure on
                terrorist organizations, this would itself be seen as terrorism. So they do not say it.”
                <br/><br/>
                Beyond intentional targeting, Gazans can also be killed because of carelessness. According to a
                former intelligence member, after October 7th, the “criteria around harming Palestinian civilians were
                significantly relaxed”, and that there have been “cases in which we shell based on a wide cellular
                pinpointing of where the target is, killing civilians … often done to save time, instead of doing a
                little more work to get a more accurate pinpointing.”
                <br/><br/>
                This continues a pattern previously seen in Israeli warfare: disproportionate force — a strategy
                referred to as the Dahiyeh Doctrine. The term was coined after the 2006 Israeli invasion of Dahiyeh,
                Lebanon, where IDF General Gadi Eisenkot stated that: “We will apply disproportionate force on it and
                cause great damage and destruction there. From our standpoint, these are not civilian villages, they are
                [Hezbollah] military bases.”
                <br/><br/>
                Interestingly, even Eisenkot suggested in late 2024 that the use of disproportionate force in Gaza had gone too
                far, stating that the military offensive “went very seriously wrong” — albeit because the destruction of
                Gaza would burden Israel economically after the war. Eisenkot is among many former Israeli officers who
                oppose the continuation of Israel’s offensive. In April 2025, over 450 Mossad veterans and reserve
                medical officers signed letters arguing for an end to the war. One letter stated that “the
                continued fighting in Gaza is intended primarily to serve political and personal interests without a
                security purpose.”
                <br/><br/>
                Even in the event of a ceasefire between Israel and Hamas, the damage to the people of the Gaza Strip
                has already been done. Millions of Gazans are now without a home, food and clean drinking water, or
                their children, parents, brothers, and sisters. In this article, we’ll attempt to paint a comprehensive
                picture of the role that airstrikes have played in Israel’s genocide by visualizing data from the ACLED
                (Armed Conflict Location and Event Data).
                <br/><br/>
                By design, data from the ACLED is conservative — only including incidents that can be independently
                verified from reputable sources. If the exact number of an airstrike’s casualties cannot be verified,
                then the ACLED will list zero casualties. This means that the casualties presented in the article are,
                in fact, low. The ACLED also groups multiple airstrikes into “events”, so for example, if a cluster of
                bombs is dropped at the one location over the span of several minutes, they will all be grouped into the
                same “air/drone strike event” as opposed to counting each individual munition.
                <br/><br/>
                Airstrikes are crucial to analyze because of the sheer devastation they can inflict.
                According to a series of reports published by the Action on Armed Violence, which also considered the
                impact of rocket launchers, grenades, and mortars — airstrikes were by far the most destructive. The IDF
                commonly drops up to a thousand kilograms of explosive material on its targets, which annihilate them
                and generate supersonic shock waves capable of killing people and damaging buildings up to 360 meters
                away.
                <br/><br/>
                For reference, an average adult sprinting (~7 m/s) would need almost a minute to cover this distance —
                meaning that civilians simply in the vicinity of an airstrike without having any prior notice can be at
                a similar risk to people in the buildings being struck directly. If we combine this radius with the
                population density figures of a concentrated region like Gaza City, we find that a single airstrike can
                put more than 6,000 people at risk of injury or death.
                <br /><br />
                Repeating these strikes tens of thousands of times over the entire Gaza Strip — which is one of the most densely populated regions in the world —
                it becomes clear how much damage Israeli airstrikes have inflicted on Gazans over the past two years alone.
                In the map below, you can watch a day-by-day visualization of Israeli airstrikes from 2023 to the present day.
                The map is accompanied by an interactive timeline of major events; clicking on any dot on the timeline will skip to that date on the map.
            </Text>
        </div>
    );
}
