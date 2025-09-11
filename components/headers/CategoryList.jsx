import React from "react";

export default function CategoryList() {
  return (
    <div className="list-categories-inner">
      <ul>
        <li className="sub-categories2">
          <a href="#" className="categories-item">
            <span className="inner-left">
              Accessories
            </span>
            <i className="icon icon-arrRight" />
          </a>
          <ul className="list-categories-inner">
            <li>
              <a href="#" className="categories-item">
                <span className="inner-left">
                  Camera
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="categories-item">
            <span className="inner-left">
              Smart Phones
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
