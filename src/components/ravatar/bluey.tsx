import { JSX } from 'react';
import { AvatarData, RavatarProps } from '@/types';
import { Image } from '@/components/image';
import blueyAvatarsRaw from '@/components/avatars/bluey.json';

interface BlueyProps extends RavatarProps {
  name: 'bluey';
}

export interface BlueyDataItem {
  [key: string]: string;
}

export interface BlueyData {
  'bluey': BlueyDataItem;
}

/**
 * Ravatar Component for Bluey - Displays avatar images from predefined Bluey sets
 */
export function RavatarBluey({
  number,
  random = true,
  alt = 'Avatar Image',
  width = 'auto',
  height = 'auto',
  className = '',
  style = {},
  customSrc,
  fallback
}: BlueyProps): JSX.Element {
  // Avatar data
  const blueyAvatars = blueyAvatarsRaw as BlueyData;
  // The maximum number of avatars available in each category
  const maxAvatars = {
    'bluey': Object.keys(blueyAvatars['bluey']).length
  };
  
  // Generate random avatar if random prop is true
  let avatarNumber = number;
  
  if (random || !avatarNumber) {
    if(!avatarNumber) {
      // Select a random avatar number within that category
      avatarNumber = Math.floor(Math.random() * maxAvatars['bluey']) + 1; // +1 because indices are 1-based
    }
  }
  
  // Generate the correct image path based on avatar type and number
  const getAvatarPath = () => {
    // Custom source provided
    if (customSrc) return customSrc;
    // Determine which avatar to use
    return `data:image/png;base64,${blueyAvatars['bluey'][avatarNumber]}`;
  };
  
  return (
    <Image
      src={getAvatarPath()}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={`ravatar-bluey ${className}`}
      fallback={fallback}
    />
  );
}
