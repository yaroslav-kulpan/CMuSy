import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './modal';
import { ModalContent } from './modal-content';
import { ModalActions } from './modal-actions';
import Button from '../button';
import { ModalTitle } from './modal-title';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: 'Primary',
    open: true,
  },
};

export const WithTitle: Story = {
  args: {
    open: true,
    children: (
      <>
        <ModalTitle>Headline</ModalTitle>
        <ModalContent>
          <p className="text-body-1">
            Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming
            aperiam delicata.
          </p>
        </ModalContent>
      </>
    ),
  },
};

export const Dialog: Story = {
  args: {
    open: true,
    children: (
      <>
        <ModalTitle>Headline</ModalTitle>
        <ModalContent>
          <p className="text-body-1">
            Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming
            aperiam delicata.
          </p>
        </ModalContent>
        <ModalActions>
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button variant="outlined" color="primary" autoFocus>
            Save
          </Button>
        </ModalActions>
      </>
    ),
  },
};
