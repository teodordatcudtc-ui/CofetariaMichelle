'use client'

import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatePresenceWrapperProps {
  children: ReactNode
  mode?: 'wait' | 'sync' | 'popLayout'
  initial?: boolean
  onExitComplete?: () => void
}

const AnimatePresenceWrapper = ({ children, ...props }: AnimatePresenceWrapperProps) => {
  return <AnimatePresence {...props}>{children}</AnimatePresence>
}

export default AnimatePresenceWrapper
