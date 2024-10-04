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

      <div className="flex flex-col gap-5">
        <p className="text-3xl font-extrabold">Background</p>

        <p className="text-2xl font-bold">The Rise of Chess Engines</p>
        <p>
          DeepBlue’s breaking victory in the game against the chess grandmaster
          (name) in (year) had marked the beginning of computer chess. Since
          then, the game of chess could be precisely calculated and perfectly
          play out using powerful search trees implanted with countless
          heuristics handcrafted by experienced chess masters. Year by year,
          chess engines has grown much stronger as more hard coded heuristic was
          added and computer technology advances.
        </p>

        <p className="text-2xl font-bold">Neural Network Chess Engines</p>
        <p>
          In (year), we have yet again made another breakthrough in board game
          engines. Google DeepMind’s AlphaGo beats (name) in Go, a game that is
          considered much harder to solve by a computer, and was said that (it
          couldn’t be solve in 20 years until the technology catches up). This
          mind-blowing chess engine uses a bleeding edge algorithm of the time -
          neural networks. The two neural networks learns from the large amount
          of data DeepMind has collected from previous games of Go by some of
          the best players in the world, slowly learning the best moves and the
          probability of winning.
        </p>

        <p>
          Both of these approaches are impressive results from decades of
          research by the a fleet of brilliant and dedicated minds. However,
          they both introduces a huge amount of time and human effort to tweak
          and prepare, as they either require experienced player to hard code
          the algorithm for more efficient searches, or manually converting the
          collected data into a form that is readable by computer. Furthermore,
          the result is extremely difficult, if not impossible to be transferred
          and applied to a different game. So would it be possible to create an
          algorithm, that does not need any data to be collected, or codes to be
          tweaked by any human and automatically learns all mind of games in the
          world?
        </p>

        <p className="text-xl font-semibold">AlphaGo Zero</p>
        <p>
          In (), Google’s DeepMind released an ultimate version AlphaGo -
          AlphaGo Zero. This time, the algorithm is solely trained from self
          play only. Though playing against itself, the neural network learns
          from its previous mistake and victory, eliminating the need for
          expensive data.
        </p>

        <p className="text-xl font-semibold">AlphaZero</p>
        <p>
          In (2019), Google’s DeepMind had released a research paper, named
          (self play…). It claims that the engine they created could (endnsm “a
          term they’ve used to describe learning from scratch). The engine uses
          the same technology they’ve used for AlphaGo Zero, but they’ve
          combined the two neural networks that used to calculate move
          probability, and winning probability, into one, improving the training
          efficiency. And most importantly, they have improved their input board
          representation and training process to become more generic, allowing
          the algorithm to adapt to different kind of board games.
        </p>
      </div>
    </div>
  );
}
