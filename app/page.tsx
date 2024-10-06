import Avatar from "./components/Avatar";
import LinkButton from "./components/LinkButton";
import SectionTitle from "./components/Section/SectionTitle";
import CardGrid from "./components/CardGrid";

// projects in reverse chronological order
const projects = [
  {
    title: "AI Chess Engine",
    subtitle: "PyTorch",
    label: "July 2024",
    description:
      "An intelligent, neural network based AI that masters any board games autonomously without any human assistance",
    imagePath: "/home/chess-engine-cover.png",
    link: "https://github.com/marqsw/AI-Chess-Engine",
  },

  {
    title: "Portfolio Website",
    subtitle: "React",
    label: "October 2024",
    description:
      "An elegant and responsive website to organises and introduces some projects of mine",
    imagePath: "/home/portfolio-website-cover.png",
    link: "https://marqsw.github.io/",
  },

  {
    title: "Sensors",
    subtitle: "React Native",
    label: "Coming in late October",
    description:
      "A beautiful, cross-platform app that turns your phone into a measuring tool, make use of the amazing technologies embeded in a phone",
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
      <div className="w-52">
        <Avatar imagePath="/home/profile-picture.jpeg"></Avatar>
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

      {/* <SectionTitle>Who Am I?</SectionTitle> */}

      <SectionTitle>Recent Projects</SectionTitle>
      <CardGrid cardProps={projects}></CardGrid>
    </div>
  );
}
