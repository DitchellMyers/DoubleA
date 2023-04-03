"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function BackgroundLayer() {
  const { scrollY } = useScroll()
  const [opacityRange, setOpacityRange] = useState([0, 0, 0, 0])
  const opacity = useTransform(scrollY, opacityRange, [0, 0.5, 0.7, 0.9])

  useEffect(
    () =>
      setOpacityRange([
        window.innerHeight * 0,
        window.innerHeight * 0.1,
        window.innerHeight * 0.2,
        window.innerHeight * 0.4,
      ]),
    []
  )

  return <>{opacity && <motion.div className="h-full w-full bg-gray-950" style={{ opacity: opacity }}></motion.div>}</>
}
