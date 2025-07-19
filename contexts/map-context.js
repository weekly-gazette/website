import { createContext } from 'react';

const MapContext = createContext({
    date: null,
    location: null,
    setDate: null,
    setLocation: null,
});

export default MapContext;