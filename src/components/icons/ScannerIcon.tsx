import { Variants, motion } from 'framer-motion';

const svgVariants: Variants = {
  hidden: {
    pathLength: 0,
    strokeOpacity: 0,
    strokeDashoffset: -50,
    stroke: '#0381FF',
    transition: { duration: 1 },
  },
  visible: {
    pathLength: 1,
    strokeOpacity: 1,
    strokeDashoffset: 157,
    stroke: '#0381FF',
    transition: { duration: 1 },
  },
};

export const ScannerIcon = (props: { isActive: boolean }) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="28" r="27.5" stroke="black" strokeOpacity="0.08" />
      <motion.circle
        variants={svgVariants}
        initial="hidden"
        animate={props.isActive ? 'visible' : 'hidden'}
        cx="28"
        cy="28"
        r="27.5"
        stroke="black"
        strokeOpacity="0.08"
      />
      <path
        d="M16.0001 25.3332C16.3537 25.3332 16.6928 25.1927 16.9429 24.9426C17.1929 24.6926 17.3334 24.3535 17.3334 23.9998V18.6665C17.3334 18.3129 17.4739 17.9737 17.7239 17.7237C17.974 17.4736 18.3131 17.3332 18.6667 17.3332H24.0001C24.3537 17.3332 24.6928 17.1927 24.9429 16.9426C25.1929 16.6926 25.3334 16.3535 25.3334 15.9998C25.3334 15.6462 25.1929 15.3071 24.9429 15.057C24.6928 14.807 24.3537 14.6665 24.0001 14.6665H18.6667C17.6059 14.6665 16.5885 15.0879 15.8383 15.8381C15.0882 16.5882 14.6667 17.6056 14.6667 18.6665V23.9998C14.6667 24.3535 14.8072 24.6926 15.0573 24.9426C15.3073 25.1927 15.6465 25.3332 16.0001 25.3332Z"
        fill={props.isActive ? '#0381FF' : '#666666'}
      />
      <path
        d="M37.3334 14.6665H32.0001C31.6465 14.6665 31.3073 14.807 31.0573 15.057C30.8072 15.3071 30.6667 15.6462 30.6667 15.9998C30.6667 16.3535 30.8072 16.6926 31.0573 16.9426C31.3073 17.1927 31.6465 17.3332 32.0001 17.3332H37.3334C37.687 17.3332 38.0262 17.4736 38.2762 17.7237C38.5263 17.9737 38.6667 18.3129 38.6667 18.6665V23.9998C38.6667 24.3535 38.8072 24.6926 39.0573 24.9426C39.3073 25.1927 39.6464 25.3332 40.0001 25.3332C40.3537 25.3332 40.6928 25.1927 40.9429 24.9426C41.1929 24.6926 41.3334 24.3535 41.3334 23.9998V18.6665C41.3334 17.6056 40.912 16.5882 40.1618 15.8381C39.4117 15.0879 38.3943 14.6665 37.3334 14.6665Z"
        fill={props.isActive ? '#0381FF' : '#666666'}
      />
      <path
        d="M40.0001 30.6665C39.6464 30.6665 39.3073 30.807 39.0573 31.057C38.8072 31.3071 38.6667 31.6462 38.6667 31.9998V37.3332C38.6667 37.6868 38.5263 38.0259 38.2762 38.276C38.0262 38.526 37.687 38.6665 37.3334 38.6665H32.0001C31.6465 38.6665 31.3073 38.807 31.0573 39.057C30.8072 39.3071 30.6667 39.6462 30.6667 39.9998C30.6667 40.3534 30.8072 40.6926 31.0573 40.9426C31.3073 41.1927 31.6465 41.3332 32.0001 41.3332H37.3334C38.3943 41.3332 39.4117 40.9117 40.1618 40.1616C40.912 39.4114 41.3334 38.394 41.3334 37.3332V31.9998C41.3334 31.6462 41.1929 31.3071 40.9429 31.057C40.6928 30.807 40.3537 30.6665 40.0001 30.6665Z"
        fill={props.isActive ? '#0381FF' : '#666666'}
      />
      <path
        d="M24.0001 38.6665H18.6667C18.3131 38.6665 17.974 38.526 17.7239 38.276C17.4739 38.0259 17.3334 37.6868 17.3334 37.3332V31.9998C17.3334 31.6462 17.1929 31.3071 16.9429 31.057C16.6928 30.807 16.3537 30.6665 16.0001 30.6665C15.6465 30.6665 15.3073 30.807 15.0573 31.057C14.8072 31.3071 14.6667 31.6462 14.6667 31.9998V37.3332C14.6667 38.394 15.0882 39.4114 15.8383 40.1616C16.5885 40.9117 17.6059 41.3332 18.6667 41.3332H24.0001C24.3537 41.3332 24.6928 41.1927 24.9429 40.9426C25.1929 40.6926 25.3334 40.3534 25.3334 39.9998C25.3334 39.6462 25.1929 39.3071 24.9429 39.057C24.6928 38.807 24.3537 38.6665 24.0001 38.6665Z"
        fill={props.isActive ? '#0381FF' : '#666666'}
      />
      <path
        d="M33.3333 20H22.6667C21.1939 20 20 21.1939 20 22.6667V33.3333C20 34.8061 21.1939 36 22.6667 36H33.3333C34.8061 36 36 34.8061 36 33.3333V22.6667C36 21.1939 34.8061 20 33.3333 20Z"
        fill={props.isActive ? '#0381FF' : '#666666'}
      />
    </svg>
  );
};
