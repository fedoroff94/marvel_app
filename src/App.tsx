import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPlanets } from "./actions/planets";
import {
  StyledContainer,
  StyledButton,
} from "./styled-components/styledComponents";
import GlobalStyle from "./styled-components/GlobalStyle";

const App = () => {
  const dispatch = useDispatch();

  const fetchAllPlanets = () => {
    dispatch(getAllPlanets());
  };

  const planets = useSelector((store: any) => store?.planets);
  console.log(planets)

  return (
    <Fragment>
      <GlobalStyle />
        <StyledContainer>
          <StyledButton variant="contained" onClick={() => {fetchAllPlanets()}}>Start wars</StyledButton>
        </StyledContainer>
    </Fragment>
  );
};

export default App;
