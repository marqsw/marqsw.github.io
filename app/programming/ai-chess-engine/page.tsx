import ImageBanner from "@/app/components/ImageBanner";
import LinkButton from "@/app/components/LinkButton";
import Section from "@/app/components/Section";
import SectionParagraph from "@/app/components/Section/SectionParagraph";
import SectionTitle from "@/app/components/Section/SectionTitle";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-10">
      <ImageBanner imagePath="/programming/ai-chess-engine/chess-engine-banner.png" />

      <LinkButton link="https://github.com/marqsw/AI-Chess-Engine">
        <div className="flex gap-5">
          <img className="h-7" src="/home/github-logo.png" />
          <SectionParagraph>View on GitHub</SectionParagraph>
        </div>
      </LinkButton>

      <Section>
        <SectionParagraph>
          In 1997, the world witnessed a computer beats a reigning chess
          champion for the first time – The Deep Blue’s groundbreaking victory
          against the Russian grandmaster Garry Kasparov, marking the milestone
          for chess engines and AI.
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

      <Section>
        <SectionTitle>About This Project</SectionTitle>
        <SectionParagraph>
          This project aims to implement the model described in the paper
          released by Google’s DeepMind, Mastering Chess and Shogi by Self-Play
          with a General Reinforcement Learning Algorithm, and put the model to
          test with the game of chess.
        </SectionParagraph>
      </Section>
      <ImageBanner imagePath="/programming/ai-chess-engine/ui.png" />
      <Section>
        <SectionParagraph>
          Integrated with PyTorch, it has been designed as a complete kit for
          training, running, and customising the AI. It includes a self-training
          script to create a model and trains it through reinforcement learning,
          a demo to launch and run the AI, and a customisable UI framework
          designed and developed for this project. This framework allows
          developers to easily create new pages and add functions.
        </SectionParagraph>
      </Section>

      <LinkButton link="https://github.com/marqsw/AI-Chess-Engine">
        <div className="flex gap-5">
          <img className="h-7" src="/home/github-logo.png" />
          <SectionParagraph>View on GitHub</SectionParagraph>
        </div>
      </LinkButton>
    </div>
  );
}
