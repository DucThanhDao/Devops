import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const EngineerTeam = () => {
  const t = useTranslations('services');
  const iconPath = '/assets/img/services/star-blue.svg';

  return (
    <div className="services-container-right-card color-blue-gradient2">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="40"
          viewBox="0 0 44 40"
          fill="none"
        >
          <path
            opacity="0.18"
            d="M5.78186 4.51114C7.26351 2.03077 10.483 1.2065 13.3722 1.20735C16.2613 1.20819 19.1875 1.80237 22.0134 1.20735C23.3173 0.930906 24.5756 0.404995 25.9055 0.335043C28.7306 0.185866 31.2068 2.07628 33.3964 3.86555L37.4014 7.13985C39.0238 8.46642 40.6883 9.84357 41.6719 11.6952C42.5294 13.3247 42.7974 15.2005 42.4304 17.0049C41.9685 19.24 40.5383 21.3563 40.8956 23.6108C41.0752 24.7435 41.6938 25.7515 42.0958 26.8261C42.5 27.9064 42.6853 29.0563 42.6408 30.209C42.5963 31.3616 42.3229 32.4938 41.8366 33.5397C41.3503 34.5857 40.6608 35.5244 39.8082 36.3013C38.9556 37.0782 37.9569 37.6777 36.8704 38.0649C33.8498 39.1403 30.53 38.4796 27.3534 38.0447C21.3013 37.2153 15.169 37.2541 9.07132 36.8976C8.0136 36.8361 6.88846 36.7366 6.05155 36.0868C4.84719 35.1513 4.66008 33.4295 4.62553 31.904C4.53366 27.8838 4.82443 23.8636 5.2256 19.862C5.52059 16.924 5.34613 14.6737 4.4241 11.9135C3.77935 9.98095 4.70306 6.31643 5.78186 4.51114Z"
            fill="#A2A2A2"
          />
          <path
            d="M18.203 6.11923L18.557 6.73448L21.0374 5.6304L21.2902 6.02231C21.2902 6.02231 18.7146 8.58612 18.5604 8.55072C18.4062 8.51532 17.3965 6.72352 17.3965 6.72352L18.203 6.11923Z"
            fill="url(#paint0_linear_264_847)"
          />
          <path
            d="M17.2896 3.76694L18.4046 5.95064L17.432 6.80525L17.2896 3.76694Z"
            fill="#68E1FD"
          />
          <path
            opacity="0.69"
            d="M17.2896 3.76694L18.4046 5.95064L17.432 6.80525L17.2896 3.76694Z"
            fill="url(#paint1_linear_264_847)"
          />
          <path
            d="M19.457 7.88151L20.0588 3.76694L22.4642 3.73491L21.6728 7.91354L19.457 7.88151Z"
            fill="#2A94F4"
          />
          <path
            d="M26.2324 22.0238H26.9395V16.9316C26.9395 16.5963 27.0727 16.2748 27.3098 16.0377C27.5469 15.8006 27.8685 15.6674 28.2037 15.6674H31.5033V14.9603H28.2004C27.6786 14.9607 27.1783 15.1682 26.8093 15.5372C26.4403 15.9062 26.2329 16.4065 26.2324 16.9282V22.0238Z"
            fill="#68E1FD"
          />
          <path
            d="M26.248 22.0238H26.9552V16.9316C26.9552 16.5963 27.0884 16.2748 27.3254 16.0377C27.5625 15.8006 27.8841 15.6674 28.2194 15.6674H31.5198V14.9603H28.2152C27.6935 14.961 27.1934 15.1685 26.8246 15.5375C26.4559 15.9064 26.2485 16.4066 26.248 16.9282V22.0238Z"
            fill="url(#paint2_linear_264_847)"
          />
          <path
            d="M17.5974 11.2342H4.97048C3.36229 11.2342 2.05859 12.5379 2.05859 14.1461V31.5626C2.05859 33.1708 3.36229 34.4745 4.97048 34.4745H17.5974C19.2056 34.4745 20.5093 33.1708 20.5093 31.5626V14.1461C20.5093 12.5379 19.2056 11.2342 17.5974 11.2342Z"
            fill="url(#paint3_linear_264_847)"
          />
          <path
            d="M19.5479 31.9512C19.5481 31.8576 19.5854 31.7679 19.6515 31.7018C19.7177 31.6356 19.8074 31.5983 19.901 31.5981H23.0135C23.348 31.597 23.6685 31.4633 23.9047 31.2263C24.1408 30.9894 24.2735 30.6684 24.2735 30.3339V27.0377H24.9814V30.3373C24.9814 30.5957 24.9305 30.8516 24.8316 31.0904C24.7327 31.3291 24.5878 31.5461 24.405 31.7288C24.2223 31.9115 24.0053 32.0565 23.7666 32.1554C23.5278 32.2543 23.2719 32.3052 23.0135 32.3052H19.9052C19.8584 32.3057 19.812 32.2968 19.7687 32.2792C19.7254 32.2616 19.6859 32.2356 19.6527 32.2027C19.6195 32.1698 19.5931 32.1306 19.5751 32.0875C19.5571 32.0443 19.5478 31.998 19.5479 31.9512Z"
            fill="#68E1FD"
          />
          <path
            d="M32.7413 33.0662V32.3591H27.6491C27.3138 32.3591 26.9922 32.2259 26.7551 31.9888C26.518 31.7517 26.3848 31.4302 26.3848 31.0949V27.7987H25.6777V31.0983C25.6782 31.6201 25.8857 32.1203 26.2546 32.4893C26.6236 32.8583 27.1239 33.0658 27.6457 33.0662H32.7413Z"
            fill="#68E1FD"
          />
          <path
            d="M19.5479 31.9512C19.5481 31.8576 19.5854 31.7679 19.6515 31.7018C19.7177 31.6356 19.8074 31.5983 19.901 31.5981H23.0135C23.348 31.597 23.6685 31.4633 23.9047 31.2263C24.1408 30.9894 24.2735 30.6684 24.2735 30.3339V27.0377H24.9814V30.3373C24.9814 30.5957 24.9305 30.8516 24.8316 31.0904C24.7327 31.3291 24.5878 31.5461 24.405 31.7288C24.2223 31.9115 24.0053 32.0565 23.7666 32.1554C23.5278 32.2543 23.2719 32.3052 23.0135 32.3052H19.9052C19.8584 32.3057 19.812 32.2968 19.7687 32.2792C19.7254 32.2616 19.6859 32.2356 19.6527 32.2027C19.6195 32.1698 19.5931 32.1306 19.5751 32.0875C19.5571 32.0443 19.5478 31.998 19.5479 31.9512Z"
            fill="url(#paint4_linear_264_847)"
          />
          <path
            d="M32.7413 33.0662V32.3591H27.6491C27.3138 32.3591 26.9922 32.2259 26.7551 31.9888C26.518 31.7517 26.3848 31.4302 26.3848 31.0949V27.7987H25.6777V31.0983C25.6782 31.6201 25.8857 32.1203 26.2546 32.4893C26.6236 32.8583 27.1239 33.0658 27.6457 33.0662H32.7413Z"
            fill="url(#paint5_linear_264_847)"
          />
          <path
            d="M43.1869 38.8015C43.1873 38.9588 43.1566 39.1146 43.0966 39.26C43.0367 39.4053 42.9486 39.5375 42.8375 39.6488C42.7265 39.7601 42.5945 39.8484 42.4492 39.9087C42.304 39.969 42.1483 40 41.991 40H2.4154C2.11946 39.9991 1.83437 39.8885 1.61525 39.6896C1.39613 39.4906 1.25854 39.2176 1.22909 38.9231C1.19963 38.6286 1.2804 38.3337 1.45577 38.0953C1.63115 37.8569 1.88868 37.6921 2.17857 37.6325C2.25655 37.617 2.33587 37.6091 2.4154 37.6089H41.991C42.3076 37.6089 42.6113 37.7345 42.8355 37.958C43.0596 38.1816 43.186 38.4849 43.1869 38.8015Z"
            fill="#367CFF"
          />
          <path d="M2.81445 32.9575H18.0869V38.1365H2.81445V32.9575Z" fill="#367CFF" />
          <path
            d="M2.81445 32.9575H18.0869V36.7543H2.81445V32.9575Z"
            fill="url(#paint6_linear_264_847)"
          />
          <path
            d="M15.5388 11.2342H2.91189C1.3037 11.2342 0 12.5379 0 14.1461V31.5635C0 33.1717 1.3037 34.4753 2.91189 34.4753H15.5388C17.147 34.4753 18.4507 33.1717 18.4507 31.5635V14.1461C18.4507 12.5379 17.147 11.2342 15.5388 11.2342Z"
            fill="#367CFF"
          />
          <path
            d="M18.4507 24.9921V31.566C18.4505 32.3382 18.1436 33.0787 17.5976 33.6248C17.0515 34.1708 16.311 34.4777 15.5388 34.4779H2.91189C2.52932 34.4778 2.15051 34.4023 1.79711 34.2558C1.4437 34.1092 1.12263 33.8945 0.852227 33.6239C0.581821 33.3532 0.367381 33.032 0.221154 32.6784C0.0749277 32.3249 -0.000220927 31.946 4.8785e-07 31.5635V24.9896C4.8785e-07 24.2173 0.306788 23.4767 0.852874 22.9306C1.39896 22.3845 2.13961 22.0777 2.91189 22.0777H15.5388C15.9214 22.0777 16.3003 22.1531 16.6537 22.2996C17.0072 22.4461 17.3283 22.6608 17.5987 22.9315C17.8691 23.2021 18.0836 23.5234 18.2298 23.877C18.3759 24.2306 18.451 24.6095 18.4507 24.9921Z"
            fill="url(#paint7_linear_264_847)"
          />
          <path d="M22.0483 21.0806H29.6656V28.2656H22.0483V21.0806Z" fill="#435276" />
          <path
            d="M29.6366 20.0609H22.2081C21.7855 20.0609 21.4429 20.4035 21.4429 20.8261V22.1342C21.4429 22.5568 21.7855 22.8995 22.2081 22.8995H29.6366C30.0593 22.8995 30.4019 22.5568 30.4019 22.1342V20.8261C30.4019 20.4035 30.0593 20.0609 29.6366 20.0609Z"
            fill="#367CFF"
          />
          <path
            d="M29.6366 23.3428H22.2081C21.7855 23.3428 21.4429 23.6854 21.4429 24.1081V25.4161C21.4429 25.8388 21.7855 26.1814 22.2081 26.1814H29.6366C30.0593 26.1814 30.4019 25.8388 30.4019 25.4161V24.1081C30.4019 23.6854 30.0593 23.3428 29.6366 23.3428Z"
            fill="#367CFF"
          />
          <path
            d="M29.6366 26.6247H22.2081C21.7855 26.6247 21.4429 26.9673 21.4429 27.3899V28.698C21.4429 29.1206 21.7855 29.4632 22.2081 29.4632H29.6366C30.0593 29.4632 30.4019 29.1206 30.4019 28.698V27.3899C30.4019 26.9673 30.0593 26.6247 29.6366 26.6247Z"
            fill="#367CFF"
          />
          <path
            d="M25.6116 20.0761H24.9045V14.9838C24.9045 14.6486 24.7713 14.327 24.5342 14.0899C24.2971 13.8528 23.9755 13.7196 23.6403 13.7196H19.8569C19.763 13.7196 19.673 13.6823 19.6066 13.616C19.5402 13.5496 19.5029 13.4595 19.5029 13.3657C19.5032 13.2719 19.5405 13.1821 19.6069 13.1159C19.6733 13.0497 19.7632 13.0125 19.8569 13.0125H23.6436C23.9021 13.0124 24.158 13.0632 24.3969 13.1621C24.6357 13.261 24.8527 13.4059 25.0354 13.5887C25.2182 13.7714 25.3631 13.9884 25.462 14.2272C25.5609 14.4661 25.6117 14.722 25.6116 14.9805V20.0761Z"
            fill="#68E1FD"
          />
          <path
            d="M25.6116 20.0761H24.9045V14.9838C24.9045 14.6486 24.7713 14.327 24.5342 14.0899C24.2971 13.8528 23.9755 13.7196 23.6403 13.7196H19.8569C19.763 13.7196 19.673 13.6823 19.6066 13.616C19.5402 13.5496 19.5029 13.4595 19.5029 13.3657C19.5032 13.2719 19.5405 13.1821 19.6069 13.1159C19.6733 13.0497 19.7632 13.0125 19.8569 13.0125H23.6436C23.9021 13.0124 24.158 13.0632 24.3969 13.1621C24.6357 13.261 24.8527 13.4059 25.0354 13.5887C25.2182 13.7714 25.3631 13.9884 25.462 14.2272C25.5609 14.4661 25.6117 14.722 25.6116 14.9805V20.0761Z"
            fill="url(#paint8_linear_264_847)"
          />
          <path
            d="M29.1095 21.7271C29.2756 21.7271 29.4104 21.5924 29.4104 21.4262C29.4104 21.26 29.2756 21.1253 29.1095 21.1253C28.9433 21.1253 28.8086 21.26 28.8086 21.4262C28.8086 21.5924 28.9433 21.7271 29.1095 21.7271Z"
            fill="url(#paint9_linear_264_847)"
          />
          <path
            d="M28.3546 21.7271C28.5208 21.7271 28.6555 21.5924 28.6555 21.4262C28.6555 21.26 28.5208 21.1253 28.3546 21.1253C28.1884 21.1253 28.0537 21.26 28.0537 21.4262C28.0537 21.5924 28.1884 21.7271 28.3546 21.7271Z"
            fill="url(#paint10_linear_264_847)"
          />
          <path
            d="M27.6085 21.7271C27.7747 21.7271 27.9094 21.5924 27.9094 21.4262C27.9094 21.26 27.7747 21.1253 27.6085 21.1253C27.4423 21.1253 27.3076 21.26 27.3076 21.4262C27.3076 21.5924 27.4423 21.7271 27.6085 21.7271Z"
            fill="url(#paint11_linear_264_847)"
          />
          <path
            d="M26.1158 7.72475H40.2867C40.4699 7.72486 40.6512 7.68888 40.8204 7.61888C40.9897 7.54887 41.1434 7.44621 41.273 7.31675C41.4025 7.1873 41.5053 7.03358 41.5754 6.8644C41.6455 6.69522 41.6816 6.51388 41.6816 6.33075C41.6816 5.55578 41.3737 4.81256 40.8257 4.26458C40.2778 3.71659 39.5345 3.40874 38.7596 3.40874H37.5645C37.5645 2.634 37.2567 1.89099 36.7089 1.34317C36.1611 0.795344 35.418 0.487579 34.6433 0.487579H32.7158C32.3321 0.487469 31.9522 0.562945 31.5977 0.709698C31.2432 0.85645 30.921 1.0716 30.6497 1.34287C30.3784 1.61414 30.1631 1.9362 30.0162 2.29067C29.8694 2.64513 29.7938 3.02506 29.7938 3.40874V4.00629H28.1647C27.4079 4.00646 26.6807 4.30022 26.1362 4.82573C25.5917 5.35124 25.2723 6.06752 25.2452 6.82379C25.241 6.94068 25.2604 7.05721 25.3023 7.16642C25.3442 7.27563 25.4077 7.37526 25.4889 7.45937C25.5702 7.54348 25.6676 7.61034 25.7753 7.65593C25.883 7.70153 25.9988 7.72493 26.1158 7.72475Z"
            fill="#367CFF"
          />
          <path
            d="M9.91937 7.72474H1.32276C1.23271 7.72485 1.14352 7.70721 1.06029 7.67283C0.977059 7.63844 0.901423 7.58799 0.837707 7.52435C0.773991 7.46071 0.723444 7.38514 0.688957 7.30195C0.65447 7.21876 0.636719 7.12959 0.636719 7.03954V6.89374C0.636718 6.43229 0.819795 5.9897 1.14577 5.66309C1.47174 5.33648 1.91398 5.15255 2.37543 5.15166H3.09181C3.09181 4.68955 3.27532 4.24636 3.602 3.91952C3.92868 3.59269 4.37178 3.40896 4.83389 3.40874H5.98263C6.21147 3.40874 6.43808 3.45383 6.64949 3.54143C6.8609 3.62903 7.05299 3.75742 7.21476 3.91928C7.37654 4.08113 7.50484 4.27328 7.59234 4.48473C7.67984 4.69619 7.72482 4.92281 7.72471 5.15166V5.50732H8.69646C9.14782 5.50747 9.58151 5.68271 9.90628 5.99615C10.231 6.3096 10.4215 6.73681 10.4377 7.18787C10.4402 7.25749 10.4286 7.32689 10.4037 7.39193C10.3788 7.45697 10.341 7.51632 10.2926 7.56643C10.2442 7.61654 10.1862 7.65639 10.1221 7.68359C10.058 7.71079 9.98903 7.72479 9.91937 7.72474Z"
            fill="#367CFF"
          />
          <path
            d="M15.3208 16.8001H3.19116C2.71452 16.8001 2.32812 17.1865 2.32812 17.6631C2.32812 18.1397 2.71452 18.5261 3.19116 18.5261H15.3208C15.7974 18.5261 16.1838 18.1397 16.1838 17.6631C16.1838 17.1865 15.7974 16.8001 15.3208 16.8001Z"
            fill="white"
          />
          <path
            d="M11.1864 17.1338H3.26905C2.95812 17.1338 2.70605 17.3858 2.70605 17.6968V17.6976C2.70605 18.0086 2.95812 18.2606 3.26905 18.2606H11.1864C11.4973 18.2606 11.7494 18.0086 11.7494 17.6976V17.6968C11.7494 17.3858 11.4973 17.1338 11.1864 17.1338Z"
            fill="#367CFF"
          />
          <path
            d="M38.3811 11.2342H32.5169C31.7703 11.2342 31.165 11.8394 31.165 12.586V20.6753C31.165 21.4219 31.7703 22.0271 32.5169 22.0271H38.3811C39.1277 22.0271 39.733 21.4219 39.733 20.6753V12.586C39.733 11.8394 39.1277 11.2342 38.3811 11.2342Z"
            fill="#367CFF"
          />
          <path
            d="M38.3802 11.2342H36.6331C35.8865 11.2342 35.2812 11.8394 35.2812 12.586V20.6753C35.2812 21.4219 35.8865 22.0271 36.6331 22.0271H38.3802C39.1269 22.0271 39.7321 21.4219 39.7321 20.6753V12.586C39.7321 11.8394 39.1269 11.2342 38.3802 11.2342Z"
            fill="url(#paint12_linear_264_847)"
          />
          <path
            d="M39.733 12.5869H31.165C31.1645 12.4094 31.199 12.2336 31.2665 12.0695C31.334 11.9055 31.4332 11.7563 31.5585 11.6306C31.6838 11.505 31.8326 11.4053 31.9965 11.3372C32.1604 11.2692 32.3361 11.2342 32.5135 11.2342H38.3769C38.555 11.2332 38.7315 11.2675 38.8963 11.335C39.061 11.4026 39.2108 11.5022 39.3369 11.6279C39.4629 11.7537 39.5629 11.9032 39.6309 12.0678C39.6988 12.2324 39.7336 12.4088 39.733 12.5869Z"
            fill="url(#paint13_linear_264_847)"
          />
          <path
            d="M39.7335 20.6753C39.7335 20.8528 39.6985 21.0285 39.6305 21.1923C39.5624 21.3562 39.4627 21.5051 39.3371 21.6303C39.2114 21.7556 39.0623 21.8549 38.8982 21.9224C38.7341 21.9899 38.5583 22.0244 38.3808 22.0238H32.5174C32.1598 22.0238 31.8168 21.8817 31.5639 21.6288C31.311 21.376 31.1689 21.033 31.1689 20.6753H39.7335Z"
            fill="url(#paint14_linear_264_847)"
          />
          <path
            d="M42.2188 36.9945H32.4634V24.6196L39.7039 24.5353L42.3301 26.4923L42.2188 36.9945ZM32.8359 36.6287H41.8539L41.9618 26.6836L39.5851 24.9138L32.8359 24.9896V36.6287Z"
            fill="#367CFF"
          />
          <path
            d="M42.2343 26.7932L40.0211 26.8295L39.6343 24.6685L42.2343 26.7932ZM40.3313 26.4561L41.416 26.3963L40.1779 25.5282L40.3313 26.4561Z"
            fill="#367CFF"
          />
          <path
            d="M40.5603 27.3132H34.4592C34.341 27.3132 34.2451 27.4091 34.2451 27.5273V27.5281C34.2451 27.6464 34.341 27.7422 34.4592 27.7422H40.5603C40.6785 27.7422 40.7743 27.6464 40.7743 27.5281V27.5273C40.7743 27.4091 40.6785 27.3132 40.5603 27.3132Z"
            fill="#367CFF"
          />
          <path
            d="M40.5603 28.73H34.4592C34.341 28.73 34.2451 28.8259 34.2451 28.9441V28.9449C34.2451 29.0632 34.341 29.159 34.4592 29.159H40.5603C40.6785 29.159 40.7743 29.0632 40.7743 28.9449V28.9441C40.7743 28.8259 40.6785 28.73 40.5603 28.73Z"
            fill="#367CFF"
          />
          <path
            d="M40.5603 30.1467H34.4592C34.341 30.1467 34.2451 30.2426 34.2451 30.3608V30.3616C34.2451 30.4799 34.341 30.5757 34.4592 30.5757H40.5603C40.6785 30.5757 40.7743 30.4799 40.7743 30.3616V30.3608C40.7743 30.2426 40.6785 30.1467 40.5603 30.1467Z"
            fill="#367CFF"
          />
          <path
            d="M40.5603 31.5626H34.4592C34.341 31.5626 34.2451 31.6585 34.2451 31.7767V31.7776C34.2451 31.8958 34.341 31.9916 34.4592 31.9916H40.5603C40.6785 31.9916 40.7743 31.8958 40.7743 31.7776V31.7767C40.7743 31.6585 40.6785 31.5626 40.5603 31.5626Z"
            fill="#367CFF"
          />
          <path
            d="M40.5603 32.9794H34.4592C34.341 32.9794 34.2451 33.0753 34.2451 33.1935V33.1943C34.2451 33.3126 34.341 33.4084 34.4592 33.4084H40.5603C40.6785 33.4084 40.7743 33.3126 40.7743 33.1943V33.1935C40.7743 33.0753 40.6785 32.9794 40.5603 32.9794Z"
            fill="#367CFF"
          />
          <path
            d="M40.5603 34.3961H34.4592C34.341 34.3961 34.2451 34.492 34.2451 34.6102V34.611C34.2451 34.7293 34.341 34.8251 34.4592 34.8251H40.5603C40.6785 34.8251 40.7743 34.7293 40.7743 34.611V34.6102C40.7743 34.492 40.6785 34.3961 40.5603 34.3961Z"
            fill="#367CFF"
          />
          <path
            d="M21.4776 18.0643H19.6167C19.5751 18.0641 19.5352 18.0474 19.5058 18.0179C19.4765 17.9883 19.46 17.9484 19.46 17.9067C19.46 17.8652 19.4765 17.8253 19.5059 17.7959C19.5353 17.7665 19.5751 17.75 19.6167 17.75H21.4776C21.8635 17.7497 22.2335 17.5963 22.5063 17.3234C22.7791 17.0504 22.9323 16.6803 22.9323 16.2944V13.1668C22.9323 12.9431 22.9764 12.7216 23.062 12.515C23.1476 12.3083 23.273 12.1205 23.4312 11.9624C23.5894 11.8042 23.7771 11.6787 23.9838 11.5931C24.1905 11.5075 24.4119 11.4635 24.6356 11.4635H28.3634C28.7779 11.4633 29.1755 11.2985 29.4686 11.0053C29.7617 10.7122 29.9265 10.3147 29.9268 9.90009V7.37167H30.2411V9.90009C30.2409 10.398 30.043 10.8755 29.6909 11.2276C29.3388 11.5797 28.8613 11.7776 28.3634 11.7779H24.6356C24.2673 11.7779 23.914 11.9242 23.6535 12.1847C23.393 12.4451 23.2467 12.7984 23.2467 13.1668V16.2944C23.2467 16.7637 23.0603 17.2138 22.7286 17.5457C22.3969 17.8775 21.9469 18.0641 21.4776 18.0643Z"
            fill="#367CFF"
          />
          <path
            d="M10.4539 11.112H10.7682V10.9282C10.7676 10.4776 10.5883 10.0456 10.2696 9.72694C9.95094 9.40828 9.51894 9.22897 9.0683 9.2283H7.43157C7.08405 9.22763 6.75096 9.08922 6.5053 8.84341C6.25964 8.59759 6.12145 8.26442 6.12101 7.9169V7.659H5.80664V7.9169C5.80709 8.34779 5.9784 8.76093 6.28301 9.0657C6.58762 9.37047 7.00067 9.542 7.43157 9.54267H9.06914C9.43655 9.54289 9.78884 9.68894 10.0486 9.94874C10.3084 10.2085 10.4545 10.5608 10.4547 10.9282L10.4539 11.112Z"
            fill="#367CFF"
          />
          <path opacity="0.25" d="M32.3628 13.5687H38.6712V17.8182H32.3628V13.5687Z" fill="white" />
          <path
            d="M37.2991 38.8251C37.2999 39.1009 37.2054 39.3686 37.0316 39.5827C36.8577 39.7968 36.6152 39.9442 36.345 40H2.4154C2.11946 39.9991 1.83437 39.8885 1.61525 39.6896C1.39613 39.4907 1.25854 39.2176 1.22909 38.9231C1.19963 38.6286 1.2804 38.3337 1.45577 38.0953C1.63115 37.857 1.88868 37.6921 2.17857 37.6326H36.104C36.4205 37.6326 36.7241 37.7581 36.9482 37.9817C37.1722 38.2053 37.2984 38.5086 37.2991 38.8251Z"
            fill="url(#paint15_linear_264_847)"
          />
          <path
            d="M13.7119 5.36067V10.0804H17.6048V5.04041C17.6048 5.04041 17.6444 3.41042 16.7898 3.48206C15.9352 3.5537 14.0752 3.16938 13.7119 5.36067Z"
            fill="#68E1FD"
          />
          <path
            opacity="0.69"
            d="M13.7119 5.36067V10.0804H17.6048V5.04041C17.6048 5.04041 17.6444 3.41042 16.7898 3.48206C15.9352 3.5537 14.0752 3.16938 13.7119 5.36067Z"
            fill="url(#paint16_linear_264_847)"
          />
          <path
            d="M17.6055 10.0737C17.6055 10.0737 20.1339 10.1529 20.8503 11.3379C21.5667 12.5229 22.5595 15.5165 22.5595 15.5165L21.6568 15.8722L20.0429 13.8309L17.6055 10.0737Z"
            fill="white"
          />
          <path
            d="M17.6055 10.0737C17.6055 10.0737 20.1339 10.1529 20.8503 11.3379C21.5667 12.5229 22.5595 15.5165 22.5595 15.5165L21.6568 15.8722L20.0429 13.8309L17.6055 10.0737Z"
            fill="url(#paint17_linear_264_847)"
          />
          <path
            d="M13.7125 10.0737C13.7125 10.0737 13.3636 11.8149 14.2822 12.0964C15.2009 12.3779 18.0167 12.6661 18.0167 12.6661L19.4098 17.2872L20.5653 16.7647C20.5653 16.7647 20.138 11.7475 19.5683 11.1179C18.9986 10.4883 17.6054 10.0737 17.6054 10.0737H13.7125Z"
            fill="white"
          />
          <path
            d="M15.6912 2.05691C15.7315 1.81573 15.8023 1.58067 15.9019 1.35738C16.0033 1.16668 16.1524 1.00554 16.3347 0.889722C16.517 0.773905 16.7262 0.707369 16.9419 0.69662C16.9942 0.69307 17.0466 0.696757 17.0979 0.707576C17.1529 0.721715 17.2053 0.744776 17.2529 0.775844C17.3704 0.857622 17.4704 0.961967 17.547 1.08279C17.6237 1.20362 17.6756 1.33851 17.6996 1.47959C17.7454 1.76161 17.7525 2.04856 17.7207 2.3325C17.6996 2.64266 17.6432 3.00675 17.3667 3.1475C17.1746 3.24442 16.9453 3.19469 16.7371 3.13064C16.7164 3.12105 16.6938 3.11608 16.671 3.11608C16.6481 3.11608 16.6256 3.12105 16.6048 3.13064C16.5903 3.14353 16.5785 3.15919 16.5701 3.1767C16.5617 3.19421 16.5569 3.21322 16.5559 3.23262C16.5087 3.53434 16.6057 3.84787 16.5365 4.14454C16.5322 4.17876 16.5203 4.21161 16.5018 4.24074C16.4833 4.26987 16.4586 4.29458 16.4295 4.3131C16.375 4.33238 16.3155 4.33238 16.2609 4.3131C15.9891 4.24267 15.7386 4.10699 15.5311 3.91782C15.4468 3.83944 15.2251 3.70375 15.194 3.5925C15.1628 3.48125 15.3221 3.24105 15.3625 3.13148C15.4978 2.78165 15.6076 2.42253 15.6912 2.05691Z"
            fill="url(#paint18_linear_264_847)"
          />
          <path
            opacity="0.69"
            d="M13.753 5.36493L14.9557 7.6405L16.2376 6.6915C16.2376 6.6915 15.2869 4.32069 15.1015 4.22546C14.9161 4.13022 14.4601 3.84619 14.2469 4.15466C14.0336 4.46313 13.7125 4.96123 13.753 5.36493Z"
            fill="url(#paint19_linear_264_847)"
          />
          <path
            d="M15.2471 7.49386C15.2471 7.49386 15.7696 8.42094 16.0056 8.4437C16.2416 8.46645 19.6145 6.99492 19.6145 6.99492L20.137 6.82636C20.137 6.82636 20.2559 6.25662 20.2795 6.13778C20.3031 6.01895 20.4927 5.61609 20.2314 5.56805C19.9701 5.52001 19.5681 5.85544 19.5681 5.85544L19.3777 6.33079L16.529 7.20899L16.2365 6.69488L15.2471 7.49386Z"
            fill="url(#paint20_linear_264_847)"
          />
          <path
            d="M18.2844 0.791846C18.4032 0.520463 18.2953 0.142043 18.013 0.0510205C17.7804 -0.0248319 17.5335 0.107488 17.289 0.112545C17.0809 0.112545 16.882 0.0282648 16.6755 0.00382348C16.4308 -0.0172106 16.1866 0.0490156 15.986 0.190775C15.7855 0.332535 15.6416 0.540683 15.5798 0.778361C15.569 0.851877 15.5483 0.923599 15.5183 0.991591C15.434 1.14414 15.2183 1.20735 15.1761 1.37675C15.1638 1.46005 15.1755 1.54512 15.2098 1.62201L15.4779 2.42015C15.5082 2.50948 15.5765 2.61905 15.6658 2.58871C15.7155 2.57185 15.7391 2.51623 15.7577 2.46566L15.9372 1.96587C16.099 1.95155 16.0636 2.32828 16.2246 2.303C16.3291 2.28614 16.3089 2.13443 16.2827 2.02824C16.2709 1.95871 16.273 1.88754 16.2887 1.8188C16.3045 1.75006 16.3337 1.68512 16.3747 1.62771C16.4157 1.5703 16.4676 1.52156 16.5274 1.48427C16.5873 1.44699 16.6539 1.42191 16.7235 1.41046C16.8019 1.41173 16.8798 1.39888 16.9536 1.37254C16.9992 1.33827 17.0467 1.30675 17.096 1.27814C17.2941 1.20398 17.504 1.37001 17.7298 1.28404C17.9711 1.19745 18.1698 1.02116 18.2844 0.791846Z"
            fill="#3F3D56"
          />
          <path
            d="M20.1854 16.9181L20.3515 17.3698L21.6334 17.3462L20.0194 18.082L19.7109 17.0849L20.1854 16.9181Z"
            fill="#68E1FD"
          />
          <path
            d="M20.0785 16.9779L20.2454 17.4288L21.5264 17.4052L19.9125 18.141L19.604 17.1439L20.0785 16.9779Z"
            fill="url(#paint21_linear_264_847)"
          />
          <path
            d="M22.4403 15.5654L22.6064 16.0163L23.8883 15.9927L22.2743 16.7285L21.9658 15.7314L22.4403 15.5654Z"
            fill="#68E1FD"
          />
          <path
            d="M22.3339 15.6244L22.4999 16.0761L23.7827 16.0517L22.1678 16.7883L21.8594 15.7904L22.3339 15.6244Z"
            fill="url(#paint22_linear_264_847)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_264_847"
              x1="17.3956"
              y1="7.09014"
              x2="21.2894"
              y2="7.09014"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ECC4D7" />
              <stop offset="0.42" stopColor="#EFD4D1" />
              <stop offset="1" stopColor="#F2EAC9" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_264_847"
              x1="17.2896"
              y1="5.28567"
              x2="18.4046"
              y2="5.28567"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.02" stopColor="white" stopOpacity="0" />
              <stop offset="0.58" stopColor="white" stopOpacity="0.39" />
              <stop offset="0.68" stopColor="white" stopOpacity="0.68" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_264_847"
              x1="28.8835"
              y1="18.5355"
              x2="29.0731"
              y2="22.999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#367CFF" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_264_847"
              x1="2.05859"
              y1="22.8548"
              x2="20.5093"
              y2="22.8548"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_264_847"
              x1="22.3839"
              y1="31.4127"
              x2="22.099"
              y2="26.8548"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#367CFF" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_264_847"
              x1="29.2023"
              y1="30.9651"
              x2="29.2504"
              y2="27.9504"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#367CFF" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_264_847"
              x1="10.4764"
              y1="36.6953"
              x2="10.4107"
              y2="31.9545"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_264_847"
              x1="9.07027"
              y1="34.2849"
              x2="10.074"
              y2="-4.57095"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_264_847"
              x1="22.7233"
              y1="18.7554"
              x2="22.8657"
              y2="22.6964"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#367CFF" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_264_847"
              x1="28.8086"
              y1="21.4262"
              x2="29.4104"
              y2="21.4262"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_264_847"
              x1="28.0537"
              y1="21.4262"
              x2="28.6555"
              y2="21.4262"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_264_847"
              x1="27.3076"
              y1="21.4262"
              x2="27.9102"
              y2="21.4262"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_264_847"
              x1="33.4026"
              y1="16.5405"
              x2="53.544"
              y2="16.9829"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_264_847"
              x1="27.8655"
              y1="11.7584"
              x2="65.1453"
              y2="12.5776"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_264_847"
              x1="35.4335"
              y1="20.3643"
              x2="35.7428"
              y2="26.6508"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint15_linear_264_847"
              x1="46.2042"
              y1="41.0147"
              x2="-21.7234"
              y2="35.4632"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.41" stopOpacity="0.41" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint16_linear_264_847"
              x1="13.7119"
              y1="6.77659"
              x2="17.6048"
              y2="6.77659"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.02" stopColor="#367CFF" />
              <stop offset="0.58" stopColor="#367CFF" />
              <stop offset="0.68" stopColor="#367CFF" />
              <stop offset="1" stopColor="#367CFF" />
            </linearGradient>
            <linearGradient
              id="paint17_linear_264_847"
              x1="21.4579"
              y1="12.6956"
              x2="15.6889"
              y2="13.5738"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint18_linear_264_847"
              x1="15.194"
              y1="2.51034"
              x2="17.7409"
              y2="2.51034"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ECC4D7" />
              <stop offset="0.42" stopColor="#EFD4D1" />
              <stop offset="1" stopColor="#F2EAC9" />
            </linearGradient>
            <linearGradient
              id="paint19_linear_264_847"
              x1="13.7606"
              y1="6.26757"
              x2="16.3556"
              y2="5.04888"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.02" stopColor="white" stopOpacity="0" />
              <stop offset="0.58" stopColor="white" stopOpacity="0.39" />
              <stop offset="0.68" stopColor="white" stopOpacity="0.68" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint20_linear_264_847"
              x1="15.2471"
              y1="7.00503"
              x2="20.3688"
              y2="7.00503"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ECC4D7" />
              <stop offset="0.42" stopColor="#EFD4D1" />
              <stop offset="1" stopColor="#F2EAC9" />
            </linearGradient>
            <linearGradient
              id="paint21_linear_264_847"
              x1="19.604"
              y1="17.5594"
              x2="21.5273"
              y2="17.5594"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.99" />
            </linearGradient>
            <linearGradient
              id="paint22_linear_264_847"
              x1="21.8594"
              y1="16.2059"
              x2="23.7818"
              y2="16.2059"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0" />
              <stop offset="0.99" />
            </linearGradient>
          </defs>
        </svg>
        <h4 className="services-container-right-card-title h6">{t('engineeringTeam.heading')}</h4>
        <ul className="list-unstyled text-start mt-3">
          <li>
            <img src={iconPath} alt="star icon" />
            {t('engineeringTeam.description1')}
          </li>
          <li>
            <img src={iconPath} alt="star icon" />
            {t('engineeringTeam.description2')}
          </li>
          <li>
            <img src={iconPath} alt="star icon" />
            {t('engineeringTeam.description3')}
          </li>
          <li>
            <img src={iconPath} alt="star icon" />
            {t('engineeringTeam.description4')}
          </li>
        </ul>
        <Link className="view-more py-1 text-primary" href="/about-us">
          {t('engineeringTeam.link')}
          <svg
            className="ps-2"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Link>
        {/* <div className="services-container-right-card-description">
                  Define clear objectives, ensuring your technology solutions
                  remain aligned with your business goals.
                </div> */}
      </div>
    </div>
  );
};

export default EngineerTeam;
