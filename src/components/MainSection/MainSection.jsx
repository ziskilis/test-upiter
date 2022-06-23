import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import "./MainSection.css";

function MainSection() {
  const [gallery, setGallery] = useState([
    {
      id: 0,
      category: "Design",
      name: "SOFA",
      img: "img/sofa.png",
      checked: false,
    },
    {
      id: 1,
      category: "Branding",
      name: "KeyBoard",
      img: "img/Keyboard.png",
      checked: false,
    },
    {
      id: 2,
      category: "Illustration",
      name: "Work Media",
      img: "img/work.png",
      checked: false,
    },
    {
      id: 3,
      category: "Motion",
      name: "DDDone",
      img: "img/ddone.png",
      checked: false,
    },
    {
      id: 4,
      category: "Design",
      name: "Abstract",
      img: "img/abstract.png",
      checked: false,
    },
    {
      id: 5,
      category: "Branding",
      name: "HandP",
      img: "img/hand.png",
      checked: false,
    },
    {
      id: 6,
      category: "Motion",
      name: "Architect",
      img: "img/archi.png",
      checked: false,
    },
    {
      id: 7,
      category: "Design",
      name: "CalC",
      img: "img/calc.png",
      checked: false,
    },
    {
      id: 8,
      category: "Branding",
      name: "Sport",
      img: "img/sport.png",
      checked: false,
    },
    {
      id: 9,
      category: "Design",
      name: "SOFA2",
      img: "img/sofa.png",
      checked: false,
    },
    {
      id: 10,
      category: "Branding",
      name: "KeyBoard2",
      img: "img/Keyboard.png",
      checked: false,
    },
    {
      id: 11,
      category: "Illustration",
      name: "Work Media2",
      img: "img/work.png",
      checked: false,
    },
    {
      id: 12,
      category: "Motion",
      name: "DDDone2",
      img: "img/ddone.png",
      checked: false,
    },
    {
      id: 13,
      category: "Design",
      name: "Abstract2",
      img: "img/abstract.png",
      checked: false,
    },
    {
      id: 14,
      category: "Branding",
      name: "HandP2",
      img: "img/hand.png",
      checked: false,
    },
    {
      id: 15,
      category: "Motion",
      name: "Architect2",
      img: "img/archi.png",
      checked: false,
    },
    {
      id: 16,
      category: "Design",
      name: "CalC2",
      img: "img/calc.png",
      checked: false,
    },
    {
      id: 17,
      category: "Branding",
      name: "Sport2",
      img: "img/sport.png",
      checked: false,
    },
  ]);

  const removeChecked = useCallback(
    (key) => {
      if (key === "Delete") {
        setGallery(gallery.filter((el) => el.checked === false));
      }
    },
    [gallery]
  );

  useEffect(() => {
    document.addEventListener("keydown", (e) => removeChecked(e.key), false);

    return () =>
      document.removeEventListener(
        "keydown",
        (e) => removeChecked(e.key),
        false
      );
  }, [removeChecked]);

  const [visible, setVisible] = useState(9);

  const [category, setCategory] = useState("");

  const loadMore = () => {
    setVisible(visible + 9);
  };

  const setChecked = (id) => {
    setGallery(
      gallery.map((el) => (el.id === id ? { ...el, checked: !el.checked } : el))
    );
  };

  return (
    <section className="main">
      <div className="wrapper">
        <ul className="category-filter">
          <li className="category-filter__item" onClick={() => setCategory("")}>
            Show All
          </li>
          <li
            className="category-filter__item"
            onClick={() => setCategory("Design")}
          >
            Design
          </li>
          <li
            className="category-filter__item"
            onClick={() => setCategory("Branding")}
          >
            Branding
          </li>
          <li
            className="category-filter__item"
            onClick={() => setCategory("Illustration")}
          >
            Illustration
          </li>
          <li
            className="category-filter__item"
            onClick={() => setCategory("Motion")}
          >
            Motion
          </li>
        </ul>
        <div className="main__gallery">
          {gallery
            .filter((el) => (category ? el.category === category : el))
            .slice(0, visible)
            .map((x) => (
              <GalleryItem
                key={x.id}
                props={x}
                setCategory={setCategory}
                setChecked={setChecked}
              />
            ))}
        </div>
        <button className="main__button" onClick={loadMore}>
          LOAD MORE
        </button>
      </div>
    </section>
  );
}

export default MainSection;
