import { CSSProperties, ReactNode } from "react";

// Available avatar types
type AvatarName = '3d' | 'bluey' | 'memo' | 'notion' | 'teams' | 'toon' | 'upstream' | 'vibrent';

export interface AvatarDataItem {
  [key: string]: string;
}

export interface AvatarData {
  '3d': AvatarDataItem;
  'bluey': AvatarDataItem;
  'memo': AvatarDataItem;
  'notion': AvatarDataItem;
  'teams': AvatarDataItem;
  'toon': AvatarDataItem;
  'upstream': AvatarDataItem;
  'vibrent': AvatarDataItem;
}

export interface RavatarProps {
  /** Avatar name/category to use */
  name?: AvatarName;
  /** Avatar number within the selected category (1-based index) */
  number?: number;
  /** If true, selects a random avatar from any category, ignoring name and number props */
  random?: boolean;
  /** Alternative text for the avatar image */
  alt?: string;
  /** Width of the avatar in pixels */
  width?: number | 'auto';
  /** Height of the avatar in pixels */
  height?: number | 'auto';
  /** Additional CSS class names */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
  /** Optional custom image path to override the generated path */
  customSrc?: string;
  /** Fallback content to display if the image fails to load */
  fallback?: ReactNode;
}