import { isSafari } from "react-device-detect";

//@ts-ignore
export const useIsInstalled = () => isSafari && window?.navigator?.standalone