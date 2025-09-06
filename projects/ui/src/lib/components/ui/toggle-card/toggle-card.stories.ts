import type { Meta, StoryObj } from '@storybook/angular';
import { ToggleCardComponent } from './toggle-card.component';

const meta: Meta<ToggleCardComponent> = {
  title: 'Components/UI/ToggleCard',
  component: ToggleCardComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the toggle card',
    },
    description: {
      control: 'text',
      description: 'Optional description text',
    },
    icon: {
      control: 'text',
      description: 'Icon class name (without icon- prefix)',
    },
    isActive: {
      control: 'boolean',
      description: 'Whether the card is in active state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the card is disabled',
    },
    toggle: {
      action: 'toggled',
      description: 'Emitted when the toggle state changes',
    },
  },
};

export default meta;
type Story = StoryObj<ToggleCardComponent>;

export const Default: Story = {
  args: {
    title: 'Toggle Card',
    description: 'This is a description of the toggle card',
    isActive: false,
    disabled: false,
  },
};

export const Active: Story = {
  args: {
    title: 'Active Toggle Card',
    description: 'This toggle card is currently active',
    isActive: true,
    disabled: false,
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Toggle Card with Icon',
    description: 'This toggle card has an icon',
    icon: 'business',
    isActive: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Toggle Card',
    description: 'This toggle card is disabled',
    isActive: false,
    disabled: true,
  },
};

export const Tenant: Story = {
  args: {
    title: 'Locataire',
    description: 'Accès aux fonctionnalités de locataire',
    icon: 'business',
    isActive: false,
    disabled: false,
  },
};

export const Owner: Story = {
  args: {
    title: 'Propriétaire',
    description: 'Accès aux fonctionnalités de propriétaire',
    icon: 'person',
    isActive: true,
    disabled: false,
  },
};