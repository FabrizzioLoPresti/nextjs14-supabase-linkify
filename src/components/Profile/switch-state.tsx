'use client';

import { Switch } from '@/components/ui/switch';
import { LinkEntity } from '@/types/types';

type Props = {
  link: LinkEntity;
};

const SwitchState = ({ link }: Props) => {
  const handleChange = () => {
    console.log('change');
  };

  return <Switch checked={link.active} onCheckedChange={handleChange} />;
};

export default SwitchState;
