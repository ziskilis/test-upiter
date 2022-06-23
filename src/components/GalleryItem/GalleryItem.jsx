import "./GalleryItem.css";

function GalleryItem({ props, setCategory, setChecked }) {
  const { id, category, name, img, checked } = props;

  return (
    <div
      className={checked ? "gallery-item checked" : "gallery-item"}
      onClick={() => setChecked(id)}
    >
      <img
        className="img"
        src={`${process.env.PUBLIC_URL}/${img}`}
        alt="item img"
      />
      <div className="item__button-block">
        <button className="item__button" onClick={() => setCategory(category)}>
          {category}
        </button>
        <span className="item__name">{name}</span>
      </div>
    </div>
  );
}

export default GalleryItem;
