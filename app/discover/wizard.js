"use client";

import { useState, useMemo } from 'react';
import WizardOverview from "@/app/discover/wizard-overview";
import WizardContext from "@/contexts/wizard-context";
import WizardSearch from "@/app/discover/wizard-search";
import WizardResults from "@/app/discover/wizard-results";
import WizardContribute from "@/app/discover/wizard-contribute";
import WizardShare from "@/app/discover/wizard-share";
import WizardEmail from "@/app/discover/wizard-email";

export default function Wizard() {
    const [step, setStep] = useState(0);
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [newJournalists, setNewJournalists] = useState("");

    const wizardContext = useMemo(() => ({
        step,
        selectedRegions,
        newJournalists,
        setStep,
        setSelectedRegions,
        setNewJournalists,
    }), [step, selectedRegions, newJournalists]);

    return (
        <WizardContext value={wizardContext}>
            {step === 0 && <WizardOverview />}
            {step === 1 && <WizardSearch />}
            {step === 2 && <WizardResults />}
            {step === 3 && <WizardContribute />}
            {step === 4 && <WizardEmail />}
            {step === 5 && <WizardShare />}
        </WizardContext>
    )
}