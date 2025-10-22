'use client'

import { motion } from 'framer-motion'
import { ReactNode, forwardRef } from 'react'

interface MotionWrapperProps {
  children: ReactNode
  className?: string
  initial?: any
  animate?: any
  exit?: any
  transition?: any
  whileHover?: any
  whileInView?: any
  viewport?: any
  layout?: any
  onClick?: () => void
  onHoverStart?: () => void
  onHoverEnd?: () => void
  as?: keyof JSX.IntrinsicElements
  onSubmit?: (e: React.FormEvent) => void
  [key: string]: any
}

const MotionWrapper = forwardRef<any, MotionWrapperProps>(({ as = 'div', children, ...props }, ref) => {
  const MotionComponent = motion[as as keyof typeof motion] as any
  return <MotionComponent ref={ref} {...props}>{children}</MotionComponent>
})

MotionWrapper.displayName = 'MotionWrapper'

export default MotionWrapper
