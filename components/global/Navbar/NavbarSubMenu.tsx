import { Fragment } from "react"
import Link from "next/link"
import { NavigationLink } from "@/types/typings"
import { motion } from "framer-motion"
import { AiOutlineRight } from "react-icons/ai"
import { IoArrowBackCircleOutline } from "react-icons/io5"

interface INavbarSubMenu {
  items: NavigationLink[]
  menus: { [key: string]: boolean }
  toggle: (sMenu: string) => void
  reset: (sMenu: string) => void
}

const NavbarSubMenu = ({ items, menus, toggle, reset }: INavbarSubMenu) => {
  return (
    <>
      {items.map(
        (item, index) =>
          menus[item._id] && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={"absolute left-0 top-0 w-full p-4"}
              key={index}
            >
              <div className="flex flex-col -tracking-tighter">
                <div className="mb-6 flex flex-col justify-start text-3xl text-red-500">
                  <button onClick={() => toggle(item._id)}>
                    <IoArrowBackCircleOutline className="mr-3 h-full" />
                  </button>
                </div>
                <div className="flex flex-col">
                  <ul className="m-0 flex flex-col gap-2 text-2xl">
                    <li className="mb-2 text-red-500">{item.name}</li>
                    {item.slugs &&
                      item.slugs.map((i, index) => (
                        <li key={index}>
                          <Link
                            href={`/${i.slug}`}
                            className="flex w-full justify-between"
                            onClick={() => reset(item._id)}
                          >
                            {i.name} <AiOutlineRight />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )
      )}
    </>
  )
}

export default NavbarSubMenu
