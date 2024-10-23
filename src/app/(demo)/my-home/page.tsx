"use client";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { settings, setSettings } = sidebar;
  return (
    <ContentLayout title="NEWSFEED">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>My-Home</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <TooltipProvider>
        <div className="flex gap-6 mt-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center space-x-2">
                <Switch
                  id="is-hover-open"
                  onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
                  checked={settings.isHoverOpen}
                />
                <Label htmlFor="is-hover-open">Hover Open</Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>When hovering on the sidebar in mini state, it will open</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center space-x-2">
                <Switch
                  id="disable-sidebar"
                  onCheckedChange={(x) => setSettings({ disabled: x })}
                  checked={settings.disabled}
                />
                <Label htmlFor="disable-sidebar">Disable Sidebar</Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Hide sidebar</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
      <div className="mt-4">
        <Card>
          <CardContent className="h-full w-full p-8 font-bold flex justify-center items-center text-2xl">
            Your NewsFeed
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
}