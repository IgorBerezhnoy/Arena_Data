import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    fill={'#009581'}
    height={'14'}
    ref={ref}
    viewBox={'0 0 14 14'}
    width={'14'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <path
      clipRule={'evenodd'}
      d={
        'M11.9048 3.20449C12.2631 3.50506 12.2994 4.02717 11.9859 4.37067L6.19281 10.7178C6.0357 10.8899 5.81119 10.9919 5.57273 10.9995C5.33427 11.0072 5.10318 10.9197 4.93447 10.7579L2.45171 8.37778C2.11505 8.05503 2.11505 7.53175 2.45171 7.20901C2.78837 6.88626 3.3342 6.88626 3.67086 7.20901L5.50205 8.96453L10.6884 3.28224C11.0019 2.93874 11.5465 2.90393 11.9048 3.20449Z'
      }
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
