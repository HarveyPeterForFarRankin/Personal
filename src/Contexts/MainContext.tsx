import {createContext, useContext} from 'react';

const newContext: any = createContext({});

export const useCustomContext = () => useContext(newContext);

export default newContext;