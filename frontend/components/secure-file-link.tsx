import { buttonVariants } from "@/components/ui/button";

interface SecureFileLinkProps {
  href: string;
  label: string;
}

export function SecureFileLink({ href, label }: SecureFileLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonVariants({ variant: "outline", size: "sm" })}
    >
      {label}
    </a>
  );
}
