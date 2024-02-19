import { useTransition, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LinkEntity } from '@/types/types';
import { addLink } from '@/actions/actions';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '../ui/label';
import { SheetFooter } from '@/components/ui/sheet';
import { Toaster } from '../ui/sonner';

type Props = {
  setOpen: (open: boolean) => void;
};

const AddLinkForm = ({ setOpen }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LinkEntity>();
  const [isPending, startTransition] = useTransition();

  const onSubmit = handleSubmit(async (data) => {
    startTransition(async () => {
      const response = await addLink(data);

      if (response?.error) {
        toast.error(response.error);
        return;
      }

      setOpen(false);
    });
  });

  return (
    <form className="grid gap-4 py-4" onSubmit={onSubmit}>
      <Toaster position="top-right" richColors />
      <div className="flex flex-col w-full gap-y-4">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="My LinkedIn Profile"
          className="col-span-3 text-claro placeholder:text-claro"
          {...register('name', {
            required: {
              value: true,
              message: 'Name is required',
            },
          })}
        />
        {
          <span className="text-claro text-xs">
            {errors.name && errors.name.message}
          </span>
        }
      </div>
      <div className="flex flex-col w-full gap-y-4">
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          placeholder="https://..."
          className="col-span-3 text-claro placeholder:text-claro"
          {...register('url', {
            required: {
              value: true,
              message: 'URL is required',
            },
            pattern: {
              value: /^(ftp|http|https):\/\/[^ "]+$/,
              message: 'URL must be a valid URL',
            },
          })}
        />
        {
          <span className="text-claro text-xs">
            {errors.url && errors.url.message}
          </span>
        }
      </div>
      <div className="flex flex-col w-full gap-y-4">
        <Label htmlFor="logo">Logo</Label>
        <Input
          id="logo"
          placeholder="logo"
          className="col-span-3 text-claro placeholder:text-claro"
        />
      </div>
      <SheetFooter>
        <Button
          type="submit"
          className={`bg-oscuro ${isPending && 'disabled:opacity-50'}`}
          disabled={isPending}
        >
          {isPending ? 'Saving...' : 'Save changes'}
        </Button>
      </SheetFooter>
    </form>
  );
};

export default AddLinkForm;
