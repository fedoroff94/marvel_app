import React, { Fragment, useEffect, useState, ChangeEvent  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPlanets } from "./actions/planets";
import { getAllPeople } from "./actions/people";
import {
  StyledContainer,
} from "./styled-components/styledComponents";
import GlobalStyle from "./styled-components/GlobalStyle";
import { IPlanet } from "./types/planets";
import { Select, ISelectItem } from './components/Select';

const getFormatedPlanets = (data: IPlanet[]) => data?.map(({ name }) => ({value: name, label: name}));

const App:React.FC = () => {
  const [showItems, setShowItems] = useState(false);
  const [inputData, setInputData] = useState('');
  const [selectedPlanet, setSelectedPlanet] = useState<ISelectItem | null>(null);
  const dispatch = useDispatch();

  const toogleListItemsShow = () => {
    setShowItems(!showItems);
  }

  const resetInputData = () => {
    setInputData('');
  }

  useEffect(() => {
    dispatch(getAllPlanets());
    dispatch(getAllPeople());
  }, [dispatch])

  const planetsData = useSelector((store: any) => store?.planets.data);
  console.log(planetsData);
  const peopleData = useSelector((store: any) => store?.people);

  return (
    <Fragment>
      <GlobalStyle />
      <StyledContainer>
        <Select items={getFormatedPlanets(planetsData)} value={selectedPlanet} onChange={(value) => setSelectedPlanet(value)} />
      </StyledContainer>
    </Fragment>
  );
};

export default App;
