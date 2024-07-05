import Link from "next/link";
import MagicButton from "@/components/ui/magic-button";
import { Navigation } from "lucide-react";

const ContactMeLink = () => {
  return (
    <Link href="mailto:0426vincent@gmail.com">
      <MagicButton title="Contact Me" icon={<Navigation className="size-4" />} position="right" />
    </Link>
  );
};

export default ContactMeLink;