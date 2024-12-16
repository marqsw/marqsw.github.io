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

export type ContactPlatform = "linkedin" | "github" | "email";

export type ContactIconProps = {
  platform: ContactPlatform;
  url: string;
};

const icons = {
  email: { default: IconMail, filled: IconMailFilled },
  github: { default: IconBrandGithub, filled: IconBrandGithubFilled },
  linkedin: { default: IconBrandLinkedin, filled: IconBrandLinkedinFilled },
};

export default function ContactIcon(contact: ContactIconProps) {
  const [onHover, setOnHover] = useState(false);

  const Icon = onHover
    ? icons[contact.platform].filled || IconAddressBook
    : icons[contact.platform].default || IconAddressBook;

  return (
    <a href={contact.url} className="flex h-min w-min">
      <Icon
        className="h-auto w-10"
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      />
    </a>
  );
}
