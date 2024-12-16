import {
  IconAddressBook,
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconBrandLinkedinFilled,
  IconMail,
  IconMailFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import Tag from "./Tag";

export type ContactPlatform = "linkedin" | "github" | "email";

export type ContactTagProps = {
  platform: ContactPlatform;
  url: string;
  iconVisible?: boolean;
  nameVisible?: boolean;
};

const icons = {
  email: { name: "Email", icon: IconMail },
  github: { name: "GitHub", icon: IconBrandGithub },
  linkedin: { name: "LinkedIn", icon: IconBrandLinkedin },
};

export default function ContactTag({
  platform,
  url,
  iconVisible = true,
  nameVisible = false,
}: ContactTagProps) {
  const Icon = icons[platform].icon;
  const name = icons[platform].name;

  return (
    <Tag url={url}>
      {iconVisible && <Icon className="" />}
      {nameVisible && name}
    </Tag>
  );
}
