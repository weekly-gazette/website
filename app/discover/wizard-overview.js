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
                    We have access to the same big news outlets: the New York Times, BBC, Al Jazeera, and so on.
                    Their reporting has limits. Most people have done the individual work of researching independent, on-the-ground journalists,
                    but there’s no place where they’re shared. Social media is good but hard to find journalists based on location.
                </Text>
            </Card.Body>
            <Card.Footer>
                <Button className="flex justify-center w-full" onClick={() => setStep((prevStep) => prevStep + 1)}>Click to start</Button>
            </Card.Footer>
        </Card>
    )
}