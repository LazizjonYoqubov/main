import styled from 'styled-components';
//import { ReactComponent as bed } from '../../assets/icons/Group 12.svg';
// import { ReactComponent as bed } from '../../assets/icons/Group 12.svg';
// import { ReactComponent as bath } from '../../assets/icons/Group 13.svg';
// import { ReactComponent as garage } from '../../assets/icons/Group 14.svg';
// import { ReactComponent as ruler } from '../../assets/icons/Group 15.svg';
//  import { ReactComponent as love } from '../../assets/icons/3.svg';
// import { ReactComponent as resize } from '../../assets/icons/1.svg';

const Container = styled.div`
border-radius: 3px;
  width: 100%;
  max-width: 280px;
  min-width: 230px;
  max-height: 380px;
  min-height: 250px;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  
`;

const Img=styled.img`
border-radius: 3px;
width: 100%;
/* max-height: 220px;
min-height:200px; */

`;

const Icons = styled.div``;



// const Content = styled.div`
//   display: flex;
//   flex-direction: ${({ footer }) => (footer ? 'row' : 'column')};
//   justify-content: ${({ footer }) => footer && 'space-between'};
//   padding-top: 24px;
//   padding: 16px 20px;
//   background: white;
// `;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-style:normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #FFFFFF;
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  
  border-radius: 3px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: ${({ footer }) => !footer && 'center'};
`;




export {Container,Img,Content,Icons,Blur}

// export { Div, Img, Content, Details, Icons, Divider };


