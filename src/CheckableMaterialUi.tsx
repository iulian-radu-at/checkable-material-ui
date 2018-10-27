import * as React from "react";

import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import { Dictionary, isEmpty } from "lodash";

const styles: Dictionary<React.CSSProperties> = {
  checkbox: {
    padding: "0 5px 0 0"
  },
  container: {
    alignItems: "center",
    display: "flex"
  },
  itemLeft: {
    flexGrow: 0
  },
  itemRight: {
    flexGrow: 1
  }
};

class CheckableMaterialUi extends React.Component<CheckableMaterialUiProps> {
  public render() {
    return (
      <div id={this.props.id} style={this.props.style}>
        {this.renderLabel()}
        <div style={styles.container}>
          <div style={styles.itemLeft}>{this.renderCheckbox()}</div>
          <div style={styles.itemRight}>{this.props.children}</div>
        </div>
        {this.renderHelperText()}
      </div>
    );
  }

  private renderLabel() {
    const { label } = this.props;

    if (isEmpty(label)) {
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

    if (isEmpty(helperText)) {
      return null;
    }

    return <FormHelperText>{helperText}</FormHelperText>;
  }

  private handleCheckboxClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => this.props.onChange(checked);
}

interface CheckableMaterialUiProps {
  id?: string;
  checked?: boolean;
  helperText?: string;
  label?: string;
  onChange: (checked: boolean) => void;
  style?: React.CSSProperties;
}

export default CheckableMaterialUi;
