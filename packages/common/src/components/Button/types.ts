export interface ButtonProps {
  type?: 'primary' | 'default' | 'dashed';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'default' | 'circle' | 'round' | 'sharp';
  danger?: boolean;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}
