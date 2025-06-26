"use client";

import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logo.png'
import { Menu, ArrowRight } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './dropdown-menu'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { useTranslations } from 'next-intl';
import Link from 'next/link';

function AnimatedLink({ href, children }:{
    href:string,
    children: React.ReactNode
}) {
  return (
    <Link href={href} className="group relative inline-block h-fit">
      <span className="relative z-10 m-0">{children}</span>
      <span className="absolute left-0 -bottom-2 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"></span>
    </Link>
  );
}

function NavigationDropdown() {

    const t = useTranslations("header");

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className='border-none'>
                    <Menu className='text-white w-5'/>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <a href="#">{t("home")}</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="#">{t("about")}</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="#">{t("projects")}</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href="#">{t("contact")}</a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function Header() {

    const t = useTranslations("header");

  return (
    <div className='w-full'>
        {/* mobile design */}
        <div className="px-4 py-2 flex gap-2 rounded-2xl bg-secondary w-fit items-center md:hidden">
            {/* logo */}
            <Image
                src={logo}
                alt='logo'
                width={20}
                height={20}
            />
            <p>Rindra Hosea</p>
            <NavigationDropdown/>
        </div>

        {/* desktop */}
        <div className='hidden md:flex justify-between items-center'>
            <Link href={"#"} className='flex items-center'>
                <Image
                    src={logo}
                    alt='logo'
                    width={50}
                    height={50}
                />
                <p className='text-xl'>Rindra Hosea</p>
            </Link>
            {/* links */}
            <div className="flex items-center gap-5">
                <AnimatedLink href="#">{t("home")}</AnimatedLink>
                <AnimatedLink href="#">{t("about")}</AnimatedLink>
                <AnimatedLink href="#">{t("projects")}</AnimatedLink>
                <Link href={"#"} className='bg-primary py-2 px-6 rounded-full flex gap-3'>
                    Contact
                    <ArrowRight className='text-white'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header