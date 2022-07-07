import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface IOpen {
    isOpen: boolean;
}

export const StyledSelectContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 40px;
z-index: 2;
`;

export const StyledSelectHeader = styled.div`
border: 2px solid rgba(248, 255, 117, 0.4);
border-radius: 10px;
max-width: 80vh;
min-width: 30vw;
height: 50px;
display: flex;
align-items: center;
background-color: rgba(253, 255, 145, 0.4);
transition: all 0.5s;
margin: 10px;
&:hover {
  border: 2px solid rgba(248, 255, 117, 0.8);
}
`;

export const StyledInput = styled.input`
width: 80%;
height: 90%;
outline: none;
border: none;
background-image: none;
background-color: transparent;
-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;
padding: 0 20px;
font-size: 30px;
color: #303030;
`;

export const StyledButtonsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 20%;
height: 90%;
transition: all .5s;
`;

export const StyledCross = styled(CloseIcon)`
cursor: pointer;
color: rgba(248, 255, 117, 0.8);
&:hover {
  color: rgba(248, 255, 117, 1);
  transform: scale(1.2, 1.2);
}
`;

export const StyledArrow = styled(KeyboardArrowDownIcon) <IOpen>`
transition: all 1s;
cursor: pointer;
color: rgba(248, 255, 117, 0.8);
transform: ${(props) => props.isOpen ? "rotate(180deg)" : "rotate(0deg)"};
&:hover {
  color: rgba(248, 255, 117, 1);
  transform: scale(1.2, 1.2);
}
`;

export const StyledSelectDataList = styled.div`
display: flex;
flex-direction: column;
transition: all 0.5s;
margin: 10px;
border: 2px solid rgba(248, 255, 117, 0.4);
border-radius: 10px;
max-width: 80vw;
min-width: 30vw;
height: auto;
align-items: center;
justify-content: space-around;
background-color: rgba(253, 255, 145, 0.4);
&:hover {
  border: 2px solid rgba(248, 255, 117, 0.8);
}
`;

export const StyledDataListItem = styled.div`
display: flex;
cursor: pointer;
justify-content: center;
align-items: center;
font-size: 25px;
font-weight: 600;
width: 80%;
margin: 10px auto;
border-radius: 20px;
transition: all .3s;
color: rgba(23, 23, 23, .8);
&:hover {
  transform: scale(1.2, 1.2);
  color: rgba(23, 23, 23, 1);
}
`;