import styled from "styled-components";

export const SkillsContainer = styled.div`
  padding-bottom: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

export const SkillsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  align-items: center;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const SkillsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const SkillsIcon = styled.img`
  width: 160px;
  height: 160px;
  margin-bottom: 10px;
`;

export const SkillsH1 = styled.h1`
  margin: 64px 0;
  font-size: 2.5rem;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SkillsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const SkillsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
