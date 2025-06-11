"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import {
  ChevronRight,
  ShoppingBag,
  Menu,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react"

export function MobileMenu() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = e.currentTarget.href.split("#")[1]
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const sheetClose = e.currentTarget.closest('[data-radix-collection-item]')?.parentElement?.previousElementSibling as HTMLButtonElement | null;
      if (sheetClose) {
        sheetClose.click();
      }
      
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }, 250);
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-8 w-8" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="w-full max-w-xs bg-background p-0 !border-0 !border-r-0 !border-l-0 !shadow-none"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="#home" className="flex items-center gap-2">
               <div className="relative h-8 w-8">
                  <Image src="/logo.png" alt="Passa Bola Logo" fill className="object-contain" />
                </div>
                <span className="font-bold text-lg text-primary">PASSA BOLA</span>
            </Link>
            <SheetClose asChild>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </SheetClose>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8 text-lg font-medium p-4">
            <SheetClose asChild>
              <Link onClick={handleSmoothScroll} href="#home" className="hover:text-primary transition-colors">Home</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link onClick={handleSmoothScroll} href="#jogue" className="hover:text-primary transition-colors">Jogue com a gente</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link onClick={handleSmoothScroll} href="#duvidas" className="hover:text-primary transition-colors">Dúvidas</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link onClick={handleSmoothScroll} href="#contato" className="hover:text-primary transition-colors">Contato</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link onClick={handleSmoothScroll} href="#quem-somos" className="hover:text-primary transition-colors">Quem somos</Link>
            </SheetClose>
             <SheetClose asChild>
              <Link onClick={handleSmoothScroll} href="#loja" className="flex items-center gap-2 hover:text-primary transition-colors">
                <ShoppingBag className="h-5 w-5" /> Loja
              </Link>
            </SheetClose>
          </nav>
          <div className="p-4 border-t mt-auto">
              <div className="flex justify-center space-x-6">
                <Link href="#" className="text-gray-500 hover:text-primary"><Instagram className="h-6 w-6" /></Link>
                <Link href="#" className="text-gray-500 hover:text-primary"><Twitter className="h-6 w-6" /></Link>
                <Link href="#" className="text-gray-500 hover:text-primary"><Facebook className="h-6 w-6" /></Link>
              </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
} 