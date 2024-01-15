import Fileicons from "../assets/sprites/fileicons.md";

export default function listOfIconsName(iconListFile: any = Fileicons) {
  const file = iconListFile
    .replace(/\n/g, "")
    .replace(/^\s+|\s+$/g, "")
    .replace(/[,]$/g, "")
    .split(",");
  return file;
}
