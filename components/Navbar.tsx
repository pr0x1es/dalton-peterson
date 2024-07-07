import { ThemeButton } from "./ThemeButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu size={35} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <ThemeButton />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/blogs">Blog</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="https://github.com/pr0x1es/pr0x1es.github.io">GitHub</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
