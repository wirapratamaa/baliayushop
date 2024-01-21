"use client";

import ReactImageGallery from "react-image-gallery";

type ProductViewProps = {
  src: string[] | undefined;
};

export const ProductView = ({ src }: ProductViewProps) => {
  // const images = [
  //   {
  //     original: src,
  //     thumbnail: src,
  //   },
  //   {
  //     original: src,
  //     thumbnail: src,
  //   },
  //   {
  //     original: src,
  //     thumbnail: src,
  //   },
  // ];
  const images = src?.map((item) => {
    return {
      original: `/assets/${item}.jpg`,
      thumbnail: `/assets/${item}.jpg`,
    };
  });
  return (
    <div className="w-full">
      <ReactImageGallery
        items={images || []}
        lazyLoad
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={false}
      />
    </div>
  );
};
