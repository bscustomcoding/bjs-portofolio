import * as React from 'react';
import { TheemeContext } from '../../../../StateManagement/ThemeProvider';

function TimeSheet() {
  const {themePalette } = React.useContext(TheemeContext);
  return (
    <div style={{color: themePalette.palette.text.primary}}>
      TimeSheet
    </div>
  );
}

export default TimeSheet;
