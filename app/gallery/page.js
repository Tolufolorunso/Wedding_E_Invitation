'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const photos = [
  {
    id: 1,
    src: 'https://placehold.co/600x400',
    alt: 'Romantic couple in sunset',
    info: 'Sunset Romance',
  },
  {
    id: 2,
    src: 'https://placehold.co/600x400',
    alt: 'Holding hands by the sea',
    info: 'Seaside Serenity',
  },
  {
    id: 3,
    src: 'https://placehold.co/600x400',
    alt: 'Smiling couple in nature',
    info: "Nature's Bliss",
  },
  {
    id: 4,
    src: 'https://placehold.co/600x400',
    alt: 'Couple in a field of flowers',
    info: 'Field of Dreams',
  },
  {
    id: 5,
    src: 'https://placehold.co/600x400',
    alt: 'Dancing under the stars',
    info: 'Starry Dance',
  },
  {
    id: 6,
    src: 'https://placehold.co/600x400',
    alt: 'Walking together in the woods',
    info: 'Woodland Walk',
  },
];

function GalleryPage() {
  const navigateBackToIV = () => {
    console.log('ey');
  };
  return (
    <>
      <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark d-block">
        <h1
          className="font-secondary text-white text-center cursor-pointer"
          onClick={navigateBackToIV}
        >
          Sewa <span className="text-primary">&</span> Femi
        </h1>
      </nav>
      <div className="app_gallery">
        <motion.h1
          className="title"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Pre-Wedding Moments
        </motion.h1>
        <div className="gallery">
          {photos.map((photo) => (
            <motion.div
              className="gallery-item"
              key={photo.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="image-container">
                <img src={photo.src} alt={photo.alt} />
                <div className="info-overlay">
                  <p>{photo.info}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GalleryPage;
