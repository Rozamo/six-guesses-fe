import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
// import LetterBox from "./LetterBox";
import LetterBox from "../../../components/LetterBox";

const LetterBoxStory = {
  title: "LetterBox",
  component: LetterBox,
} as ComponentMeta<typeof LetterBox>;

const Template: ComponentStory<typeof LetterBox> = (args) => (
  <LetterBox {...args} />
);
const Default = Template.bind({});
Default.args = {};

export { Default };
export default LetterBoxStory;
