import { JSX } from 'react';
import { AvatarData, RavatarProps } from '@/types';
import { Image } from '@/components/image';
import avatarsDataRaw from '@/components/avatars.json';

/**
 * Ravatar Component - Displays avatar images from predefined sets
 * 
 * Usage:
 * <Ravatar name="male" number={3} alt="User Avatar" />
 */
export function Ravatar({
  name,
  number,
  random = true,
  alt = 'Avatar Image',
  width = 'auto',
  height = 'auto',
  className = '',
  style = {},
  customSrc,
  fallback
}: RavatarProps): JSX.Element {
  // Avatar data
  const avatarsData = avatarsDataRaw as AvatarData;

  // The maximum number of avatars available in each category
  const maxAvatars = {
    '3d': Object.keys(avatarsData['3d']).length,
    bluey: Object.keys(avatarsData['bluey']).length,
    memo: Object.keys(avatarsData['memo']).length,
    notion: Object.keys(avatarsData['notion']).length,
    teams: Object.keys(avatarsData['teams']).length,
    toon: Object.keys(avatarsData['toon']).length,
    upstream: Object.keys(avatarsData['upstream']).length,
    vibrent: Object.keys(avatarsData['vibrent']).length
  };
  
  // Generate random avatar if random prop is true
  let avatarName = name;
  let avatarNumber = number;
  
  if (random || !avatarName || !avatarNumber) {
    if(!avatarName) {
      // Get all available avatar names
      const avatarNames = Object.keys(maxAvatars) as Array<keyof typeof maxAvatars>;
      // Select a random avatar category
      avatarName = avatarNames[Math.floor(Math.random() * avatarNames.length)];
    }
    if(!avatarNumber) {
      // Select a random avatar number within that category
      avatarNumber = Math.floor(Math.random() * maxAvatars[avatarName]) + 1; // +1 because indices are 1-based
    }
  }
  
  // Ensure the avatar number is within valid range
  // const validNumber = Math.max(1, Math.min(avatarNumber, maxAvatars[avatarName] || 1));
  
  // Generate the correct image path based on avatar type and number
  const getAvatarPath = () => {
    // Custom source provided
    if (customSrc) return customSrc;
    // Determine which avatar to use
    return `data:image/png;base64,${avatarsData[avatarName][avatarNumber]}`;
  };
  
  return (
    <Image
      src={getAvatarPath()}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={className}
      fallback={fallback}
    />
  );
}