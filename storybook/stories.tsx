import CheckableMaterialUi from '../src/CheckableMaterialUi';
import React from 'react';
import { ComponentMeta, ComponentStory, storiesOf } from '@storybook/react';

const style: React.CSSProperties = {
  height: 20,
};

const showSelectedValue = (id: string) => (checked: boolean) =>
  (document.getElementById(id)!.textContent = checked
    ? 'selected'
    : 'not selected');

export default {
  title: 'CheckableMaterialUi',
  component: CheckableMaterialUi,
} as ComponentMeta<typeof CheckableMaterialUi>;

export const WithAText: ComponentStory<typeof CheckableMaterialUi> = () => (
  <div>
    <CheckableMaterialUi onChange={showSelectedValue('cmui1')}>
      <strong>Bold</strong> the text
    </CheckableMaterialUi>
    <div style={style} />
    Selected value: <span id="cmui1" />
  </div>
);

export const WithALabel: ComponentStory<typeof CheckableMaterialUi> = () => (
  <div>
    <CheckableMaterialUi
      label="Options for files"
      onChange={showSelectedValue('cmui2')}
    >
      Show hidden files
    </CheckableMaterialUi>
    <div style={style} />
    Selected value: <span id="cmui2" />
  </div>
);

export const WithHelperText: ComponentStory<typeof CheckableMaterialUi> =
  () => (
    <div>
      <CheckableMaterialUi
        helperText="Please select it if you want to see also the hidden files"
        onChange={showSelectedValue('cmui3')}
      >
        Show hidden files
      </CheckableMaterialUi>
      <div style={style} />
      Selected value: <span id="cmui3" />
    </div>
  );

export const WithAComponent: ComponentStory<typeof CheckableMaterialUi> =
  () => (
    <div>
      <CheckableMaterialUi
        label="Do you want only from a specific country?"
        helperText="Please select a continent and input the country"
        onChange={showSelectedValue('cmui4')}
      >
        <select>
          <option selected>Europe</option>
          <option selected>America</option>
          <option selected>Africa</option>
        </select>
        &nbsp;
        <input type="text" placeholder="Country" />
      </CheckableMaterialUi>
      <div style={style} />
      Selected value: <span id="cmui4" />
    </div>
  );
