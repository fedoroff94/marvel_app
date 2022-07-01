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
import Button from "@mui/material/Button";

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

  return (
    <StyledSelectContainer>
      <StyledSelectHeader>
        <StyledInput
          value={value?.label}
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          //   setInputData(e.currentTarget.value as any);
          // }}
        />
        <StyledButtonsContainer>
          {/* <StyledCross fontSize="medium" onClick={() => resetInputData()} /> */}
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
          {items?.map((item) => (
            <StyledDataListItem key={item.value} onClick={() => onChange(item)}>
              {item.label}
            </StyledDataListItem>
          ))}
        </StyledSelectDataList>
      )}
    </StyledSelectContainer>
  );
};
