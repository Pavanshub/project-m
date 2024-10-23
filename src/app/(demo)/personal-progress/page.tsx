import Link from "next/link";
import { Progress } from "@/components/ui/progress";

import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";

export default function TagsPage() {
  return (
    <ContentLayout title="Personal Progress">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Personal-Progress</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card>
        <CardContent className="p-4 my-3">
          Progress 1
          <Progress value={76} />
        </CardContent>
        <CardContent className="p-4">
          Progress 2
          <Progress value={26} />
        </CardContent>
        <CardContent className="p-4">
          Progress 3
          <Progress value={44} />
        </CardContent>
        <CardContent className="p-4">
          Progress 4
          <Progress value={90} />
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
