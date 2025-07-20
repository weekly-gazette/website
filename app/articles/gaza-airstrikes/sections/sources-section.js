import Sources from "@/app/articles/gaza-airstrikes/copy/sources";
import Text from "@/components/text";

export default function SourcesSection() {
    return (
        <div className="p-10">
            <Text className="text-2xl font-bold pb-5">Sources</Text>
            <Sources />
        </div>
    );
}