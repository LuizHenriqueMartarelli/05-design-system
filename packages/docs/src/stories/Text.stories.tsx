import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@mart-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ad, quo aperiam voluptatibus eos pariatur dolor iste esse! Deserunt iure obcaecati quis sint necessitatibus velit, eveniet doloremque magnam sunt eos!',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    size: 'md',
  },
}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Stront text',
    as: 'strong',
  },
}
