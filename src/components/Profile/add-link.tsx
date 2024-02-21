'use client';

import { useState, useEffect } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { IconPencilPlus } from '@tabler/icons-react';
import { useLinksStore } from '@/store/linksStore';
import AddLinkForm from './add-link-form';

type Props = {};

const AddLink = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const linkEdit = useLinksStore((state) => state.linkEdit);
  const clearLinkEdit = useLinksStore((state) => state.clearLinkEdit);

  useEffect(() => {
    if (linkEdit) {
      setOpen(true);
    }
  }, [linkEdit]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="w-full text-center bg-violet text-white p-6 rounded-full flex flex-row items-center gap-x-2"
        onClick={() => clearLinkEdit()}
      >
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
        <AddLinkForm setOpen={setOpen} linkEdit={linkEdit} />
      </SheetContent>
    </Sheet>
  );
};

export default AddLink;
