import { JSX } from 'react';
import { AvatarData, RavatarProps } from '@/types';
import { Image } from '@/components/image';
import notionAvatarsRaw from '@/components/avatars/notion.json';

interface NotionProps extends RavatarProps {
  name: 'notion';
}

export interface NotionDataItem {
  [key: string]: string;
}

export interface NotionData {
  'notion': NotionDataItem;
}

/**
 * Ravatar Component for Notion - Displays avatar images from predefined Notion sets
 */
export function RavatarNotion({
  number,
  random = true,
  alt = 'Avatar Image',
  width = 'auto',
  height = 'auto',
  className = '',
  style = {},
  customSrc,
  fallback
}: NotionProps): JSX.Element {
  // Avatar data
  const notionAvatars = notionAvatarsRaw as NotionData;
  // The maximum number of avatars available in each category
  const maxAvatars = {
    'notion': Object.keys(notionAvatars['notion']).length
  };
  
  // Generate random avatar if random prop is true
  let avatarNumber = number;
  
  if (random || !avatarNumber) {
    if(!avatarNumber) {
      // Select a random avatar number within that category
      avatarNumber = Math.floor(Math.random() * maxAvatars['notion']) + 1; // +1 because indices are 1-based
    }
  }
  
  // Generate the correct image path based on avatar type and number
  const getAvatarPath = () => {
    // Custom source provided
    if (customSrc) return customSrc;
    // Determine which avatar to use
    return `data:image/png;base64,${notionAvatars['notion'][avatarNumber]}`;
  };
  
  return (
    <Image
      src={getAvatarPath()}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={`ravatar-notion ${className}`}
      fallback={fallback}
    />
  );
}
