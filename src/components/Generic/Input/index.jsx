import React,{forwardRef} from "react";
import { Container,Wrapper ,Icon} from "./style";


// export const Input = ({ 
//     type,
//      onChange, 
//      placeholder,
//      icon,
//      name,
//      value,
//      defaultValue ,
//      width,
//      height
//     }) => {
//     return (
//         <Wrapper>
//             <Icon>{icon} </Icon>
//         <Container
        
//             placeholder={placeholder}
//             onChange={onChange}
//             name={name}
//             defaultValue={defaultValue}
//             value={value}
//             type={type}
//             width={width}
//             height={height}
//             icon={icon}/>
            

        
//         </Wrapper>
//     )
// }
export const Input = forwardRef(
    (
      {
        type,
        onChange,
        value,
        defalutValue,
        placeholder,
        name,
        width,
        height,
        icon,
      },
      ref
    ) => {
      return (
        <Wrapper>
          <Icon>{icon}</Icon>
          <Container
            ref={ref}
            icon={icon}
            placeholder={placeholder}
            name={name}
            value={value}
            defaultValue={defalutValue}
            onChange={onChange}
            type={type}
            width={width}
            height={height}
          />
        </Wrapper>
      );
    }
  );
export default Input