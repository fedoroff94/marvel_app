import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPlanets } from "./actions/planets";
import { getAllPeople } from "./actions/people";
import {
  StyledContainer,
  StyledButton,
  StyledDataContainer,
  StyledPlanetsContainer,
} from "./styled-components/styledComponents";
import GlobalStyle from "./styled-components/GlobalStyle";

const App = () => {
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(getAllPlanets());
    dispatch(getAllPeople());
  };

  const planets = useSelector((store: any) => store?.planets);
  const people = useSelector((store: any) => store?.people);

  return (
    <Fragment>
      <GlobalStyle />
        <StyledContainer>
          <StyledButton variant="contained" onClick={() => {fetchData()}}>Get data</StyledButton>
          <StyledDataContainer>
            <StyledPlanetsContainer>
              {/* {planets.length !== 0 && planets.map(({ }) => {

              })} */}
            </StyledPlanetsContainer>
          </StyledDataContainer>
        </StyledContainer>
    </Fragment>
  );
};

export default App;
