
import {Container,Img,Content,Blur} from './style';
 import noimg from '../../assets/im/unsplash_TiVPTYCG_3E (1).png';
 import category from "../../assets/im/cattegory.png"


export const CategoryCard = ({ onClick, data={} }) => {

  const {name} = data;
  
    
  return (
    <Container onClick={onClick}>
     <Img src={category || noimg} />
     <Blur/>
      <Content>{name || 'Category NAme'}
      </Content>
    </Container>
  );
};

export default CategoryCard;