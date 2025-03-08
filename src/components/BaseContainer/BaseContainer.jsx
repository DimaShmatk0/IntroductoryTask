import React, { useRef, useState, useEffect } from "react";
import "./BaseContainer.css";

export function BaseContainer() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const totalSlides = 3;

  const updateSlide = (newIndex) => {
    setIndex(newIndex);
  };

  const nextSlide = () => {
    if (index < totalSlides - 1) {
      updateSlide(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      updateSlide(index - 1);
    }
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transition =
        "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
      trackRef.current.style.transform = `translateX(-${index * (100 / n)}%)`;
    }
  }, [index]);
  const n = 3;
  return (
    <div className="wrapper">
      <div className="base-container">
        <div className="about-me">
          <div className="main-information">
            <h3>Шматько Дмитро</h3>
            <p>Студент 3 курсу</p>
            <p>ФОТІУС 124 Системний аналіз </p>
            <p>Інтереси: Історі Програмування </p>
            <p>
              Контакти Email: shmatko.dmytro1122@vu.cdu.edu.ua
              <p className="linkTg">
                Telegram: <a href="https://t.me/OldFritz0">@OldFritz0</a>
              </p>
            </p>
          </div>
        </div>

        <div className="profile-container">
          <button className="btn btn-prev" onClick={prevSlide}>
            ‹
          </button>
          <div className="carousel">
            <div ref={trackRef} className="carousel-track" style={{ "--n": n }}>
              <div className="profile-container__item">
                <h4>Цілі</h4>
                <p>
                  Розвивати навички у сфері програмування та роботи з базами
                  даних. Отримати досвід у розробці складних IT-рішень та стати
                  кваліфікованим спеціалістом у сфері розробки.
                </p>
              </div>

              <div className="profile-container__item">
                <h4>Навички</h4>
                <p>
                  Програмування (C#, JavaScript), аналіз даних, алгоритми та
                  структури даних, робота з базами даних (PostgreSQL),
                  веб-розробка (HTML, CSS, JS), проєктування програмних систем,
                  критичне мислення, командна робота.
                </p>
              </div>

              <div className="profile-container__item">
                <h4>Досвід</h4>
                <p>
                  Навчальні проєкти в університеті з використанням C# HTML CSS
                  JS, створення веб-застосунків.
                </p>
              </div>
            </div>
          </div>
          <button className="btn btn-next" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
