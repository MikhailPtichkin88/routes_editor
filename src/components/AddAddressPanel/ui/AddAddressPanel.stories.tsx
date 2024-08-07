import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { AddAddressPanel } from './AddAddressPanel'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const meta: Meta<typeof AddAddressPanel> = {
  title: 'components/AddAddressPanel',
  component: AddAddressPanel,
  decorators: [
    (Story: StoryFn) => {
      const queryClient = new QueryClient()
      return (
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Story />
          </QueryClientProvider>
        </BrowserRouter>
      )
    },
  ],
  argTypes: {
    placeholder: { control: 'text' },
    loading: { control: 'boolean' },
    className: { control: 'text' },
  },
  parameters: {
    mockData: [
      {
        url: 'http://localhost:8002/address_list',
        method: 'POST',
        status: 200,
        response: [],
      },
    ],
  },
}

export default meta

type Story = StoryObj<typeof AddAddressPanel>

export const Default: Story = {}
