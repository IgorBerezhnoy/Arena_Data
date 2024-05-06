import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeletons = ({ ...props }) => {
  return (
    <ContentLoader
      backgroundColor={'#e3e3e3'}
      foregroundColor={'#ecebeb'}
      height={50}
      speed={2}
      viewBox={'0 0 150 50'}
      width={150}
      {...props}
    >
      <rect height={'20'} rx={'3'} ry={'3'} width={'224'} x={'8'} y={'0'} />
    </ContentLoader>
  )
}
