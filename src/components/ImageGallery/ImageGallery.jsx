// import css from "./ImageGallery.module.css";

export default function imageGallery({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <img
            src={item.urls.small}
            alt={item.alt_description}
          />
        </li>
      ))}
    </ul>
  );
}
