import Avatar from "./components/Avatar";
import LinkButton from "./components/LinkButton";
import SectionTitle from "./components/Section/SectionTitle";
import CardGrid from "./components/CardGrid";
import SectionHeading from "./components/Section/SectionHeading";
import Section from "./components/Section";
import SectionParagraph from "./components/Section/SectionParagraph";

// projects in reverse chronological order
const projects = [
  {
    title: "AI Chess Engine",
    subtitle: "PyTorch",
    label: "July 2024",
    description:
      "An intelligent, neural network-based AI that masters any board games autonomously without any human assistance",
    imagePath: "/home/chess-engine-cover.png",
    link: "/programming/ai-chess-engine",
  },

  {
    title: "Portfolio Website",
    subtitle: "React",
    label: "October 2024",
    description:
      "An elegant and responsive website to organises and introduces some projects of mine",
    imagePath: "/home/portfolio-website-cover.png",
    // link: "https://marqsw.github.io/",
  },

  {
    title: "Sensors",
    subtitle: "React Native",
    label: "Coming in late October",
    description:
      "A beautiful, cross-platform app that make use of the amazing technologies embedded in a phone and turns it into a measuring tool",
  },

  {
    title: "MultiCam",
    subtitle: "React Native",
    label: "Upcoming...",
    description:
      "A mobile camera app with intuitive and advanced controls for daily and professional use",
  },
].reverse();

const contacts = [
  {
    name: "LinkedIn",
    image: "/home/linkedin-logo.png",
    link: "https://www.linkedin.com/in/marquis-wong-80217b2ba",
  },
  {
    name: "GitHub",
    image: "/home/github-logo.png",
    link: "https://github.com/marqsw",
  },
  {
    name: "Email",
    image: "/home/gmail-logo.png",
    link: "mailto:marqswong@gmail.com",
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-10">
      <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
        <div className="w-64">
          <Avatar imagePath="/home/profile-picture.jpeg"></Avatar>
        </div>
        <div className="flex w-72 flex-col gap-4 text-center md:text-left">
          <div>
            <SectionHeading>Hi, I am</SectionHeading>
            <SectionTitle>Marquis</SectionTitle>
          </div>
          <p>I am a full stack developer and a mechaincal engineering student at UCL</p>
        </div>
      </div>

      <div className="flex min-w-3.5 flex-col justify-center gap-5 sm:flex-row">
        {contacts.map((contact) => {
          return (
            <div key={contact.name}>
              <LinkButton link={contact.link}>
                <img className="h-7" src={contact.image} />
                <p>{contact.name}</p>
              </LinkButton>
            </div>
          );
        })}
      </div>

      <Section>
        <SectionTitle>But who am I really?</SectionTitle>
        <SectionParagraph>
          I am a tech enthusiast who continuously challenge myself to solve
          problems and create better work. This is why optimising code and
          building user interface is my favourite part of programming. As a
          mechanical engineering student at the same time, I also like exploring
          new things and learn how they work. I never get tired of building
          things and excel in problem-solving and lateral thinking.
        </SectionParagraph>
      </Section>

      <Section>
        <SectionTitle>Recent Projects</SectionTitle>
        <CardGrid cardProps={projects}></CardGrid>
      </Section>
    </div>
  );
}
