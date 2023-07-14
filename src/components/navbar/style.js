import styled from "styled-components";
import { ReactComponent as LogoImg } from "../../assets/icons/Vector (1).svg";
import { NavLink } from "react-router-dom";



const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;
const Main = styled.div`
display: flex;
justify-content: center;
background:var(--colorPrimary);
`;
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border:2px solid red;

color: #ffff;
padding: var(--padding);
height: 64px;

font-size: 16px;
width: 100%;
//max-width: 1440px;
`;


const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && 'pointer'};
  .active{
    color: yellow;
  }
`;

const Logo = styled(LogoImg)`
width: 30px;
margin-right: 12px;
& path{
    fill:#ffff;
}
`;
const Link = styled(NavLink)`
text-decoration: none;
padding: 0 32px;
color: black;
`;
export { Container, Wrapper, Section, Logo, Link, Main };

