import { FaFacebookF, FaInstagram, FaSpotify, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa"
import { TbWorld } from "react-icons/tb"

export const getIcon = (key: string) => {
  switch (key) {
    case "facebook":
      return <FaFacebookF className="h-8 w-8" />
    case "twitter":
      return <FaTwitter className="h-8 w-8" />
    case "instagram":
      return <FaInstagram className="h-8 w-8" />
    case "tiktok":
      return <FaTiktok className="h-8 w-8" />
    case "spotify":
      return <FaSpotify className="h-8 w-8" />
    case "youtube":
      return <FaYoutube className="h-8 w-8" />
    case "website":
      return <TbWorld className="h-8 w-8" />
    default:
      return null
  }
}
