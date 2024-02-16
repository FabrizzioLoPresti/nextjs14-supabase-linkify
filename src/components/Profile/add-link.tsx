'use client';

import { IconPencilPlus } from '@tabler/icons-react';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

type Props = {};

const AddLink = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger className="w-full text-center bg-violet text-white p-6 rounded-full flex flex-row items-center gap-x-2">
        <IconPencilPlus className="w-6 h-6" />
        Add your Link
      </SheetTrigger>
      <SheetContent
        side={'left'}
        className="bg-darkViolet border-none text-claro"
      >
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AddLink;
