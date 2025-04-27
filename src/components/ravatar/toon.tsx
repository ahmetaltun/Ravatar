import { JSX } from 'react';
import { RavatarProps } from '@/types';
import { Image } from '@/components/image';
import toonAvatarsRaw from '@/components/avatars/toon.json';

// Toon Props but without name
interface ToonProps extends Omit<RavatarProps, 'name'> {}

export interface ToonDataItem {
  [key: string]: string;
}

export interface ToonData {
  'toon': ToonDataItem;
}

/**
 * Ravatar Component for Toon - Displays avatar images from predefined Toon sets
 */
export function RavatarToon({
  number,
  random = true,
  alt = 'Avatar Image',
  width = 'auto',
  height = 'auto',
  className = '',
  style = {},
  customSrc,
  fallback
}: ToonProps): JSX.Element {
  // Avatar data
  const toonAvatars = toonAvatarsRaw as ToonData;
  // The maximum number of avatars available in each category
  const maxAvatars = {
    'toon': Object.keys(toonAvatars['toon']).length
  };
  
  // Generate random avatar if random prop is true
  let avatarNumber = number;
  
  if (random || !avatarNumber) {
    if(!avatarNumber) {
      // Select a random avatar number within that category
      avatarNumber = Math.floor(Math.random() * maxAvatars['toon']) + 1; // +1 because indices are 1-based
    }
  }
  
  // Generate the correct image path based on avatar type and number
  const getAvatarPath = () => {
    // Custom source provided
    if (customSrc) return customSrc;
    // Determine which avatar to use
    return `data:image/png;base64,${toonAvatars['toon'][avatarNumber]}`;
  };
  
  return (
    <Image
      src={getAvatarPath()}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={`ravatar-toon ${className}`}
      fallback={fallback}
    />
  );
}
