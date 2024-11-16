"use client";

import Heading from "@/app/components/Heading";
import ImageBanner from "@/app/components/ImageBanner";
import LinkButton from "@/app/components/LinkButton";
import Paragraph from "@/app/components/Paragraph";
import Section from "@/app/components/Section";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-10">
      <ImageBanner imagePath="/programming/ai-chess-engine/chess-engine-banner.png" />

      <LinkButton link="https://github.com/marqsw/AI-Chess-Engine">
        <div className="flex gap-5">
          <img className="h-7" src="/home/github-logo.png" />
          <p>View on GitHub</p>
        </div>
      </LinkButton>

      <Section>
        <Paragraph>
          In 1997, the world witnessed a computer defeats a reigning chess
          champion for the first time – The Deep Blue’s groundbreaking victory
          against the Russian grandmaster Garry Kasparov, marking the milestone
          for chess engines and AI.
        </Paragraph>
        <Paragraph>
          And in 2015, Google’s DeepMind’s AlphaGo marks another milestone,
          beating a Go world champion a decade before experts thought possible,
          in a match against European Champion, Fan Hui. Unlike traditional
          chess engines that relied on hardcoded heuristics, this engine used
          two neural networks to predict and evaluate moves, demonstrating the
          effectiveness of neural networks.
        </Paragraph>
        <Paragraph>
          The advancement didn’t stop there. AlphaGo’s successor, AlphaGo Zero,
          learned Go from scratch without any training data. And AlphaZero,
          released in 2017 in a paper by Google’s DeepMind, could self-train to
          play any board games.
        </Paragraph>

          <Heading>About This Project</Heading>
          <Paragraph>
            This project aims to implement the model described in the paper
            released by Google’s DeepMind, Mastering Chess and Shogi by
            Self-Play with a General Reinforcement Learning Algorithm, and put
            the model to test with the game of chess.
          </Paragraph>

          </Section>
        <ImageBanner imagePath="/programming/ai-chess-engine/ui.png" />
        <Section>
          <Paragraph>
            Integrated with PyTorch, it has been designed as a complete kit for
            training, running, and customising the AI. It includes a
            self-training script to create a model and repeatedly trains it
            through reinforcement learning, a demo to launch and run the AI, and
            a customisable UI framework specially designed and developed for
            this project. This UI framework allows developers to easily create
            new pages and add functions.
          </Paragraph>
      </Section>


      <LinkButton link="https://github.com/marqsw/AI-Chess-Engine">
        <div className="flex gap-5">
          <img className="h-7" src="/home/github-logo.png" />
          <p>View on GitHub</p>
        </div>
      </LinkButton>
    </div>
  );
}
