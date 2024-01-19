"use client";

import ReactImageGallery from "react-image-gallery";

type ProductViewProps = {
  src: string;
};

export const ProductView = ({ src }: ProductViewProps) => {
  const images = [
    {
      original: src,
      thumbnail: src,
    },
    {
      original: src,
      thumbnail: src,
    },
    {
      original: src,
      thumbnail: src,
    },
  ];
  return (
    <div className="w-full">
      <ReactImageGallery
        items={images}
        lazyLoad
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </div>
  );
};
