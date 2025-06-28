import Card from "@/components/card";
import Text from "@/components/text";
import Button from "@/components/button";
import Link from "@/components/link";

export default function WizardShare() {
    return (
        <Card>
            <Card.Header>
                You&apos;re on the list!
            </Card.Header>
            <Card.Body>
                <Text paragraph>
                    Click to see the wall of journalists you&apos;ve helped assemble.
                    Repost this to help more people find journalists!
                </Text>
            </Card.Body>
            <Card.Footer>
                <div className="w-full flex grid grid-cols-2 gap-3">
                    <Link href="/public" className="w-full">
                        <Button className="flex justify-center w-full">Repost on your story</Button>
                    </Link>
                    <Link href="/discover/journalists" className="w-full">
                        <Button className="flex justify-center w-full">See journalists</Button>
                    </Link>
                </div>
            </Card.Footer>
        </Card>
    );
}