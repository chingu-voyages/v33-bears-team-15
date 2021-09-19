export namespace GlobalModules {
  declare module '*.png' {
    const imgSrc: string;
    export default imgSrc;
  }
}
