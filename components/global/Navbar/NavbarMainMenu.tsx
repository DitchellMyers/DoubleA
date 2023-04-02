import { Fragment } from "react"
import Link from "next/link"
import { NavigationLink } from "@/types/typings"
import { motion } from "framer-motion"
import { AiOutlineRight } from "react-icons/ai"

interface INavbarMainMenu {
  menus: { [key: string]: boolean }
  items: NavigationLink[]
  toggle: (sMenu: string) => void
  reset: (sMenu: string) => void
}

const NavbarMainMenu = ({ menus, items, toggle, reset }: INavbarMainMenu) => {
  return (
    <>
      {Object.values(menus).every((item) => item === false) && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={"absolute bottom-0 left-0 right-0 top-0 p-4"}
        >
          <ul className="m-0 flex flex-col gap-5 text-2xl">
            {items.map((item, index) => (
              <Fragment key={index}>
                {item.slugs ? (
                  <button className="flex w-full justify-between" onClick={() => toggle(item._id)}>
                    {item.name} <AiOutlineRight />
                  </button>
                ) : (
                  <Link href={`/${item.slug}`} className="flex w-full justify-between" onClick={() => reset(item._id)}>
                    {item.name} <AiOutlineRight />
                  </Link>
                )}
              </Fragment>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  )
}

export default NavbarMainMenu
