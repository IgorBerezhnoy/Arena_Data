import React, { ReactNode, forwardRef, useCallback } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

export const CustomScrollbars = ({
  children,
  forwardedRef,
  onScroll,
  style,
}: CustomScrollbarsProps) => {
  const refSetter = useCallback((scrollbarsRef: { view: any }) => {
    if (scrollbarsRef) {
      forwardedRef(scrollbarsRef.view)
    } else {
      forwardedRef(null)
    }
  }, [])

  return (
    <Scrollbars
      onScroll={onScroll}
      // @ts-ignore
      ref={refSetter}
      style={{ ...style, overflow: 'hidden' }}
    >
      {children}
    </Scrollbars>
  )
}
export const CustomScrollbarsVirtualList = forwardRef((props, ref) => (
  <CustomScrollbars {...props} forwardedRef={ref} />
))

type CustomScrollbarsProps = {
  children?: ReactNode
  forwardedRef: any
  onScroll?: any
  style?: any
}
