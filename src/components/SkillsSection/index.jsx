import React from "react";
import { skills } from "../ProjectSection/Data";

import {
  SkillsContainer,
  SkillsH1,
  SkillsWrapper,
  SkillsCard,
  SkillsIcon,
  SkillsH2,
  SkillsP,
} from "./SkillsElements";

  const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsH1>Skills</SkillsH1>
      <SkillsWrapper>
        {skills.map((skill, i) => 
          (<SkillsCard key={i}>
            <SkillsIcon src={skill.icon.default} />
            <SkillsH2>{skill.name}</SkillsH2>
            <SkillsP>{skill.description}</SkillsP>
          </SkillsCard>))
        }
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
