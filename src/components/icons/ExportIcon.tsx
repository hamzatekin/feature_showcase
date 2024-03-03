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

export const ExportIcon = (props: { isActive: boolean }) => {
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
      <g clipPath="url(#clip0_896_1159)">
        <path
          d="M36.8476 19.4688L31.8594 14.4804V19.4688H36.8476Z"
          fill={props.isActive ? '#0381FF' : '#666666'}
        />
        <path
          d="M29.2344 29.0938C29.2344 28.6407 29.6017 28.2734 30.0547 28.2734H37.3281V21.1094H31.0391C30.586 21.1094 30.2188 20.7421 30.2188 20.2891V14H19.0078C17.3493 14 16 15.3493 16 17.0078V38.9922C16 40.6507 17.3493 42 19.0078 42H34.3203C35.9788 42 37.3281 40.6507 37.3281 38.9922V29.9141H30.0547C29.6017 29.9141 29.2344 29.5468 29.2344 29.0938ZM20.1016 23.3516H29.3984C29.8515 23.3516 30.2188 23.7188 30.2188 24.1719C30.2188 24.6249 29.8515 24.9922 29.3984 24.9922H20.1016C19.6485 24.9922 19.2812 24.6249 19.2812 24.1719C19.2812 23.7188 19.6485 23.3516 20.1016 23.3516ZM20.1016 26.6328H27.2109C27.664 26.6328 28.0312 27.0001 28.0312 27.4531C28.0312 27.9062 27.664 28.2734 27.2109 28.2734H20.1016C19.6485 28.2734 19.2812 27.9062 19.2812 27.4531C19.2812 27.0001 19.6485 26.6328 20.1016 26.6328ZM20.1016 29.9141H27.2109C27.664 29.9141 28.0312 30.2813 28.0312 30.7344C28.0312 31.1874 27.664 31.5547 27.2109 31.5547H20.1016C19.6485 31.5547 19.2812 31.1874 19.2812 30.7344C19.2812 30.2813 19.6485 29.9141 20.1016 29.9141ZM29.3984 34.8359H20.1016C19.6485 34.8359 19.2812 34.4687 19.2812 34.0156C19.2812 33.5626 19.6485 33.1953 20.1016 33.1953H29.3984C29.8515 33.1953 30.2188 33.5626 30.2188 34.0156C30.2188 34.4687 29.8515 34.8359 29.3984 34.8359Z"
          fill={props.isActive ? '#0381FF' : '#666666'}
        />
        <path
          d="M43.7597 28.5137L40.4784 25.2325C40.1581 24.9121 39.6387 24.9121 39.3184 25.2325C38.998 25.5528 38.998 26.0722 39.3184 26.3926L41.1993 28.2734H37.3281V29.9141H41.1993L39.3184 31.795C38.998 32.1153 38.998 32.6347 39.3184 32.9551C39.4785 33.1153 39.6885 33.1953 39.8984 33.1953C40.1084 33.1953 40.3183 33.1153 40.4784 32.955L43.7597 29.6738C44.0801 29.3535 44.0801 28.8341 43.7597 28.5137Z"
          fill={props.isActive ? '#0381FF' : '#666666'}
        />
      </g>
      <defs>
        <clipPath id="clip0_896_1159">
          <rect
            width="28"
            height="28"
            fill="white"
            transform="translate(16 14)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
