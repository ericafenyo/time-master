import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Sun,
  Languages,
  LibraryBig,
  LogOut,
  User,
  Settings,
  LifeBuoy,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="px-6 md:px-8 flex h-14 items-center">
        <div className="flex space-x-2 items-center">
          <LibraryBig className="inline" size={20} />
          <span className="font-bold">Time Master</span>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <TooltipProvider delayDuration={500}>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="rounded-full mx-2"
                      
                      variant="ghost"
                    >
                      <Languages className="mr-2 h-4 w-4"/>
                      <span  className="text-l">English</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        {/* <svg
                          viewBox="0 0 3 2"
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none">
                            <path fill="#012169" d="M0 0h3v2H0z" />
                            <path
                              fill="#FFF"
                              d="m.352 0 1.143.754L2.635 0H3v.258l-1.125.746L3 1.746V2h-.375L1.5 1.254.38 2H0v-.25l1.12-.742L0 .267V0z"
                            />
                            <path
                              d="M1.988 1.17 3 1.834V2l-1.27-.83h.258Zm-.863.084.028.146-.9.6H0l1.125-.746ZM3 0v.013L1.833.795l.01-.183L2.765 0H3ZM0 0l1.12.733H.84L0 .175V0Z"
                              fill="#C8102E"
                            />
                            <path
                              d="M1.13 0v2h.75V0h-.75ZM0 .667v.666h3V.667H0Z"
                              fill="#FFF"
                            />
                            <path
                              d="M0 .804v.4h3v-.4H0ZM1.28 0v2h.45V0h-.45Z"
                              fill="#C8102E"
                            />
                          </g>
                        </svg> */}

                        <span>English</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        {/* <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 3 2"
                        >
                          <path fill="#EC1920" d="M0 0h3v2H0z" />
                          <path fill="#fff" d="M0 0h2v2H0z" />
                          <path fill="#051440" d="M0 0h1v2H0z" />
                        </svg> */}
                        <span>Français</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TooltipTrigger>
              <TooltipContent>
                <p>Language</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button className="rounded-full" size="icon" variant="ghost">
            <Sun size="20" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="ghost">
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>E</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  {/* <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2"><path fill="#EC1920" d="M0 0h3v2H0z"/><path fill="#fff" d="M0 0h2v2H0z"/><path fill="#051440" d="M0 0h1v2H0z"/></svg> */}
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  <span>Support</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
