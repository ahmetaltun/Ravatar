import { JSX } from 'react';
import { AvatarData, RavatarProps } from '@/types';
import { Image } from '@/components/image';
import vibrentAvatarsRaw from '@/components/avatars/vibrent.json';

interface VibrentProps extends RavatarProps {
  name: 'vibrent';
}

export interface VibrentDataItem {
  [key: string]: string;
}

export interface VibrentData {
  'vibrent': VibrentDataItem;
}

/**
 * Ravatar Component for Vibrent - Displays avatar images from predefined Vibrent sets
 */
export function RavatarVibrent({
  number,
  random = true,
  alt = 'Avatar Image',
  width = 'auto',
  height = 'auto',
  className = '',
  style = {},
  customSrc,
  fallback
}: VibrentProps): JSX.Element {
  // Avatar data
  const vibrentAvatars = vibrentAvatarsRaw as VibrentData;
  // The maximum number of avatars available in each category
  const maxAvatars = {
    'vibrent': Object.keys(vibrentAvatars['vibrent']).length
  };
  
  // Generate random avatar if random prop is true
  let avatarNumber = number;
  
  if (random || !avatarNumber) {
    if(!avatarNumber) {
      // Select a random avatar number within that category
      avatarNumber = Math.floor(Math.random() * maxAvatars['vibrent']) + 1; // +1 because indices are 1-based
    }
  }
  
  // Generate the correct image path based on avatar type and number
  const getAvatarPath = () => {
    // Custom source provided
    if (customSrc) return customSrc;
    // Determine which avatar to use
    return `data:image/png;base64,${vibrentAvatars['vibrent'][avatarNumber]}`;
  };
  
  return (
    <Image
      src={getAvatarPath()}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={`ravatar-vibrent ${className}`}
      fallback={fallback}
    />
  );
}
