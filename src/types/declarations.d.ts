// Type definitions for modules without TypeScript declarations

// Image module declarations
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';

// Style declarations
declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Font declarations
declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';
declare module '*.ttf';
declare module '*.otf';