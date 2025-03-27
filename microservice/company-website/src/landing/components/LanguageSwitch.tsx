import { FC, useState } from 'react';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { getPublicUrl } from '@/common/util/util';

type LanguageSwitchProps = {
  className?: string | null;
};

const options = [
  {
    value: 'en',
    icon: <img className="language-icon" src={getPublicUrl("/assets/img/en.webp")} alt="English" />,
    label: 'English',
  },
  {
    value: 'vi',
    icon: <img className="language-icon" src={getPublicUrl("/assets/img/vi.webp")} alt="Tiếng Việt" />,
    label: 'Tiếng Việt',
  },
];

// export const LanguageSwitch: FC<LanguageSwitchProps> = ({ className }) => {
//   const router = useRouter();
//   const [isPending, startTransition] = useTransition();
//   const [isShowDropDown, setIsShowDropDown] = useState(false);
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const searchParamsObject = Object.fromEntries(searchParams.entries());
//   const locale = useLocale();
//
//   const currentLocale = options.find((item) => item.value === locale);
//
//   const languageSwitchClass = className
//     ? `language-switch  px-lg-2 position-relative ${className}`
//     : 'language-switch  px-lg-2 position-relative';
//
//   function onChange(newLocale: any) {
//     if (newLocale && locale !== newLocale.value) {
//       startTransition(() => {
//         router.replace(
//           { pathname, query: searchParamsObject },
//           { locale: newLocale.value, scroll: false }
//         );
//       });
//     }
//   }
//   return (
//     <div
//       className={languageSwitchClass}
//       onMouseEnter={() => setIsShowDropDown(true)}
//       onMouseLeave={() => setIsShowDropDown(false)}
//     >
//       <span
//         className="border-none outline-none d-flex flex-row gap-1 background-transparent align-items-center "
//         onClick={() => setIsShowDropDown(!isShowDropDown)}
//       >
//         {currentLocale && currentLocale.icon}
//         <span
//           className="d-inline d-lg-none text-uppercase"
//           style={{
//             fontWeight: 600,
//             fontSize: '14px',
//           }}
//         >
//           {currentLocale && currentLocale.label}
//         </span>
//         <i
//           className={`fas fa-angle-down ms-auto ms-lg-0 ${
//             isShowDropDown ? 'rotate-icon' : 'reset-icon'
//           }`}
//         ></i>
//       </span>
//       <AnimatePresence>
//         {isShowDropDown && !isPending && (
//           <motion.div
//             className="language-dropdown top-100 end-0 pt-lg-3"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 10 }}
//             transition={{ duration: 0.2 }}
//           >
//             <ul className="list-unstyled m-0 d-flex flex-column bg-white">
//               {options.map((item) => (
//                 <li
//                   key={item.value}
//                   onClick={() => onChange(item)}
//                   className="py-2 py-lg-1 d-flex flex-row"
//                 >
//                   {item.icon}
//                   <span className="text-uppercase ms-2 text-nowrap">{item.label}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };


