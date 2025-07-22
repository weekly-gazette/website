"use client";
import Numbers from '@/app/articles/gaza-airstrikes/media/numbers';
import Text from "@/components/text";
import PrefaceHistorySection from "@/app/articles/gaza-airstrikes/sections/preface-history-section";
import AirstrikesGeneralSection from "@/app/articles/gaza-airstrikes/sections/airstrikes-general-section";
import PrefaceAnalysisSection from "@/app/articles/gaza-airstrikes/sections/preface-analysis-section";
import PrefaceStrikesSection from "@/app/articles/gaza-airstrikes/sections/preface-strikes-section";
import HeatMapGeneralSection from "@/app/articles/gaza-airstrikes/sections/heatmap-general-section";
import SourcesSection from "@/app/articles/gaza-airstrikes/sections/sources-section";
import Link from "@/components/link";

export default function GazaAirstrikes() {
    return (
        <div className="h-[100vh] overflow-scroll bg-black text-white">
            <header className="px-10 h-lvh flex flex-col items-center justify-center bg-[url(/gaza-cover.png)] bg-cover bg-center mask-b-from-75%">
                <Text className="text-5xl font-bold pb-5">Israel&apos;s Airstrikes on Gaza, Visualized</Text>
                <Text className="text-xl font-medium">How airstrikes have decimated the Gaza Strip</Text>
            </header>
            <Text className="pt-5 px-10 italic">
                Our journalism is fully funded by our readers. To be added to our mailing list or to support us,
                you can subscribe <Link className="text-orange-300 hover:text-orange-400" href="https://weeklygazette.substack.com/subscribe">here</Link>.
            </Text>
            <section className="grid grid-cols-1 lg:grid-cols-2">
                <PrefaceHistorySection />
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2">
                <PrefaceStrikesSection/>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2">
                <PrefaceAnalysisSection/>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2">
                <AirstrikesGeneralSection/>
            </section>
            <section className="w-full flex justify-center items-center">
                <div className="w-3/4">
                    <Numbers/>
                </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-2">
                <HeatMapGeneralSection/>
            </section>
            <section>
                <SourcesSection/>
            </section>
        </div>
    );
}