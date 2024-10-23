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
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Plus, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

type Item = {
  id: number;
  name: string;
};

type Category = "albums";

export default function AlbumsPage() {
  const [items, setItems] = useState<Record<Category, Item[]>>({
    albums: []
  });

  const [newItemName, setNewItemName] = useState("");

  const addItem = (category: Category) => {
    if (items[category].length >= 3) {
      alert(`You can't create more than 3 ${category}`);
      return;
    }
    const newItem = { id: Date.now(), name: newItemName };
    setItems((prev) => ({
      ...prev,
      [category]: [...prev[category], newItem]
    }));
    setNewItemName("");
  };

  const renderDialog = (category: Category) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default">
          <PlusCircle />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add New {category.slice(0, -1)}</SheetTitle>
          <SheetDescription>
            Add albumn here. Click add project when you are done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>

            <Input
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              placeholder={`Enter ${category.slice(0, -1)} name`}
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={() => addItem(category)}>
              Add Project
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );

  return (
    <ContentLayout title="Users">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/my-home">My-Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Albums</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {(["albums"] as const).map((category) => (
        <div
          key={category}
          className="flex items-center p-2 my-4 justify-between  hover:bg-accent rounded-lg"
        >
          <Link href={`/${category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
          {renderDialog(category)}
        </div>
      ))}

      <Card>
        <CardHeader>
          {Object.entries(items).map(([category, categoryItems]) => (
            <div key={category} className="mt-4">
              <h3 className="font-semibold">
                {category.charAt(0).toUpperCase() + category.slice(1) + " List"}
              </h3>

              <ul className="flex my-4 ">
                {categoryItems.map((item) => (
                  <li
                    key={item.id}
                    className="m-2 border-2 flex w-full h-36 items-center rounded-md border-accent-foreground justify-center text-3xl font-semibold"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardHeader>
      </Card>
    </ContentLayout>
  );
}
