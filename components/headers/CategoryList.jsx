import React from "react";

export default function CategoryList() {
  return (
    <div className="list-categories-inner bg-black">
      <ul>
        <li className="sub-categories2">
          <a href="#" className="categories-item">
            <span className="inner-left">
              Aksesuar
            </span>
            <i className="icon icon-arrRight" />
          </a>
          <ul className="list-categories-inner">
            <li>
              <a href="#" className="categories-item">
                <span className="inner-left">
                  Kamera
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="categories-item">
            <span className="inner-left">
              Smartfonlar
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
