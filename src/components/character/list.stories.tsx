import type { Meta, StoryObj } from '@storybook/react';

import { CharacterList } from './list';

import characters from '@/mock/characters.json'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Character/List',
  tags: ['autodocs'],
  component: CharacterList,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className='bg-slate-700 rounded-lg rounded-tl-none p-4'>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof CharacterList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    characters,
    loading: false
  }
};

export const Loading: Story = {
  args: {
    characters: [],
    loading: true
  }
};
