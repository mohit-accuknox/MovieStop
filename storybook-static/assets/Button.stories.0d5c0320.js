var a=Object.defineProperty;var n=(t,e)=>a(t,"name",{value:e,configurable:!0});import{j as l}from"./jsx-runtime.a2807e11.js";import{B as r}from"./Button.1806e7bb.js";import"./iframe.0855a1dd.js";import"./index.b30b2316.js";const B={parameters:{storySource:{source:`import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}},secondary:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}},large:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}},small:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}}}}},title:"Example/Button",component:r,argTypes:{backgroundColor:{control:"color"}}},o=n(t=>l(r,{...t}),"Template"),s=o.bind({});s.args={primary:!0,label:"Button"};const c=o.bind({});c.args={label:"Button"};const i=o.bind({});i.args={size:"large",label:"Button"};const d=o.bind({});d.args={size:"small",label:"Button"};const b=["Primary","Secondary","Large","Small"];export{i as Large,s as Primary,c as Secondary,d as Small,b as __namedExportsOrder,B as default};
//# sourceMappingURL=Button.stories.0d5c0320.js.map
