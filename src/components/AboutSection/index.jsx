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
            I've been interested in computers since I had my first Systemax in
            junior high school, but I only discovered the joy of solving
            problems with code after I entered the workforce. I gain immense
            satisfaction from both the simple (writing a Bash or Python script
            to automate small repetitive work processes) and the more complex
            (building a web app from the ground up).
          </Subtitle>
          <Subtitle darkText>
            In my first professional role, I was employed as a paralegal in a
            large law firm. One of my earliest tasks was to compile and update
            an Excel workbook of new financial filings each week. After spending
            a couple of weeks manually pulling and inputting the new data, I
            discovered Selenium and Python (then at version 2.7) and spent a
            weekend of my own time crafting a script to eliminate the long,
            repetitive parts of this process. The code was ugly and not at all
            DRY, nor was the script fully automated or tested, but it worked,
            and it meant I could complete the task by identifying a few key
            parameters and letting the program do the rest. It also ignited a
            passion in me for solving problems with code.
          </Subtitle>
          <Subtitle darkText>
            After years working in a broader support role for a much smaller,
            focused IP litigation law firm, I've developed several applications
            to automate document management and certain research projects. These
            have enabled the firm to compete on a cost effective basis with much
            larger competitors. They use various tools, including Excel and VBA
            macros, Python cronjobs, or a full MERN stack. I've put together
            dashboards to assist in communication among the firm, its clients,
            and expert witnesses the during stressful periods immediately
            preceding and during trials.
          </Subtitle>
          <Subtitle darkText>
            Following an intensive six-month bootcamp and many more hours of
            self-study, I feel confident working across the stack and able to
            pick up new technologies as necessary. Most recently, I have spent
            time gaining experience with Linux and various DevOps-related
            workflows as well as best practices for automated testing.
          </Subtitle>
        </TextWrapper>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
