export default function ImageCard({ item, onClick }) {
  const handleClick = () => {
    onClick(item.urls.regular);
  };

  return (
    <div onClick={handleClick}>
      <img
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
}
