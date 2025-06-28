import Card from "@/components/card";
import Button from "@/components/button";
import Text from '@/components/text';
import { useContext } from "react";
import { Formik, Field, Form } from "formik";
import WizardContext from "@/contexts/wizard-context";
import axios from 'axios';
import Badge from "@/components/badge";

export default function WizardContribute() {
    const { setStep } = useContext(WizardContext);

    return (
        <Formik
            initialValues={{ journalists: "" }}
            onSubmit={async (values) => {
                if (values.journalists.trim()) await axios.post('/api/journalists', {
                    data: values.journalists,
                });

                return setStep((prevStep) => prevStep + 1)
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Card>
                        <Card.Header>
                            I know about:
                        </Card.Header>
                        <Card.Body>
                            <div className="pb-4">
                                <Text paragraph>
                                    Add the names or handles of less well-known journalists you follow on social media (optional).
                                    We&apos;ll add them to the site after quickly verifying them on our end.
                                </Text>
                            </div>
                            <Field
                                rows={3}
                                as="textarea"
                                id="journalists"
                                name="journalists"
                                placeholder="@wizard_bisan1, @wafamoustafa, etc."
                                className="w-full text-sm bg-gray-800 rounded-md p-3"
                            />
                        </Card.Body>
                        <Card.Footer>
                            <Button className="w-full flex justify-center" type="submit" loading={isSubmitting}>Next</Button>
                        </Card.Footer>
                    </Card>
                </Form>
            )}
        </Formik>
    );
}