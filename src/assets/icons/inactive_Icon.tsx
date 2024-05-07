import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    fill={'#FF003D'}
    height={'14'}
    ref={ref}
    viewBox={'0 0 14 14'}
    width={'14'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <path
      clipRule={'evenodd'}
      d={
        'M7 0C10.8598 0 14 3.1402 14 7C14 10.8598 10.8598 14 7 14C3.1402 14 0 10.8598 0 7C0 3.1402 3.1402 0 7 0ZM7 1.05C3.7191 1.05 1.05 3.7191 1.05 7C1.05 10.2809 3.7191 12.95 7 12.95C10.2809 12.95 12.95 10.2809 12.95 7C12.95 3.7191 10.2809 1.05 7 1.05ZM7.00273 8.95713C7.38983 8.95713 7.70273 9.27003 7.70273 9.65713C7.70273 10.0442 7.38983 10.3571 7.00273 10.3571C6.61563 10.3571 6.29923 10.0442 6.29923 9.65713C6.29923 9.27003 6.60933 8.95713 6.99573 8.95713H7.00273ZM6.99587 3.8178C7.28567 3.8178 7.52087 4.053 7.52087 4.3428V7.4361C7.52087 7.7259 7.28567 7.9611 6.99587 7.9611C6.70607 7.9611 6.47087 7.7259 6.47087 7.4361V4.3428C6.47087 4.053 6.70607 3.8178 6.99587 3.8178Z'
      }
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
