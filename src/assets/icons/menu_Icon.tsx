import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'currentColor'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 25 24'}
    width={'25'}
    {...props}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <path
      d={'M3.81036 6.6207H20.7783M3.81036 11.8727H20.7783M3.81036 17.1247H20.7783'}
      stroke={'#212125'}
      strokeLinecap={'round'}
      strokeMiterlimit={'10'}
      strokeWidth={'2'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
