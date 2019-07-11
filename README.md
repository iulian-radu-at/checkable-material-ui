# checkable-material-ui

A material-ui component which looks like a TEXTFIELD grouping together a checkbox and a provided component

---

## Props

The component accepts the props defined bellow in the table.

### Props accepted by CheckableMaterialUi

| Name       | Type                       | Required | Default   | Description                                                     |
|------------|----------------------------|----------|-----------|-----------------------------------------------------------------|
| id         | string                     | no       | undefined | The id of the field                                             |
| checked    | boolean                    | no       | false     | If true, the checkbox is selected                               |
| children   | any                        | yes      | -         | The component displayed on the right of the checkbox            |
| helperText | string                     | no       | undefined | The helper text of the field                                    |
| label      | string                     | no       | undefined | The label of the field                                          |
| onChange   | (checked: boolean) => void | yes      | -         | The callback function called when the checkbox value is changed |
| style      | CSSProperties              | no       | undefined | The style applied to the field                                  |

---

## Versions

| CheckableMaterialUi _uses_ | Material-ui | React  |
|---------------------------:|:-----------:|:------:|
|                      1.0.x |    3.2.0    | 16.5.2 |
|                      1.1.x |    3.6.0    | 16.6.3 |
|                      1.2.x |    3.9.2    | 16.8.1 |
|                      1.3.x |    3.9.3    | 16.8.6 |
|                      2.0.x |    4.0.2    | 16.8.6 |
|                      2.1.x |    4.2.0    | 16.8.6 |

### About versioning schema used for CheckableMaterialUi

- Major - it will be increased if the major version of the dependat package changes or there are breaking changes in the code of CheckableMaterialUi
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of CheckableMaterialUi

---

## Example

The base component which allows to create read-only or creatable select components for selecting only one or more values:

```js
import * as React from "react";
import CheckableMaterialUi from "checkable-material-ui";
import { ColorsSelect } from "react-select-material-ui";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CheckableMaterialUi
          helperText="The checkbox must be selected if a color is required"
          label="Colors"
          onChange={this.handleRequireColors}
        >
          <ColorsSelect label="" options={["red", "green", "blue"]} onChange={this.handleChangeColors} />
        </CheckableMaterialUi>
      </div>
    );
  }

  handleRequireColors = (checked: boolean) => {
    console.log(checked);
  };

  handleChangeColors = (colors: string[]) => {
    console.log(colors);
  };
}

export default App;
```

---

## Changelog

### 1.0.0

- checkable-material-ui is made publicly available

### 1.1.1

- updated react and material-ui

### 1.2.0

- updated packages

### 1.3.0

- updated packages

### 2.0.0

- updated packages

### 2.1.0

- updated packages
