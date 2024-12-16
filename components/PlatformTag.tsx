import {
  IconBrandAndroid,
  IconBrandApple,
  IconBrandChrome,
  IconBrandEdge,
  IconBrandFinder,
  IconBrandFirefox,
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
  },
  macos: {
    name: "macOS",
    icon: IconBrandFinder,
    url: "https://www.apple.com/macos/",
  },
  linux: {
    name: "Linux",
    icon: IconDeviceDesktop,
    url: "https://fedoraproject.org/",
  },
  ios: {
    name: "iOS",
    icon: IconBrandApple,
    url: "https://www.apple.com/ios/",
  },
  android: {
    name: "Android",
    icon: IconBrandAndroid,
    url: "https://www.android.com/",
  },
  chrome: {
    name: "Chrome",
    icon: IconBrandChrome,
    url: "https://www.google.com/chrome/",
  },
  edge: {
    name: "Edge",
    icon: IconBrandEdge,
    url: "https://www.microsoft.com/edge/",
  },
  firefox: {
    name: "Firefox",
    icon: IconBrandFirefox,
    url: "https://www.mozilla.org/firefox/",
  },
  safari: {
    name: "Safari",
    icon: IconBrandSafari,
    url: "https://www.apple.com/safari/",
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
  return (
    <Tag url={url}>
      {iconVisible && <Icon className="w-5" />}
      {nameVisible && <p className="text-nowrap text-xs">{name}</p>}
    </Tag>
  );
}
