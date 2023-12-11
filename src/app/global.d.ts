declare module "*.scss" {
    const styles: { [className: string]: string };
    export default styles;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg?url';