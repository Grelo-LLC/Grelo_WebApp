"use client";
import React, { useEffect, useRef, useState } from "react";
const languageOptions = [
  { id: "az", label: "AZ" },
  { id: "tr", label: "TR" },
  { id: "ru", label: "RU" },
  { id: "en", label: "EN" },
];

export default function LanguageSelect({
  parentClassName = "image-select center style-default type-languages",
  topStart = false,
}) {
  const [selected, setSelected] = useState(languageOptions[0]);
  const [isDDOpen, setIsDDOpen] = useState(false);
  const languageSelect = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageSelect.current &&
        !languageSelect.current.contains(event.target)
      ) {
        setIsDDOpen(false);
      }
    };
   
    document.addEventListener("click", handleClickOutside);
   
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        className={`dropdown bootstrap-select ${parentClassName}  dropup `}
        onClick={() => setIsDDOpen((pre) => !pre)}
        ref={languageSelect}
      >
        <select
          className="image-select center style-default type-languages"
          tabIndex="null"
        >
          {languageOptions.map((option, i) => (
            <option key={i} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        <button
          type="button"
          tabIndex={-1}
          className={`btn dropdown-toggle btn-light  ${
            isDDOpen ? "show" : ""
          } `}
        >
          <div className="filter-option">
            <div className="filter-option-inner">
              <div className="filter-option-inner-inner">{selected.label}</div>
            </div>
          </div>
        </button>
        <div
          className={`dropdown-menu ${isDDOpen ? "show" : ""} `}
          style={{
            maxHeight: "899.688px",
            overflow: "hidden",
            minHeight: 0,
            position: "absolute",
            inset: topStart ? "" : "auto auto 0px 0px",
            margin: 0,
            transform: `translate(0px, ${topStart ? 22 : -20}px)`,
          }}
          data-popper-placement={`${!topStart ? "top" : "bottom"}-start`}
        >
          <div
            className="inner show"
            style={{
              maxHeight: "869.688px",
              overflowY: "auto",
              minHeight: 0,
            }}
          >
            <ul
              className="dropdown-menu inner show"
              role="presentation"
              style={{ marginTop: 0, marginBottom: 0 }}
            >
              {languageOptions.map((elm, i) => (
                <li
                  key={i}
                  onClick={() => setSelected(elm)}
                  className={`selected ${selected == elm ? "active" : ""}`}
                >
                  <a
                    className={`dropdown-item ${
                      selected == elm ? "active selected" : ""
                    }`}
                  >
                    <span className="text">{elm.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}