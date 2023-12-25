import { Poppins, PT_Serif, Inter, Noto_Sans } from "next/font/google"

export const poppins = Poppins({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
})

// export const ptSerif = PT_Serif({
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   weight: ["400", "700"],
// })

// export const inter = Inter({
//   style: ["normal"],
//   subsets: ["latin"],
//   weight: ["400", "700"],
// })

// export const notoSans = Noto_Sans({
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "900"],
// })
