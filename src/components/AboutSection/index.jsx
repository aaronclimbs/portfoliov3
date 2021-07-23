import {
  AboutContainer,
  AboutWrapper,
  TextWrapper,
  Heading,
  Subtitle,
} from "./AboutElements";

const AboutSection = () => {
  return (
    <AboutContainer id="about" lightBg>
      <AboutWrapper>
        <TextWrapper>
          <Heading>About Me</Heading>
          <Subtitle darkText>
            I've been interested in computers for what seems like forever, but I
            only discovered my passion for solving problems with code once I
            entered the workforce. I gain immense satisfaction from both the
            simple (writing a Bash or Python script to automate some small
            repetitive process) or the more complex (building a web app from the
            ground up).
          </Subtitle>
          <Subtitle darkText>
            In my first professional role, I was working as a paralegal in a
            large litigation firm. One of my earliest tasks was to compile and
            update an Excel workbook of new financial filings each week. After
            spending a couple weeks manually pulling and inputting the new data,
            I discovered Selenium and Python (2.7 at the time) and spent a
            weekend of my own time crafting a script to make this process less
            painful. The code was ugly and not at all DRY, nor was the script 
            fully automated or tested, but it worked. It also ignited a passion
            in me for solving problems with code.
          </Subtitle>
          <Subtitle darkText>
            After years working in litigation support, I've also gained a strong
            appreciation for the difference technology can make in the
            professional world. I've worked to automate small tasks, be it
            through Excel and VBA macros or Python cronjobs. I've put together
            dashboards to assist in communication during stressful periods.
          </Subtitle>
          <Subtitle darkText>
            I feel confident working within the AWS or Azure ecosystems. I enjoy
            learning new technologies and have spent quite some time this year
            gaining experience with Linux and various DevOps-related workflows.
          </Subtitle>
        </TextWrapper>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
