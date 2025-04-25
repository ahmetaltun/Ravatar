import { JSX } from 'react';
import { AvatarData, RavatarProps } from '@/types';
import { Image } from '@/components/image';
import upstreamAvatarsRaw from '@/components/avatars/upstream.json';

interface UpstreamProps extends RavatarProps {
  name: 'upstream';
}

export interface UpstreamDataItem {
  [key: string]: string;
}

export interface UpstreamData {
  'upstream': UpstreamDataItem;
}

/**
 * Ravatar Component for Upstream - Displays avatar images from predefined Upstream sets
 */
export function RavatarUpstream({
  number,
  random = true,
  alt = 'Avatar Image',
  width = 'auto',
  height = 'auto',
  className = '',
  style = {},
  customSrc,
  fallback
}: UpstreamProps): JSX.Element {
  // Avatar data
  const upstreamAvatars = upstreamAvatarsRaw as UpstreamData;
  // The maximum number of avatars available in each category
  const maxAvatars = {
    'upstream': Object.keys(upstreamAvatars['upstream']).length
  };
  
  // Generate random avatar if random prop is true
  let avatarNumber = number;
  
  if (random || !avatarNumber) {
    if(!avatarNumber) {
      // Select a random avatar number within that category
      avatarNumber = Math.floor(Math.random() * maxAvatars['upstream']) + 1; // +1 because indices are 1-based
    }
  }
  
  // Generate the correct image path based on avatar type and number
  const getAvatarPath = () => {
    // Custom source provided
    if (customSrc) return customSrc;
    // Determine which avatar to use
    return `data:image/png;base64,${upstreamAvatars['upstream'][avatarNumber]}`;
  };
  
  return (
    <Image
      src={getAvatarPath()}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={`ravatar-upstream ${className}`}
      fallback={fallback}
    />
  );
}
