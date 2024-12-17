import {
  IconBrandAndroid,
  IconBrandApple,
  IconBrandChrome,
  IconBrandEdge,
  IconBrandFinder,
  IconBrandFirefox,
  IconBrandQq,
  IconBrandSafari,
  IconBrandWindows,
  IconDeviceDesktop,
} from "@tabler/icons-react";
import Tag from "./Tag";

export type UserPlatform =
  | "windows"
  | "macos"
  | "linux"
  | "ios"
  | "android"
  | "chrome"
  | "edge"
  | "firefox"
  | "safari";

export type PlatformTagProps = {
  platform: UserPlatform;
  nameVisible?: boolean;
  iconVisible?: boolean;
};

const platformNameAndIcon = {
  windows: {
    name: "Windows",
    icon: IconBrandWindows,
    url: "https://www.microsoft.com/windows",
    colour: "#357EC7",
  },
  macos: {
    name: "macOS",
    icon: IconBrandFinder,
    url: "https://www.apple.com/macos/",
    colour: "#5990ed",
  },
  linux: {
    name: "Linux",
    icon: IconBrandQq,
    url: "https://fedoraproject.org/",
    colour: "#E9C246",
  },
  ios: {
    name: "iOS",
    icon: IconBrandApple,
    url: "https://www.apple.com/ios/",
    colour: "#E1DFE1",
  },
  android: {
    name: "Android",
    icon: IconBrandAndroid,
    url: "https://www.android.com/",
    colour: "#3DDC84",
  },
  chrome: {
    name: "Chrome",
    icon: IconBrandChrome,
    url: "https://www.google.com/chrome/",
    colour: "#ECC24A",
  },
  edge: {
    name: "Edge",
    icon: IconBrandEdge,
    url: "https://www.microsoft.com/edge/",
    colour: "#2bc3d2",
  },
  firefox: {
    name: "Firefox",
    icon: IconBrandFirefox,
    url: "https://www.mozilla.org/firefox/",
    colour: "#e36f2e",
  },
  safari: {
    name: "Safari",
    icon: IconBrandSafari,
    url: "https://www.apple.com/safari/",
    colour: "#466df5",
  },
};

export default function PlatformTag({
  platform,
  nameVisible = true,
  iconVisible = true,
}: PlatformTagProps) {
  const Icon = platformNameAndIcon[platform].icon;
  const name = platformNameAndIcon[platform].name;
  const url = platformNameAndIcon[platform].url;
  const colour = platformNameAndIcon[platform].colour;
  return (
    <Tag url={url} tint={colour}>
      {iconVisible && <Icon className="w-5" />}
      {nameVisible && <p className="text-nowrap text-sm">{name}</p>}
    </Tag>
  );
}
