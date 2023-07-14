import React from "react";
import { Outlet, useNavigate } from "react-router-dom"
import Filter from "../Filter";
// import LogoImg from "../../assets/icons/Vector (1).svg"
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";
import { Container, Section, Wrapper, Logo, Link, Main } from "./style.js";
import  Footer  from "../Footer";
export const NavbarPage = () => {
    const navigate = useNavigate();
    return (
        <Container>
            
            <Main>
                <Wrapper style={{border:"2px solid red"}}>
                    <Section onClick={() => navigate('/home')} logo>
                        <Logo /><h3>Houzing</h3></Section>
                    <Section>
                        {
                            navbar.map(({ title, path, hidden }, index) => {
                                return !hidden && (
                                    <Link className={({ isActive }) => isActive && 'active'}
                                        key={index}
                                        to={path}>{title}</Link>
                                );
                            })
                        }
                    </Section>
                    <Section >
                        <Button onClick={() => navigate('/signin')} type='dark'>
                            Sign in
                        </Button>
                    </Section>
                </Wrapper>
            </Main>
            <Filter />
            <Outlet />
            <Footer/>
        </Container>
    )
};
export default NavbarPage;