import Wizard from "@/app/discover/wizard";
import Image from "@/components/image";
import journalists from "@/constants/journalists";

export default function Page() {
    return (
        <>
            <div className="fixed grid grid-cols-2 w-[3500px] h-[100vh]">
                <div className="grid grid-cols-5 infinite-scroll h-[100vh] py-15 gap-y-15">
                    {journalists.slice(0, 10).map((journalist) => (
                        <Image
                            rounded
                            className="grayscale opacity-75 relative w-[300px] h-full"
                            src={journalist.image}
                            key={journalist.name}
                            alt={journalist.name}
                        />
                    ))}
                </div>
                <div className="grid grid-cols-5 infinite-scroll max-h-[100vh] py-15 gap-y-15">
                    {journalists.slice(0, 10).map((journalist) => (
                        <Image
                            rounded
                            className="grayscale opacity-75 relative w-[300px] h-full"
                            src={journalist.image}
                            key={journalist.name}
                            alt={journalist.name}
                        />
                    ))}
                </div>
            </div>
            <div className="overflow-hidden h-full flex justify-center items-center">
                <div className="z-10">
                    <Wizard/>
                </div>
            </div>
        </>
    );
}