"use client"

import React, {createContext, useContext, useState, useMemo, ReactNode, useEffect} from 'react';
import {colorValues, ColorValuesProps} from '@/types/colors';

interface ColorContextType {
    colors: ColorValuesProps;
    setColors: React.Dispatch<React.SetStateAction<ColorValuesProps>>;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

interface ColorProviderProps {
    children: ReactNode;
}

export const ColorProvider = ({ children }: ColorProviderProps) => {
    const [colors, setColors] = useState(colorValues);

    const value = useMemo(() => ({ colors, setColors }), [colors, setColors]);

    return (
        <ColorContext.Provider value={value}>
            {children}
        </ColorContext.Provider>
    );
};

export const useColors = () => {
    const context = useContext(ColorContext);
    if (context === undefined) {
        throw new Error('useColors must be used within a ColorProvider');
    }
    return context;
};
