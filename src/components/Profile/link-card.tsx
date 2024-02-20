'use client';

import Link from 'next/link';
import { IconTrash, IconPencil } from '@tabler/icons-react';
import { LinkEntity } from '@/types/types';
import SwitchState from './switch-state';
import { deleteLink } from '@/actions/actions';

type Props = {
  link: LinkEntity;
};

const LinkCard = ({ link }: Props) => {
  const handleDelete = async () => {
    await deleteLink(link.id);
  };

  return (
    <div key={link.id} className="flex flex-col bg-claro rounded-md p-4 mb-4">
      <div className="flex flex-row items-center justify-between">
        <div>
          <div className="flex flex-row items-center gap-x-2">
            <p className="font-semibold">{link.name}</p>
            <IconPencil className="w-6 h-6" />
          </div>

          <div className="flex flex-row items-center gap-x-2">
            <Link href={link.url} target="_blank">
              {link.url}
            </Link>
            <IconPencil className="w-6 h-6" />
          </div>
        </div>
        <SwitchState link={link} />
      </div>

      <div className="flex flex-row items-center justify-between">
        <div>Otros</div>
        <IconTrash className="w-6 h-6 cursor-pointer" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default LinkCard;
