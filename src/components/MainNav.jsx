import React from "react";
import "../css/MainNav.css"; // Adjust the path based on your actual file structure


const MainNav = ({ className, ...props }) => {
  return (
    <div className="main-nav">
      <div className="list">
        <div className="frame-2">
          <div className="item">
            <svg
              className="label-burguer-menu-svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6C3 5.80109 3.07902 5.61032 3.21967 5.46967C3.36032 5.32902 3.55109 5.25 3.75 5.25H20.25C20.4489 5.25 20.6397 5.32902 20.7803 5.46967C20.921 5.61032 21 5.80109 21 6C21 6.19891 20.921 6.38968 20.7803 6.53033C20.6397 6.67098 20.4489 6.75 20.25 6.75H3.75C3.55109 6.75 3.36032 6.67098 3.21967 6.53033C3.07902 6.38968 3 6.19891 3 6ZM3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12ZM3 18C3 17.8011 3.07902 17.6103 3.21967 17.4697C3.36032 17.329 3.55109 17.25 3.75 17.25H20.25C20.4489 17.25 20.6397 17.329 20.7803 17.4697C20.921 17.6103 21 17.8011 21 18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18Z"
                fill="#5C7A89"
              />
            </svg>
            <div className="category-list-nav">
              Todas las categorías{" "}
            </div>
          </div>
          <div className="category-nav">
            <p className="catgeory-name">Coches </p>
          </div>
          <div className="category-nav">
            <p className="catgeory-name">Herramientas </p>
          </div>
          <div className="category-nav">
            <p className="catgeory-name">Motor y Accesorios </p>
          </div>
          <div className="icategory-nav">
            <p className="catgeory-name">Moda y Accesorios </p>
          </div>
          <div className="category-nav">
            <p className="catgeory-name">Inmobiliaria </p>
          </div>
        </div>
      </div>
      <div className="before"></div>
      <div className="after"></div>
    </div>
  );
}

export default MainNav;
