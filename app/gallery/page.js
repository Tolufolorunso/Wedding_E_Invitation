'use client';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

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

function GalleryContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const router = useRouter();

  return (
    <>
      <p className="cursor-pointer" onClick={() => router.push(`/${id}`)}>
        Go Back to RSVP
      </p>
      <motion.h1
        className="title text-primary"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Special Moments
      </motion.h1>
      <div className="gallery">
        {[...new Array(16)].map((_, index) => (
          <motion.div
            className="gallery-item"
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="image-container">
              <img src={`/img/gal/femi${index}.jpg`} alt="Femi and his wife" />
              <div className="info-overlay">
                <p>Femi and his wife{index}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

function GalleryPage() {
  return (
    <>
      <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark d-block">
        <h1 className="font-secondary text-white text-center cursor-pointer">
          Fẹ́mi <span className="text-primary">&</span> Ṣẹwà
        </h1>
      </nav>
      <div className="app_gallery">
        <Suspense fallback={<p>Loading...</p>}>
          <GalleryContent />
        </Suspense>
      </div>
    </>
  );
}

export default GalleryPage;
