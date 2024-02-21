'use client';

import Link from 'next/link';
import { IconTrash, IconPencil } from '@tabler/icons-react';
import SwitchState from './switch-state';
import { deleteLink } from '@/actions/actions';
import { useLinksStore } from '@/store/linksStore';
import { LinkEntity } from '@/types/types';

type Props = {
  link: LinkEntity;
};

const LinkCard = ({ link }: Props) => {
  const setLinkEdit = useLinksStore((state) => state.setLinkEdit);

  const handleEdit = (link: LinkEntity) => () => {
    setLinkEdit(link);
  };

  const handleDelete = async () => {
    await deleteLink(link.id);
  };

  return (
    <div key={link.id} className="flex flex-col bg-claro rounded-md p-4 mb-4">
      <div className="flex flex-row items-center justify-between">
        <div>
          <div className="flex flex-row items-center gap-x-2">
            <p className="font-semibold">{link.name}</p>
            <button type="button" onClick={handleEdit(link)}>
              <IconPencil className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-row items-center gap-x-2">
            <Link href={link.url} target="_blank">
              {link.url}
            </Link>
            <button type="button" onClick={handleEdit(link)}>
              <IconPencil className="w-6 h-6" />
            </button>
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
