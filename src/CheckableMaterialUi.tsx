import * as React from 'react';
import { Checkbox, FormHelperText, InputLabel } from '@mui/material';

const styles: { [key: string]: React.CSSProperties } = {
  checkbox: {
    padding: '0 5px 0 0',
  },
  container: {
    alignItems: 'center',
    display: 'flex',
  },
  itemLeft: {
    flexGrow: 0,
  },
  itemRight: {
    flexGrow: 1,
  },
};

class CheckableMaterialUi extends React.Component<CheckableMaterialUiProps> {
  public render() {
    const { children, id, style } = this.props;

    return (
      <div id={id} style={style}>
        {this.renderLabel()}
        <div style={styles.container}>
          <div style={styles.itemLeft}>{this.renderCheckbox()}</div>
          <div style={styles.itemRight}>{children}</div>
        </div>
        {this.renderHelperText()}
      </div>
    );
  }

  private renderLabel() {
    const { label } = this.props;

    if (this.isEmpty(label)) {
      return null;
    }

    return <InputLabel>{label}</InputLabel>;
  }

  private renderCheckbox() {
    return (
      <Checkbox
        checked={this.props.checked}
        color="primary"
        onChange={this.handleCheckboxClick}
        style={styles.checkbox}
      />
    );
  }

  private renderHelperText() {
    const { helperText } = this.props;

    if (this.isEmpty(helperText)) {
      return null;
    }

    return <FormHelperText>{helperText}</FormHelperText>;
  }

  private isEmpty = (str?: string): boolean =>
    str === undefined || str.length === 0;

  private handleCheckboxClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => this.props.onChange(checked);
}

interface CheckableMaterialUiProps {
  children: React.ReactNode;
  id?: string;
  checked?: boolean;
  helperText?: string;
  label?: string;
  onChange: (checked: boolean) => void;
  style?: React.CSSProperties;
}

export default CheckableMaterialUi;
