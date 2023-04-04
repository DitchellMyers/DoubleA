"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ExtendedImage, NavigationLink } from "@/types/typings"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Fade } from "hamburger-react"

import SanityImage from "@/components/shared/Sanity/SanityImage"
import NavbarMainMenu from "./NavbarMainMenu"
import NavbarSubMenu from "./NavbarSubMenu"

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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  })

  // Toggle Submenu
  const toggleSMenu = (sMenu: string) => {
    setSMenus({ ...sMenus, [sMenu]: !sMenus[sMenu] })
  }

  // Resets All Submenus
  const resetMenus = () => {
    setSMenus({})
    setOpen(false)
  }

  // check ScrollY for homepage => sets Backgroundcolor on Navbar if necessary
  useMotionValueEvent(scrollY, "change", (latest) => {
    latest >= window.innerHeight * 0.5 ? setBG(true) : setBG(false)
  })

  return (
    <header
      className={`container fixed left-0 right-0 top-0 z-[120] mx-auto h-20 px-3 sm:px-0 lg:absolute ${
        ((pathName == "/" && bg) || pathName != "/") &&
        "bg-gradient-to-b from-gray-950 from-85% via-gray-950 to-transparent to-100%"
      }`}
    >
      <nav className="relative flex h-full justify-between" aria-label="global">
        <div className="z-[110] flex w-full justify-between">
          {/* Logo */}
          <Link href={"/"} className="relative aspect-square" onClick={() => setOpen(false)}>
            <SanityImage image={logo} alt={logo.beschreibung} />
          </Link>
          {/* Hamburger Menu */}
          <div className="flex items-center justify-center md:justify-end">
            {/* <div className="fixed"> */}
            <Fade toggle={setOpen} toggled={open} />
            {/* </div> */}
          </div>
        </div>
        {/* Main and Submenus */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="fixed bottom-0 left-0 right-0 top-0 z-[100] bg-gray-950"
            >
              <div className="container mx-auto h-full pb-10 pt-20">
                <div className="relative h-full">
                  <NavbarMainMenu items={items} menus={sMenus} toggle={toggleSMenu} reset={resetMenus} />
                  <NavbarSubMenu items={items} menus={sMenus} toggle={toggleSMenu} reset={resetMenus} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
