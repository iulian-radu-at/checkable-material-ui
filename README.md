# checkable-material-ui ![Weekly downloads](https://img.shields.io/npm/dw/checkable-material-ui 'Weekly downloads')

A material-ui component which looks like a TEXTFIELD grouping together a checkbox and a provided component

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/checkable-material-ui/).

## Props

The component accepts the props defined bellow in the table.

### Props accepted by CheckableMaterialUi

| Name       | Type                       | Required | Default   | Description                                                     |
| ---------- | -------------------------- | -------- | --------- | --------------------------------------------------------------- |
| id         | string                     | no       | undefined | The id of the field                                             |
| checked    | boolean                    | no       | false     | If true, the checkbox is selected                               |
| children   | any                        | yes      | -         | The component displayed on the right of the checkbox            |
| helperText | string                     | no       | undefined | The helper text of the field                                    |
| label      | string                     | no       | undefined | The label of the field                                          |
| onChange   | (checked: boolean) => void | yes      | -         | The callback function called when the checkbox value is changed |
| style      | CSSProperties              | no       | undefined | The style applied to the field                                  |

---

## Versions

| CheckableMaterialUi _uses_ | Material-ui |      React       |
| -------------------------: | :---------: | :--------------: |
|                      1.0.x |    3.2.0    |      16.5.2      |
|                      1.1.x |    3.6.0    |      16.6.3      |
|                      1.2.x |    3.9.2    |      16.8.1      |
|                      1.3.x |    3.9.3    |      16.8.6      |
|                      2.0.x |    4.0.2    |      16.8.6      |
|                      2.1.x |    4.2.0    |      16.8.6      |
|                      2.2.x |    4.3.2    |      16.9.0      |
|                      2.3.x |    4.6.1    |      16.9.0      |
|                      2.4.x |    4.9.0    |      16.9.0      |
|                      2.5.x |   4.10.2    |      16.9.0      |
|                      2.6.x |   4.11.0    |      16.9.0      |
|                      2.7.x |   4.11.3    | 16.9.0 or 17.0.0 |
|                      2.8.x |   4.12.3    | 16.9.0 or 17.0.0 |
|                      3.0.x |    5.5.1    |    >= 17.0.0     |
|                      4.0.x |   5.10.17   |    >= 18.0.0     |

### About versioning schema used for CheckableMaterialUi

- Major - it will be increased if the major version of the dependat package changes or there are breaking changes in the code of CheckableMaterialUi
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of CheckableMaterialUi

---

## Example

The base component which allows to create read-only or creatable select components for selecting only one or more values:

```js
import * as React from 'react';
import CheckableMaterialUi from 'checkable-material-ui';
import { ColorsSelect } from 'react-select-material-ui';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CheckableMaterialUi
          helperText="The checkbox must be selected if a color is required"
          label="Colors"
          onChange={this.handleRequireColors}
        >
          <ColorsSelect
            label=""
            options={['red', 'green', 'blue']}
            onChange={this.handleChangeColors}
          />
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

- Updated react and material-ui

### 1.2.0

- Updated packages

### 1.3.0

- Updated packages

### 2.0.0

- Updated packages

### 2.1.0

- Updated packages

### 2.1.1

- Add a story book for this component
- Updated packages

### 2.2.0

- Removed lodash
- Updated packages

### 2.3.0

- Updated packages

### 2.4.0

- Updated packages

### 2.4.1

- Updated packages
- Moved from npm to yarn

### 2.5.0

- Updated packages

### 2.6.0

- Updated packages

### 2.6.1

- Fixed crash produced by "export \* from"

### 2.7.0

- Accepting React 17 as peerDependencies

### 2.7.1

- Fixed security warnings

### 2.8.0

- Updated packages

### 3.0.0

- Migrated to material-ui 5
- Supports minimum React 17

### 4.0.0

- Supports minimum React 18
- Updated packages

### 4.0.1

- Fixed the typedef of the component
