import { JSX } from 'react';
import { AvatarData, RavatarProps } from '@/types';
import { Image } from '@/components/image';
import threeDimensionalAvatarsRaw from '@/components/avatars/3d.json';

interface ThreeDimensionalProps extends RavatarProps {
  name: '3d';
}

export interface ThreeDimensionalDataItem {
  [key: string]: string;
}

export interface ThreeDimensionalData {
  '3d': ThreeDimensionalDataItem;
}

/**
 * Ravatar Component for 3D - Displays avatar images from predefined 3D sets
 */
export function Ravatar3D({
  number,
  random = true,
  alt = 'Avatar Image',
  width = 'auto',
  height = 'auto',
  className = '',
  style = {},
  customSrc,
  fallback
}: ThreeDimensionalProps): JSX.Element {
  // Avatar data
  const threeDimensionalAvatars = threeDimensionalAvatarsRaw as ThreeDimensionalData;
  // The maximum number of avatars available in each category
  const maxAvatars = {
    '3d': Object.keys(threeDimensionalAvatars['3d']).length
  };
  
  // Generate random avatar if random prop is true
  let avatarNumber = number;
  
  if (random || !avatarNumber) {
    if(!avatarNumber) {
      // Select a random avatar number within that category
      avatarNumber = Math.floor(Math.random() * maxAvatars['3d']) + 1; // +1 because indices are 1-based
    }
  }
  
  // Ensure the avatar number is within valid range
  // const validNumber = Math.max(1, Math.min(avatarNumber, maxAvatars[avatarName] || 1));
  
  // Generate the correct image path based on avatar type and number
  const getAvatarPath = () => {
    // Custom source provided
    if (customSrc) return customSrc;
    // Determine which avatar to use
    return `data:image/png;base64,${threeDimensionalAvatars['3d'][avatarNumber]}`;
  };
  
  return (
    <Image
      src={getAvatarPath()}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={`ravatar-3d ${className}`}
      fallback={fallback}
    />
  );
}
