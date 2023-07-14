import styled from 'styled-components';
//import { ReactComponent as bed } from '../../assets/icons/Group 12.svg';
import { ReactComponent as bed } from '../../assets/icons/Group 12.svg';
import { ReactComponent as bath } from '../../assets/icons/Group 13.svg';
import { ReactComponent as garage } from '../../assets/icons/Group 14.svg';
import { ReactComponent as ruler } from '../../assets/icons/Group 15.svg';
 import { ReactComponent as love } from '../../assets/icons/3.svg';
import { ReactComponent as resize } from '../../assets/icons/1.svg';

const Container = styled.div`
  width: 100%;
  max-width: 380px;
  min-height: 330px;
  height: 430px;
  padding: ${({gap})=>gap && `${gap}px`};
  /* filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06)); */
    background: white;
  border: 1px solid #e6e9ec;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  cursor: pointer;
  margin: 100px;
`;

const Img=styled.img`
width: 100%;
max-height: 220px;
min-height:200px;

`;

const Icons = styled.div``;



const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? 'row' : 'column')};
  justify-content: ${({ footer }) => footer && 'space-between'};
  padding-top: 24px;
  padding: 16px 20px;
  background: white;
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


Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Love = styled(love)`
  width: 35px;
  height: 35px;
  padding: 6px;
  background: #f6f8f9;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

const Divider = styled.div`
  background: #e6e9ec;
  height: 1px;
  width: 100%;
`;
export {Container,Img,Details,Content,Icons,Divider}

// export { Div, Img, Content, Details, Icons, Divider };


