import galleryImages from "../TourGallery"; // fallback

const TourGallery = ({ images }) => {
  const gallery = images && images.length > 0 ? images : galleryImages; // fallback

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {gallery.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt || "Gallery Image"}
          className="w-full h-64 object-cover rounded-xl shadow-md"
        />
      ))}
    </div>
  );
};

export default TourGallery;
