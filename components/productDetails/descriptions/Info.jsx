"use client";

import React, { useState } from "react";
import Description from "./Description";
import Reviews from "./Reviews";

export default function Info() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="widget-tabs style-1">
              <ul className="widget-menu-tab">
                <li
                  className={`item-title ${activeTab == 1 ? "active" : ""} `}
                  onClick={() => setActiveTab(1)}
                >
                  <span className="inner">Description</span>
                </li>
                <li
                  className={`item-title ${activeTab == 2 ? "active" : ""} `}
                  onClick={() => setActiveTab(2)}
                >
                  <span className="inner">Customer Reviews</span>
                </li>
              </ul>
              <div className="widget-content-tab">
                <div
                  className={`widget-content-inner ${activeTab == 1 ? "active" : ""
                    } `}
                >
                  <div className="tab-description">
                    <Description />
                  </div>
                </div>
                <div
                  className={`widget-content-inner ${activeTab == 2 ? "active" : ""
                    } `}
                >
                  <div className="tab-reviews write-cancel-review-wrap">
                    <Reviews />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
