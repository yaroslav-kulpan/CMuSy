import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Steps from './stepper';
import { Step } from './step';

const meta: Meta<typeof Steps> = {
  title: 'Steps',
  component: Steps,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Steps>;

export const Default = () => {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <Steps activeStep={activeStep}>
      <Step label="Order placed" description="Lorem ipsum dolor sit amet">
        1
      </Step>
      <Step
        label="Order being prepared"
        description="Lorem ipsum dolor sit amet"
      >
        2
      </Step>
      <Step label="Out for delivery" description="Lorem ipsum dolor sit amet">
        3
      </Step>
      <Step label="Delivered" description="Lorem ipsum dolor sit amet">
        4
      </Step>
    </Steps>
  );
};
