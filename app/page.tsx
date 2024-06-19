"use client";

import Image from "next/image";
import NavSideBar from "./components/ui/sidebar";
import { Accordion, AccordionItem, Dropdown, DropdownItem, DropdownTrigger, Avatar, Button, ButtonGroup, button, DropdownMenu } from "@nextui-org/react";
import { CircleCheck, CircleHelp, Dot, GalleryVerticalEnd, Inbox, Lightbulb, Megaphone, MessagesSquare, PencilIcon, Radio, RefreshCcw, Scroll, Settings, Sun, Users,} from "lucide-react";


export default function Home() {
  return (
    <div className="">
      <NavSideBar>
        <div className="flex gap-1 justify-between items-center">
          <Button className="bg-gray-800 hover:bg-gray-700 hover:border border-gray-600 w-4/5 justify-start">
            <Image
              src="https://fb-usercontent.fra1.cdn.digitaloceanspaces.com/organization-3c00dffd-3c5a-4b03-9439-a22712aab57d.png"
              width={20}
              height={20}
              alt="logo"
            />
            <p className="text-xl font-bold">Aung22</p>
          </Button>
          <Avatar size="sm" isBordered />
        </div>
        <div className="mt-4 flex flex-col gap-2 items-start">
          <Button className="w-full justify-start bg-gray-700 hover:border border-gray-600" startContent={<PencilIcon />}>
            Create new post
          </Button>
          <Button color="default" className="w-full justify-start" startContent={<CircleCheck />}>Getting Started</Button>
          <Button color="default" className="w-full justify-start" startContent={<Inbox />}>Inbox</Button>
          <Button color="default" className="w-full justify-start" startContent={<Radio />}>Live Board</Button>
        </div>
        <div className="mt-4 flex flex-col gap-2 items-start">
          <p>FEATURES</p>
          <Dropdown>
            <DropdownTrigger>
              <Button color="default" className="w-full justify-start" startContent={<GalleryVerticalEnd />}>Post</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className="w-72">
              <DropdownItem key="user" startContent={<Dot color="orange"/>}>User Review</DropdownItem>
              <DropdownItem key="planned" startContent={<Dot color="purple"/>}>Planned</DropdownItem>
              <DropdownItem key="active" startContent={<Dot color="blue"/>}>Active</DropdownItem>
              <DropdownItem key="dc" startContent={<Dot color="green"/>}>Done / Closed</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button color="default" className="w-full justify-start" startContent={<Scroll />}>Roadmap</Button>
          <Button color="default" className="w-full justify-start" startContent={<RefreshCcw />}>Changelogs</Button>
          <Button color="default" className="w-full justify-start" startContent={<Users />}>Users</Button>
          <Button color="default" className="w-full justify-start" startContent={<MessagesSquare />}>Messages</Button>
        </div>
        <div className="mt-4 flex flex-col gap-2 items-start">
          <p>MODULES</p>
          <Button color="default" className="w-full justify-start" startContent={<Settings />}>Settings</Button>
          <Button color="default" className="w-full justify-start" startContent={<CircleHelp />}>Help</Button>
          <Button color="default" className="w-full justify-start" startContent={<Megaphone />}>Latest Changes</Button>
          <Button color="default" className="w-full justify-start" startContent={<Lightbulb />}>Give us feedback</Button>
          <Button color="default" className="w-full justify-start" startContent={<Sun />}>Light Mode</Button>
        </div>
        
      </NavSideBar>
    </div>
  );
}
