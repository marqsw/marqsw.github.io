import Avatar from "./components/Avatar";
import LinkButton from "./components/LinkButton";
import Card from "./components/Card";

// projects in reverse chronological order
const projects = [
  {
    title: "AI Chess Engine",
    description:
      "An intelligent, neural network based AI that masters any board games autonomously without any human assistance",
    imagePath: "/home/chess-engine-cover.png",
    link: "/programming/ai-chess-engine",
  },

  // {
  //   title: "MultiCam",
  //   description: "An iPhone camera app with multicam and fine camera control",
  // },

  // {
  //   title: "Sensors",
  //   description:
  //     "A cross-platform app that utilises all the sensors in a phone",
  // },
  // {
  //   title: "Financial App",
  //   description: "An iOS app to monitor your money",
  // },
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

      <p className="w-full text-3xl font-black">Recent Projects</p>

      <div className="flex flex-wrap justify-center gap-5">
        {projects.map((project) => {
          return (
            <div key={project.title}>
              <Card
                title={project.title}
                description={project.description}
                imagePath={project.imagePath}
                link={project.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
