import * as React from "react"
import {
  NavigationMenu,
    NavigationMenuContent,
//   NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
//   NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

import { cn } from "@/lib/utils"
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.svg'
import account from '../assets/Account.svg'
import email from '../assets/email-envelope-icon.svg'
import favorite from '../assets/Favorites.svg'
import phone from '../assets/Phone.svg'
import search from '../assets/search-icon.svg'
import suitcase from '../assets/suitcase-icon.svg'


import { ChevronDown } from "lucide-react"
 
import { Button } from "@/components/ui/button"



// const components: { title: string; href: string; description: string }[] = [
//     {
//       title: "Alert Dialog",
//       href: "/docs/primitives/alert-dialog",
//       description:
//         "A modal dialog that interrupts the user with important content and expects a response.",
//     },
//     {
//       title: "Hover Card",
//       href: "/docs/primitives/hover-card",
//       description:
//         "For sighted users to preview content available behind a link.",
//     },
//     {
//       title: "Progress",
//       href: "/docs/primitives/progress",
//       description:
//         "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//     },
//     {
//       title: "Scroll-area",
//       href: "/docs/primitives/scroll-area",
//       description: "Visually or semantically separates content.",
//     },
//     {
//       title: "Tabs",
//       href: "/docs/primitives/tabs",
//       description:
//         "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//     },
//     {
//       title: "Tooltip",
//       href: "/docs/primitives/tooltip",
//       description:
//         "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//     },
//   ]


export const Header = () => {

    return (
        <header className="h-50 w-full ">
            <div className="top -50 w-full flex justify-between mx-auto items-center py-3 max-w-[1440px] self-center">

                <div>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        <Image className="mx-2" alt="" src={favorite}/>
                                    Favorites
                                    </NavigationMenuLink>
                                </Link>
                                </NavigationMenuItem>
                                
                                <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <Image className="mx-2" alt="" src={phone}/>

                                    0344 493 2043
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <Image className="mx-2" alt="" src={email}/>

                                    Subscribe
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <Image src={logo} alt="" />

                <div>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/docs" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <Image className="mx-2" alt="" src={search}/>

                                    Search
                                    </NavigationMenuLink>
                                </Link>
                                </NavigationMenuItem>
                                
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                <Image className="mx-2" alt="" src={suitcase}/>

                                    Manage Booking
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            
                                            
                                            <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components that you can copy and
                                            paste into your apps. Accessible. Customizable. Open
                                            Source.
                                            </p>
                                        </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/docs" title="Introduction">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem href="/docs/installation" title="Installation">
                                        How to install dependencies and structure your app.
                                    </ListItem>
                                    <ListItem href="/docs/primitives/typography" title="Typography">
                                        Styles for headings, paragraphs, lists...etc
                                    </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                                                    
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                <Image className="mx-2"  alt="" src={account}/>

                                    Sign In
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            
                                            <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components that you can copy and
                                            paste into your apps. Accessible. Customizable. Open
                                            Source.
                                            </p>
                                        </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/docs" title="Introduction">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem href="/docs/installation" title="Installation">
                                        How to install dependencies and structure your app.
                                    </ListItem>
                                    <ListItem href="/docs/primitives/typography" title="Typography">
                                        Styles for headings, paragraphs, lists...etc
                                    </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>


            </div>

            <div className="-50 w-full flex justify-center relative mx-auto items-center px-8 py-3 max-w-[1440px] ">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="font-semibold">Explore Destinations</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full font-semibold select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <p className="text-sm leading-tight text-muted-foreground">
                                        Beautifully designed components that you can copy and
                                        paste into your apps. Accessible. Customizable. Open
                                        Source.
                                        </p>
                                    </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="/docs/installation" title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Typography">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger  className="font-semibold">Our Ships</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full font-semibold select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <p className="text-sm leading-tight text-muted-foreground">
                                        Beautifully designed components that you can copy and
                                        paste into your apps. Accessible. Customizable. Open
                                        Source.
                                        </p>
                                    </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="/docs/installation" title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Typography">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="font-semibold">Discover Cruising</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full font-semibold select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <p className="text-sm leading-tight text-muted-foreground">
                                        Beautifully designed components that you can copy and
                                        paste into your apps. Accessible. Customizable. Open
                                        Source.
                                        </p>
                                    </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="/docs/installation" title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Typography">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger  className="font-semibold">Offers</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full font-semibold select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <p className="text-sm leading-tight text-muted-foreground">
                                        Beautifully designed components that you can copy and
                                        paste into your apps. Accessible. Customizable. Open
                                        Source.
                                        </p>
                                    </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="/docs/installation" title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Typography">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        
                    </NavigationMenuList>
                </NavigationMenu>

                <Button variant="outline" className="absolute right-0 font-normal">
                    Find a Cruise <ChevronDown className="h-4 w-4" />
                </Button>
            </div>


        </header>
    )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"