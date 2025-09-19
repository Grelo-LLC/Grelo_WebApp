"use client";

import React, { useContext } from "react";
import LanguageSelect from "../common/LanguageSelect";
import { GreloContext } from "@/context/GreloContext";

export default function Topbar({ bgColor = "bg-blue-2" }) {
    const { info } = useContext(GreloContext);

    return (
        <div className={`tf-topbar ${bgColor}`}>
            <div className="container">
                <div className="tf-topbar_wrap d-flex align-items-center justify-content-center justify-content-xl-between">
                    <ul className="topbar-left">
                        <li>
                            <a className="text-caption-1 text-white" href={`tel:${info?.phone}`}>
                                {info?.phone}
                            </a>
                        </li>
                        <li>
                            <a className="text-caption-1 text-white" href={`mailto:${info?.email}`}>
                                {info?.email}
                            </a>
                        </li>
                    </ul>
                    <div className="topbar-right d-none d-xl-block">
                        <div className="tf-cur justify-content-end">
                            <div className="tf-languages">
                                <LanguageSelect
                                    parentClassName="image-select center style-default type-languages color-white"
                                    topStart
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}