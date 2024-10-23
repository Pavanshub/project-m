import {
  Users,
  Settings,
  LucideIcon,
  FolderOpen,
  Contact,
  GalleryVerticalEnd,
  BarChartBig
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/projects",
          label: "Projects",
          icon: FolderOpen,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Connections",
          icon: Contact,
          submenus: [
            {
              href: "/contacts",
              label: "Contacts"
            },
            {
              href: "/boards",
              label: "Boards"
            },
            {
              href: "/organizations",
              label: "Organizations"
            }
          ]
        },
        {
          href: "/albums",
          label: "Albums",
          icon: GalleryVerticalEnd
        },
        {
          href: "/personal-progress",
          label: "Personal Progress",
          icon: BarChartBig
        }
      ]
    },
    {
      groupLabel: "Profile",
      menus: [
        {
          href: "/following",
          label: "Following",
          icon: Users
        },
        {
          href: "/followers",
          label: "Follwers",
          icon: Settings
        }
      ]
    }
  ];
}
