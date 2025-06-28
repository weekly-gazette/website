"use client";
import journalists from "@/constants/journalists";
import flags from "@/constants/flags";
import Image from "@/components/image";
import Link from "@/components/link";
import Carousel from "@/components/carousel";

const uniqueRegions = Array.from(
    journalists.reduce((acc, curr) => acc.add(curr.region), new Set())
);

export default function Page() {
    return (
        <div className="flex flex-col p-10 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-y-10">
                <section>
                    <header className="font-bold text-5xl">Discover on-the-ground journalists</header>
                    <header className="text-xl pt-1">A collaboratively-made list of local reporters from around the world</header>
                </section>
                {uniqueRegions.map((uniqueRegion) => (
                    <section key={uniqueRegion}>
                        <header className="font-bold pb-3 text-3xl">
                            {flags[uniqueRegion]} {uniqueRegion}
                        </header>
                        <Carousel infinite sliderClass="grid">
                            {journalists
                                .filter((journalist) => journalist.region === uniqueRegion)
                                .map((journalist) => (
                                        <Link href={journalist.link} key={journalist.name} className="cursor-pointer h-full">
                                            <Image
                                                className="relative w-full h-[400px] p-3"
                                                rounded
                                                fade
                                                link
                                                alt={journalist.name}
                                                src={journalist.image}
                                                caption={journalist.name}
                                            />
                                        </Link>
                                    )
                                )}
                        </Carousel>
                    </section>
                ))}
            </main>
        </div>
    );
}
