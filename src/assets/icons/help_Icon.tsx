import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    fill={'none'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 25 24'}
    width={'25'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <path
      d={
        'M6.5 6.33535C6.5 6.33535 6.57802 4.54728 8.31733 3.11357C9.35008 2.26234 10.5903 2.01581 11.7017 2.00064C12.7165 1.98817 13.6236 2.15994 14.1659 2.42435C15.093 2.87842 16.9033 3.98377 16.9033 6.33535C16.9033 8.80993 15.3222 9.93154 13.5249 11.1675C11.7277 12.4034 11.2682 13.6155 11.2682 15.0048'
      }
      stroke={'#212125'}
      strokeLinecap={'round'}
      strokeMiterlimit={'10'}
      strokeWidth={'2'}
    />
    <path
      d={
        'M11.2143 20C11.9244 20 12.5 19.4244 12.5 18.7143C12.5 18.0042 11.9244 17.4286 11.2143 17.4286C10.5042 17.4286 9.92859 18.0042 9.92859 18.7143C9.92859 19.4244 10.5042 20 11.2143 20Z'
      }
      fill={'#212125'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
