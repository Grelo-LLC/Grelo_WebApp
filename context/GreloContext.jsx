"use client";

import { createContext, useState, useEffect } from "react";
import { fetchGreloInformation } from "@/api/api";

export const GreloContext = createContext();

export const GreloProvider = ({ children }) => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const getInfo = async () => {
            try {
                const response = await fetchGreloInformation();
                setInfo(response);
            } catch (error) {
                console.error("Məlumatları çəkmək zamanı xəta baş verdi:", error);
            }
        };
        getInfo();
    }, []);

    return (
        <GreloContext.Provider value={{ info }}>
            {children}
        </GreloContext.Provider>
    );
};