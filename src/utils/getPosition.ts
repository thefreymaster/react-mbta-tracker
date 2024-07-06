import { isMobile } from "react-device-detect";

export const getPosition = (isInstalled: boolean, installed: number, mobile: number, desktop: number) => {
    if (isInstalled) {
      return installed;
    }
    if(isMobile){
        return mobile
    }
    return desktop;
  };