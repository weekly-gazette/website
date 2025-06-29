import Map from '@/app/articles/gaza-airstrikes/map';;
import LineGraph from "@/app/articles/gaza-airstrikes/line-graph";

export default function Graphs() {
    return (
        <div className="sticky top-0 w-1/2">
            <Map />
            {/*<LineGraph />*/}
        </div>
    );
}