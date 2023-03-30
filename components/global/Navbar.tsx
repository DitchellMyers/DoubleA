'use client'

import { cn } from '@/lib/utils'
import { ExtendedImage, NavigationLink } from '@/types/typings'
import { AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import NavbarMenus from './NavbarMenus'

interface INavbar {
  items: NavigationLink[]
  logo: ExtendedImage
}

export function Navbar({ items, logo }: INavbar) {
  const [open, setOpen] = useState<boolean>(false)
  const [bg, setBG] = useState<boolean>(false)
  const [sMenus, setSMenus] = useState<{ [key: string]: boolean }>({})
  const pathName = usePathname()
  const { scrollY } = useScroll()

  const toggleSMenu = (sMenu: string) => {
    setSMenus({ ...sMenus, [sMenu]: !sMenus[sMenu] })
  }

  const resetMenus = (sMenu: string) => {
    toggleSMenu(sMenu)
    setOpen(false)
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    latest >= window.innerHeight * 0.7 ? setBG(true) : setBG(false)
  })

  return (
    <header
      className={cn(
        (pathName == '/' && bg) || pathName != '/'
          ? 'bg-gradient-to-b from-slate-400 from-90% to-transparent'
          : 'bg-transparent',
        'container fixed left-0 right-0 top-0 mx-auto h-[70px] px-3 sm:px-0 lg:absolute'
      )}
    >
      <nav
        className="relative flex h-full justify-between"
        aria-label="global"
      ></nav>
      <AnimatePresence>{open && <NavbarMenus></NavbarMenus>}</AnimatePresence>
    </header>
  )
}

// <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-white/80 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32">
//   {menuItems &&
//     menuItems.map((menuItem, key) => {
//       const href = resolveHref(menuItem?._type, menuItem?.slug)
//       if (!href) {
//         return null
//       }
//       return (
//         <Link
//           key={key}
//           className={`text-lg hover:text-black md:text-xl ${
//             menuItem?._type === 'home'
//               ? 'font-extrabold text-black'
//               : 'text-gray-600'
//           }`}
//           href={href}
//         >
//           {menuItem.title}
//         </Link>
//       )
//     })}
// </div>
