import PrefaceAnalysis from "@/app/articles/gaza-airstrikes/copy/preface-analysis";
import LineGraph from "@/app/articles/gaza-airstrikes/media/line-graph";

export default function PrefaceAnalysisSection() {
    return (
        <>
            <PrefaceAnalysis />
            <div className="flex justify-center">
                <div className="flex justify-center w-[90%] sticky top-[0lvh] h-lvh pt-[20lvh]">
                    <div className="w-[90lvw] lg:w-[40lvw]">
                        <LineGraph />
                    </div>
                </div>
            </div>
        </>
    );
}