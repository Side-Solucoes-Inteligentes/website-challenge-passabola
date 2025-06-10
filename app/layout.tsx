import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Copa Passa Bola - Futebol Feminino",
  description:
    "Copa Passa Bola - Um movimento pela igualdade no esporte. Promovendo o futebol feminino e criando espaços seguros e inclusivos para todas.",
  generator: 'v0.dev',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="overflow-x-hidden w-full">
      <body className={`${inter.className} overflow-x-hidden max-w-[100vw] w-full m-0 p-0`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="overflow-x-hidden w-full">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
