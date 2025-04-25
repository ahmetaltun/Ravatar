import { CSSProperties, ReactNode, useMemo } from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number | 'auto';
  height?: number | 'auto';
  style?: CSSProperties;
  className?: string;
  fallback?: ReactNode;
}

export const Image = ({
  src,
  alt,
  width = 'auto',
  height = 'auto',
  style,
  className,
  fallback
}: ImageProps) => {
  const image = useMemo(() => {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        style={{ 
          objectFit: 'cover', 
          ...style 
        }}
        className={`ravatar ${className}`}
        onError={(e) => {
          // Replace the image with fallback on error
          e.currentTarget.style.display = 'none';
          const parent = e.currentTarget.parentElement;
          if (parent && fallback) {
            parent.appendChild(fallback as unknown as Node);
          }
        }}
      />
    );
  }, [src, alt, width, height, style, className, fallback]);

  return image;
};
    