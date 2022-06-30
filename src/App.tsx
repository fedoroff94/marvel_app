import React, { Fragment, useEffect, useState, ChangeEvent  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPlanets } from "./actions/planets";
import { getAllPeople } from "./actions/people";
import {
  StyledContainer,
  StyledSelectContainer,
  StyledSelectHeader,
  StyledInput,
  StyledButtonsContainer,
  StyledCross,
  StyledArrow,
  StyledSelectDataList,
  StyledDataListItem,
} from "./styled-components/styledComponents";
import GlobalStyle from "./styled-components/GlobalStyle";
import { IPerson } from "./types/person";
import Button from '@mui/material/Button';

interface IShow {
  show: boolean;
}

const App:React.FC = () => {
  const [showItems, setShowItems] = useState(false);
  const [inputData, setInputData] = useState('');
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(getAllPlanets());
    dispatch(getAllPeople());
  };

  const toogleListItemsShow = () => {
    setShowItems(!showItems);
  }

  const resetInputData = () => {
    setInputData('');
  }

  useEffect(() => {

  }, [])

  const planetsData = useSelector((store: any) => store?.planets);
  const peopleData = useSelector((store: any) => store?.people);

  return (
    <Fragment>
      <GlobalStyle />
      <StyledContainer>
        <StyledSelectContainer>
          <StyledSelectHeader>
            <StyledInput value={inputData} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setInputData(e.currentTarget.value as any)}}/>
            <StyledButtonsContainer>
              <StyledCross fontSize='medium' onClick={() => resetInputData()}/>
              <div style={{color: '#fbff00', fontSize: '25px'}}>|</div>
              <StyledArrow fontSize='large' onClick={() => toogleListItemsShow()} show={showItems}/>
            </StyledButtonsContainer>
          </StyledSelectHeader>
          <StyledSelectDataList show={showItems}>
            {peopleData.people.map((item: IPerson) => (<StyledDataListItem key={item.birth_year}>{item.name}</StyledDataListItem>))}
          </StyledSelectDataList>
          <Button onClick={() => fetchData()} variant="contained" style={{marginTop: '20px'}}>GET DATA</Button>
        </StyledSelectContainer>
      </StyledContainer>
    </Fragment>
  );
};

export default App;
