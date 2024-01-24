import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import profileImage from "@/assets/images/prifile-pic.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-0">
        <Avatar className="outline-0 border border-slate-400 border-solid">
          <AvatarImage src={profileImage} />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
