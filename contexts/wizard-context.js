import { createContext } from 'react';

const WizardContext = createContext({
    step: 0,
    selectedRegions: [],
    setStep: null,
    setSelectedRegions: null,
});

export default WizardContext;