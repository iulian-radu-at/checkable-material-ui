import * as React from "react";

export interface CheckableMaterialUiProps extends React.Props<CheckableMaterialUi> {
  id?: string;
  checked?: boolean;
  helperText?: string;
  label?: string;
  onChange: (checked: boolean) => void;
  style?: React.CSSProperties;
}

declare class CheckableMaterialUi extends React.Component<CheckableMaterialUiProps> {}

declare module "checkable-material-ui" {
}

export default CheckableMaterialUi;
