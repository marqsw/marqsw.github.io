import ImageBanner from "@/app/components/ImageBanner";
import LinkButton from "@/app/components/LinkButton";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-10">
      <ImageBanner imagePath="/programming/chess-engine-banner.png" />

      <LinkButton link="https://github.com/marqsw/AI-Chess-Engine">
        <div className="flex gap-5">
          <img className="h-7" src="/home/github-logo.png" />
          <p>View on GitHub</p>
        </div>
      </LinkButton>
    </div>
  );
}
