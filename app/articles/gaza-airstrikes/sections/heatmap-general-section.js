import HeatMap from "@/app/articles/gaza-airstrikes/media/heat-map";
import HeatMapGeneral from "@/app/articles/gaza-airstrikes/copy/heatmap-general";

export default function HeatMapGeneralSection() {
    return (
        <>
            <HeatMapGeneral />
            <div className="flex justify-center">
                <div className="w-[90%] sticky top-[0lvh] lg:h-lvh lg:pt-[10lvh]">
                    <HeatMap />
                </div>
            </div>
        </>
    )
}