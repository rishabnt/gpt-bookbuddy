'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MessagesProvider } from '@/context/messages'
import { FC, ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({children}) => {
    const queryClient = new QueryClient()
    return <QueryClientProvider client={queryClient}><MessagesProvider>{children}</MessagesProvider></QueryClientProvider>
}

export default Providers