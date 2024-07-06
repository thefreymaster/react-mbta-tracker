export const setThemeColor = (color: string): void => {
  let metaTag = document.querySelector(
    'meta[name="theme-color"]'
  ) as HTMLMetaElement | null;
  if (!metaTag) {
    metaTag = document.createElement("meta");
    metaTag.setAttribute("name", "theme-color");
    document.head.appendChild(metaTag);
  }
  metaTag.setAttribute("content", color);
};
