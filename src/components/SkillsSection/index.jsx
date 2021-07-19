import React from "react";
import Icon1 from "../../assets/images/svg-1.svg";
import Icon2 from "../../assets/images/svg-2.svg";
import Icon3 from "../../assets/images/svg-3.svg";

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
        <SkillsCard>
          <SkillsIcon src={Icon1} />
          <SkillsH2>Reduce Expenses</SkillsH2>
          <SkillsP>
            We help reduce your fees and increase your overall revenue.
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Icon2} />
          <SkillsH2>Virtual Offices</SkillsH2>
          <SkillsP>
            You can access our platform anywhere in the world.
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon src={Icon3} />
          <SkillsH2>Premium Benefits</SkillsH2>
          <SkillsP>
            Unlock our special membership cart for 5% cash back.
          </SkillsP>
        </SkillsCard>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
