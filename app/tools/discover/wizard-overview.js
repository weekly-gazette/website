import Card from "@/components/card";
import Text from "@/components/text";
import Button from "@/components/button";
import { useContext } from "react";
import WizardContext from "@/contexts/wizard-context";

export default function WizardOverview() {
    const { setStep } = useContext(WizardContext);

    return (
        <Card>
            <Card.Header>
                What is this?
            </Card.Header>
            <Card.Body>
                <Text paragraph>
                    Think of this as a collaboratively-made collage of citizen reporters from around the world.
                    Many people follow journalists from places like Gaza or Khartoum
                    on social media, but it can be difficult to find them.
                    The work these journalists is incredibly important — and
                    this project is meant to bring them together in one place.
                </Text>
            </Card.Body>
            <Card.Footer>
                <Button className="flex justify-center w-full" onClick={() => setStep((prevStep) => prevStep + 1)}>Click to start</Button>
            </Card.Footer>
        </Card>
    )
}