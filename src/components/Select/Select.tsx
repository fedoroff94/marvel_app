import { ContentPasteSearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";
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
  onChange: (value: ISelectItem) => void;
}

export const Select = ({ value, items, onChange }: ISelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredList, setFilteredList] = useState(items);

  const filterHandler = (e: any) => {
    let toLowerCaseItems = items.map((item) => ({
      value: item.value.toLocaleLowerCase(),
      label: item.label.toLocaleLowerCase(),
    }));
    let filteredItems = toLowerCaseItems.filter(({ value }) =>
      value.includes(e.currentTarget.value.toLowerCase())
    );
    setFilteredList(filteredItems);
    onChange({
      value: e.currentTarget.value,
      label: e.currentTarget.value,
    });
  };
  
  return (
    <StyledSelectContainer>
      <StyledSelectHeader>
        <StyledInput
          value={value?.label}
          placeholder="Choose your planet"
          onChange={(e) => filterHandler(e)}
        />
        <StyledButtonsContainer>
          <StyledCross
            fontSize="medium"
            onClick={() => onChange({ value: "", label: "" })}
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
            <StyledDataListItem key={item.value} onClick={() => onChange(item)}>
              {item.label}
            </StyledDataListItem>
          ))}
        </StyledSelectDataList>
      )}
    </StyledSelectContainer>
  );
};
