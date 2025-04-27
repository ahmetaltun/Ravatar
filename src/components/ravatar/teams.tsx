import { JSX } from 'react';
import { RavatarProps } from '@/types';
import { Image } from '@/components/image';
import teamsAvatarsRaw from '@/components/avatars/teams.json';

// Teams props but without name
interface TeamsProps extends Omit<RavatarProps, 'name'> {}

export interface TeamsDataItem {
  [key: string]: string;
}

export interface TeamsData {
  'teams': TeamsDataItem;
}

/**
 * Ravatar Component for teams - Displays avatar images from predefined sets
 */
export function RavatarTeams({
  number,
  random = true,
  alt = 'Avatar Image',
  width = 'auto',
  height = 'auto',
  className = '',
  style = {},
  customSrc,
  fallback
}: TeamsProps): JSX.Element {
  // Avatar data
  const teamsAvatars = teamsAvatarsRaw as TeamsData;
  // The maximum number of avatars available in each category
  const maxAvatars = {
    teams: Object.keys(teamsAvatars['teams']).length
  };
  
  // Generate random avatar if random prop is true
  let avatarNumber = number;
  
  if (random || !avatarNumber) {
    if(!avatarNumber) {
      // Select a random avatar number within that category
      avatarNumber = Math.floor(Math.random() * maxAvatars['teams']) + 1; // +1 because indices are 1-based
    }
  }
  
  // Ensure the avatar number is within valid range
  // const validNumber = Math.max(1, Math.min(avatarNumber, maxAvatars[avatarName] || 1));
  
  // Generate the correct image path based on avatar type and number
  const getAvatarPath = () => {
    // Custom source provided
    if (customSrc) return customSrc;
    // Determine which avatar to use
    return `data:image/png;base64,${teamsAvatars['teams'][avatarNumber]}`;
  };
  
  return (
    <Image
      src={getAvatarPath()}
      alt={alt}
      width={width}
      height={height}
      style={style}
      className={`ravatar-teams ${className}`}
      fallback={fallback}
    />
  );
}