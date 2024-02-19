'use client';

import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import AddLinkForm from './add-link-form';
import { IconPencilPlus } from '@tabler/icons-react';

type Props = {};

const AddLink = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="w-full text-center bg-violet text-white p-6 rounded-full flex flex-row items-center gap-x-2">
        <IconPencilPlus className="w-6 h-6" />
        Add your Link
      </SheetTrigger>
      <SheetContent
        side={'left'}
        className="bg-darkViolet border-none text-claro"
      >
        <SheetHeader>
          <SheetTitle className="text-claro">Add a new link</SheetTitle>
          <SheetDescription className="text-claro">
            You can add a new link to your profile and order them as you like.
          </SheetDescription>
        </SheetHeader>
        <AddLinkForm setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  );
};

export default AddLink;
