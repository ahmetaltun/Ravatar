import { JSX } from 'react';
import { AvatarData, RavatarProps } from '@/types';
import { Image } from '@/components/image';
import memoAvatarsRaw from '@/components/avatars/memo.json';

interface MemoProps extends RavatarProps {
  name: 'memo';
}

export interface MemoDataItem {
  [key: string]: string;
}

export interface MemoData {
  'memo': MemoDataItem;
}

/**
 * Ravatar Component for Memo - Displays avatar images from predefined Memo sets
 */
export function RavatarMemo({
  number,
  random = true,
  alt = 'Avatar Image',
  width = 'auto',
  height = 'auto',
  className = '',
  style = {},
  customSrc,
  fallback
}: MemoProps): JSX.Element {
  // Avatar data
  const memoAvatars = memoAvatarsRaw as MemoData;
  // The maximum number of avatars available in each category
  const maxAvatars = {
    'memo': Object.keys(memoAvatars['memo']).length
  };
  
  // Generate random avatar if random prop is true
  let avatarNumber = number;
  
  if (random || !avatarNumber) {
    if(!avatarNumber) {
      // Select a random avatar number within that category
      avatarNumber = Math.floor(Math.random() * maxAvatars['memo']) + 1; // +1 because indices are 1-based
    }
  }
  
  // Generate the correct image path based on avatar type and number
  const getAvatarPath = () => {
    // Custom source provided
    if (customSrc) return customSrc;
    // Determine which avatar to use
    return `data:image/png;base64,${memoAvatars['memo'][avatarNumber]}`;
  };
  
  return (
    <Image
      src={getAvatarPath()}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={`ravatar-memo ${className}`}
      fallback={fallback}
    />
  );
}
