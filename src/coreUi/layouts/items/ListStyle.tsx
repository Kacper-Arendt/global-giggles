import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { MouseEvent } from "react";

// HOOKS
import {
  globalSetListStyle,
  InitialGlobalStateInterface,
  selectGlobal,
} from "src/redux/slices/global";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";

export const ListStyle = () => {
  const dispatch = useAppDispatch();
  const { listStyle } = useAppSelector(selectGlobal);

  const handleAlignment = (
    event: MouseEvent<HTMLElement>,
    newAlignment: InitialGlobalStateInterface["listStyle"]
  ) => {
    dispatch(globalSetListStyle(newAlignment));
  };

  return (
    <>
      <ToggleButtonGroup
        value={listStyle}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        size="small"
      >
        <ToggleButton value="list" aria-label="left aligned">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="card" aria-label="centered">
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};
