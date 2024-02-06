import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import SideBar from "./side-bar"



export const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4">
                <Menu />
            </SheetTrigger>
            <SheetContent side={'left'} className="w-32 p-0 pt-10 bg-secondary">
                <SideBar />
            </SheetContent>
        </Sheet>
    )
}