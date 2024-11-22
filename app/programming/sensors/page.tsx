"use client";

import CodeBlock from "@/app/components/CodeBlock";
import Heading from "@/app/components/Heading";
import ImageBanner from "@/app/components/ImageBanner";
import LinkButton from "@/app/components/LinkButton";
import Paragraph from "@/app/components/Paragraph";
import Section from "@/app/components/Section";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="py-10 text-center text-5xl font-black">
        Sensors
        <Paragraph>Visualise and Record Live Data</Paragraph>
      </div>
      <ImageBanner imagePath="/home/sensors-cover.gif" />
      
      <LinkButton link="https://github.com/marqsw/Sensors">
        <div className="flex gap-5">
          <img className="h-7" src="/home/github-logo.png" />
          <p>View on GitHub</p>
        </div>
      </LinkButton>

      <Section>
        <Heading>About this Project</Heading>
        <Paragraph>
          {`          Smartphone is a piece of metal embedded with cutting-edge
          technologies. This includes a variety of sensors that could make it a
          handy measurement tool. However these sensors are not easily
          accessible in any user-friendly sense. This is why I have set out to
          create an app, that is easy on eye and user friendly, to instantly
          visualise data and record it for analysis.
`}
        </Paragraph>
        <Heading>A simple and intuitive interface</Heading>
        <Section>
          <Heading>Neumorphism</Heading>

          <ImageBanner imagePath="/programming/sensors/neumorphism.png" />
          <Paragraph>
            {`            It's all about lights and shadows. This ingenious design style
            creates an illusion of extruded surfaces from the background,
            striking a balance between Skeuomorphism, which mimic real world
            textures, and minimalism. The result is a minimal, calm and quiet
            interface, eliminating any distractions and neutralising the busy
            live data.
`}
          </Paragraph>

          <Heading>Sensor Cards</Heading>
          <ImageBanner imagePath="/programming/sensors/sensor-cards.gif" />
          <Paragraph>
            {`            The sensors and their data are grouped into cards, tapping on it
            would reveal their descriptions, allow viewing and selecting to be
            easily done.
`}
          </Paragraph>

          <Heading>Control Panel</Heading>
          <ImageBanner imagePath="/programming/sensors/control-panel.gif" />

          <Paragraph>
            {`            This little compact panel houses most of the functions needed for
            configuring and recording the sensors. When is not used, it would
            shyly hide away and sit at the bottom. It also acts a "finish"
            button when selecting sensors for recording, expanding again to
            record the video, simplifying workflow and further simplifying the
            user interface.
`}
          </Paragraph>
        </Section>
        <Heading>Installation</Heading>
        <Paragraph>
          {`          Pre-compiled APK downloads are available for Android. iOS users may
          need to compile the app themselves as distributing the app as IPA
          format would require a paid subscription to Apple Developer Program.
`}
        </Paragraph>
      </Section>

      <LinkButton link="https://github.com/marqsw/Sensors/releases">
        <div className="flex gap-5">
          <img className="h-7" src="/programming/sensors/android-head-3D.svg" />
          <p>Download for Android</p>
        </div>
      </LinkButton>

      <Section>
        <Heading>Building the app</Heading>
        <Section>
          <Heading>Setting Up Environment</Heading>
          <div className="flex flex-col justify-center gap-5 sm:flex-row">
            <LinkButton link="https://reactnative.dev/docs/set-up-your-environment">
              <div className="flex items-center gap-5 text-center">
                <img
                  className="h-7"
                  src="/programming/sensors/react-logo.svg"
                />
                <p>Set Up React Native</p>
              </div>
            </LinkButton>
            <LinkButton link="https://docs.expo.dev/get-started/set-up-your-environment/">
              <div className="flex items-center gap-5 text-center">
                <img className="h-7" src="/programming/sensors/expo-logo.png" />
                <p>Set Up Expo</p>
              </div>
            </LinkButton>
          </div>
          <Heading>Building the App</Heading>
          Clone the repository from Github
          <CodeBlock>git clone https://github.com/marqsw/Sensors</CodeBlock>
          <CodeBlock>cd Sensors</CodeBlock>
          Install dependencies using npm
          <CodeBlock>npm install</CodeBlock>
          Build the app via EAS
          <CodeBlock>eas build --platform android --profile preview</CodeBlock>
          or
          <CodeBlock>eas build --platform ios --profile preview</CodeBlock>
        </Section>
      </Section>

      <LinkButton link="https://github.com/marqsw/Sensors">
        <div className="flex gap-5">
          <img className="h-7" src="/home/github-logo.png" />
          <p>View on GitHub</p>
        </div>
      </LinkButton>
    </div>
  );
}
