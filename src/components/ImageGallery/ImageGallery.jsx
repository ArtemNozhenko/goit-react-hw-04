// import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function imageGallery({
  items,
  onImageClick,
}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
