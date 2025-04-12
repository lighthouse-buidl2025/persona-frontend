import { Button } from "../ui/button";

export default function ExploreBtn({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button
        className="mt-4 font-[family-name:var(--font-poppins)] rounded-full"
        variant="purple"
      >
        Explore
      </Button>
    </a>
  );
}
