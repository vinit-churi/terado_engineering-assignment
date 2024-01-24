import {
  Sheet,
  SheetContent,
  //   SheetDescription,
  //   SheetHeader,
  //   SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import sidebarLinks from "@/constants/sidebarLinks";
import SidebarLink from "@/components/common/SidebarLink";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <Sheet open={isOpen} onOpenChange={(value) => setIsOpen(value)}>
      <SheetTrigger>
        <RiMenu2Line className="hidden max-[1100px]:block text-3xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col mt-16 gap-2">
          {sidebarLinks.map((link) => (
            <SidebarLink
              key={link.title}
              link={link.link}
              icon={link.icon}
              title={link.title}
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
        {/* <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader> */}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
