import Card from "@/components/card";
import Badge from "@/components/badge";
import Button from "@/components/button";
import { useContext } from "react";
import WizardContext from "@/contexts/wizard-context";
import journalists from "@/constants/journalists";
import Error from "@/components/error";
import { useState } from "react";
import flags from "@/constants/flags";

const uniqueRegions = Array.from(
    journalists.reduce((acc, curr) => acc.add(curr.region), new Set())
);

export default function WizardSearch() {
    const { setStep, selectedRegions, setSelectedRegions } = useContext(WizardContext);
    const [error, setError] = useState(false);

    return (
        <Card>
            <Card.Header>
                I'm interested in:
            </Card.Header>
            <Card.Body>
                {error && <Error>Choose a few regions!</Error>}
                <div className="flex flex-wrap justify-center gap-2">
                    {uniqueRegions.map((region) => (
                        <div
                            key={region}
                            onClick={() => setSelectedRegions(
                                selectedRegions.includes(region)
                                    ? selectedRegions.filter((prevRegion) => prevRegion !== region)
                                    : selectedRegions.concat(region)
                            )}
                        >
                            <Badge interactive>{flags[region]} &nbsp;{region}</Badge>
                        </div>
                        )
                    )}
                </div>
            </Card.Body>
            <Card.Footer>
                <Button
                    className="flex w-full justify-center"
                    onClick={() => selectedRegions.length
                        ? setStep((prevStep) => prevStep + 1)
                        : setError(true)}
                >
                    Next
                </Button>
            </Card.Footer>
        </Card>
    );
}