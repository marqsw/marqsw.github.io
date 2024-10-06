import ImageBanner from "@/app/components/ImageBanner";
import LinkButton from "@/app/components/LinkButton";
import Section from "@/app/components/Section";
import SectionParagraph from "@/app/components/Section/SectionParagraph";
import SectionTitle from "@/app/components/Section/SectionTitle";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-10">
      <ImageBanner imagePath="/programming/chess-engine-banner.png" />

      <LinkButton link="https://github.com/marqsw/AI-Chess-Engine">
        <div className="flex gap-5">
          <img className="h-7" src="/home/github-logo.png" />
          <SectionParagraph>View on GitHub</SectionParagraph>
        </div>
      </LinkButton>

      <Section>
        <SectionTitle>Background</SectionTitle>
        <SectionParagraph>
          In 1997, the world saw a computer beats a reigning chess champion for
          the first time – The Deep Blue’s groundbreaking victory against the
          Russian grandmaster against Garry Kasparov, marking the milestone for
          chess engines and AI.
        </SectionParagraph>

        <SectionParagraph>
          And in 2015, Google’s DeepMind’s AlphaGo marks another milestone,
          beating a Go world champion a decade before experts thought possible,
          in a match against European Champion, Fan Hui. Unlike traditional
          chess engines that relied on hardcoded heuristic, this engine used two
          neural networks to predict and evaluate moves, demonstrating the
          effectiveness of neural networks.
        </SectionParagraph>

        <SectionParagraph>
          The advancement didn’t stop there. AlphaGo’s successor, AlphaGo Zero,
          learned Go from scratch without any training data. And AlphaZero,
          released in 2017 in a paper by Google’s DeepMind, could self-train to
          play any board games.
        </SectionParagraph>
      </Section>
    </div>
  );
}
