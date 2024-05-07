import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    fill={'currentColor'}
    height={'21'}
    ref={ref}
    viewBox={'0 0 21 21'}
    width={'21'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <path
      clipRule={'evenodd'}
      d={
        'M10.2388 0C15.6088 0 19.9768 4.368 19.9768 9.738C19.9768 12.2715 19.0045 14.5823 17.4134 16.3165L20.5442 19.4407C20.8372 19.7337 20.8382 20.2077 20.5452 20.5007C20.3992 20.6487 20.2062 20.7217 20.0142 20.7217C19.8232 20.7217 19.6312 20.6487 19.4842 20.5027L16.3156 17.343C14.6489 18.6778 12.5355 19.477 10.2388 19.477C4.86879 19.477 0.499786 15.108 0.499786 9.738C0.499786 4.368 4.86879 0 10.2388 0ZM10.2388 1.5C5.69579 1.5 1.99979 5.195 1.99979 9.738C1.99979 14.281 5.69579 17.977 10.2388 17.977C14.7808 17.977 18.4768 14.281 18.4768 9.738C18.4768 5.195 14.7808 1.5 10.2388 1.5Z'
      }
      fill={'#19191B'}
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
