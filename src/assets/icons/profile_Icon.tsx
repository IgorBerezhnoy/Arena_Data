import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    {...props}
    fill={'currentColor'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 25 24'}
    width={'25'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <path
      clipRule={'evenodd'}
      d={
        'M20.3399 18.1931C20.3399 21.4891 15.8199 21.8701 12.4209 21.8701L12.1776 21.8699C10.0121 21.8646 4.49988 21.7279 4.49988 18.1731C4.49988 14.9444 8.83823 14.5129 12.2114 14.4966L12.6641 14.4963C14.8295 14.5016 20.3399 14.6383 20.3399 18.1931ZM12.4209 15.9961C8.15988 15.9961 5.99988 16.7281 5.99988 18.1731C5.99988 19.6311 8.15988 20.3701 12.4209 20.3701C16.6809 20.3701 18.8399 19.6381 18.8399 18.1931C18.8399 16.7351 16.6809 15.9961 12.4209 15.9961ZM12.4209 1.99969C15.3489 1.99969 17.7299 4.38169 17.7299 7.30969C17.7299 10.2377 15.3489 12.6187 12.4209 12.6187H12.3889C9.46688 12.6097 7.09988 10.2267 7.10985 7.30669C7.10985 4.38169 9.49188 1.99969 12.4209 1.99969ZM12.4209 3.42769C10.2799 3.42769 8.53786 5.16869 8.53786 7.30969C8.53088 9.44369 10.2599 11.1837 12.3919 11.1917L12.4209 11.9057V11.1917C14.5609 11.1917 16.3019 9.44969 16.3019 7.30969C16.3019 5.16869 14.5609 3.42769 12.4209 3.42769Z'
      }
      fill={'#212125'}
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)