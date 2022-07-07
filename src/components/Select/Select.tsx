import { ContentPasteSearchOutlined } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import {
  StyledSelectContainer,
  StyledSelectHeader,
  StyledInput,
  StyledButtonsContainer,
  StyledCross,
  StyledArrow,
  StyledSelectDataList,
  StyledDataListItem,
} from "./StyledSelect";

export interface ISelectItem {
  value: string;
  label: string;
}

interface ISelect {
  items: ISelectItem[];
  value?: ISelectItem | null;
  disabled?: boolean;
  onChange: (value: ISelectItem | null) => void;
}

export const Select = ({ value, items, onChange }: ISelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredList, setFilteredList] = useState(items);
  const [searchValue, setSearchValue] = useState('');
  const ref = useRef<HTMLDivElement | null>(null);

  useClickOutside(ref, () => { setIsOpen(false) });

  useEffect(() => {
    setFilteredList(items)
  }, [items])

  const filterHandler = (e: any) => {
    let filteredItems = items.filter(({ value }) =>
      value.toLocaleLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchValue(e.target.value);
    setFilteredList(filteredItems);
  };
 
  console.log('value?.label', value?.label);

  return (
    <StyledSelectContainer ref={ref}>
      <StyledSelectHeader>
        <StyledInput
          value={isOpen ? searchValue : (value?.label || '')}
          placeholder="Choose your planet"
          onChange={(e) => filterHandler(e)}
          onFocus={() => setIsOpen(true)}
        />
        <StyledButtonsContainer>
          <StyledCross
            fontSize="medium"
            onClick={() => {
              setIsOpen(false);
              setSearchValue('');
              onChange(null);
            }}
          />
          <div style={{ color: "#fbff00", fontSize: "25px" }}>|</div>
          <StyledArrow
            fontSize="large"
            onClick={() => setIsOpen((prev) => !prev)}
            isOpen={isOpen}
          />
        </StyledButtonsContainer>
      </StyledSelectHeader>
      {isOpen && (
        <StyledSelectDataList>
          {filteredList.map((item) => (
            <StyledDataListItem 
              key={item.value} 
              onClick={() => {
                onChange(item);
                setIsOpen(false);
                setSearchValue('');
              }}
            >
              {item.label}
            </StyledDataListItem>
          ))}
        </StyledSelectDataList>
      )}
    </StyledSelectContainer>
  );
};
