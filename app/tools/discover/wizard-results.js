"use client";
import Card from "@/components/card";
import Button from "@/components/button";
import { useContext } from "react";
import WizardContext from "@/contexts/wizard-context";
import journalists from "@/constants/journalists";
import Image from "@/components/image";
import Link from "@/components/link";
import Carousel from "@/components/carousel";

const RESULTS_LIMIT = 10;

export default function WizardResults() {
    const { setStep, selectedRegions } = useContext(WizardContext);

    return (
        <Card>
            <Card.Header>
                Journalists in these areas
            </Card.Header>
            <Card.Body>
                <div className="w-full">
                    <Carousel items={1} infinite>
                        {journalists
                            .filter((journalist) => selectedRegions.includes(journalist.region))
                            .toSorted((a, b) => a.region.localeCompare(b.region))
                            .slice(0, RESULTS_LIMIT)
                            .map((journalist) => (
                                <Link href={journalist.link} key={journalist.name} className="cursor-pointer w-full">
                                    <Image
                                        rounded
                                        link
                                        fade
                                        src={journalist.image}
                                        caption={journalist.name}
                                        alt={journalist.name}
                                        className="relative w-full h-[400px]"
                                    />
                                </Link>
                            ))
                        }
                    </Carousel>
                </div>
            </Card.Body>
            <Card.Footer>
                <Button
                    className="flex justify-center w-full"
                    onClick={() => setStep((prevStep) => prevStep + 1)}
                >
                    Next
                </Button>
            </Card.Footer>
        </Card>
    );
}