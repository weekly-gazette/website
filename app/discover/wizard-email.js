import Card from "@/components/card";
import Button from "@/components/button";
import Text from '@/components/text';
import { useContext } from "react";
import { Formik, Field, Form } from "formik";
import WizardContext from "@/contexts/wizard-context";
import axios from 'axios';
import * as Yup from "yup";
import Error from "@/components/error";

export default function WizardEmail() {
    const { setStep } = useContext(WizardContext);

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Enter your email'),
    });

    return (
        <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
                await axios.post('/api/email', {
                    data: values.email,
                });

                return setStep((prevStep) => prevStep + 1)
            }}
        >
            {({ isSubmitting, errors }) => (
                <Form>
                    <Card>
                        <Card.Header>
                            Enter your email
                        </Card.Header>
                        <Card.Body>
                            {errors.email && <Error>Enter your email.</Error>}
                            <div className="pb-4">
                                <Text paragraph>
                                    Enter your email to get updated when new journalists are added to the platform
                                </Text>
                            </div>
                            <Field
                                id="email"
                                name="email"
                                placeholder="myname@gmail.org"
                                className="w-full bg-gray-800 rounded-md text-sm p-3"
                                required
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