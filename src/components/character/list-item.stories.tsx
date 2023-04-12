import type { Meta, StoryObj } from '@storybook/react';

import { CharacterListItem } from './list-item';

import characters from '@/mock/characters.json'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Character/List Item',
  tags: ['autodocs'],
  component: CharacterListItem,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className='bg-slate-700 rounded-lg rounded-tl-none p-4'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof CharacterListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    character: characters[0]
  }
};
