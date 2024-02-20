import { Switch } from '@/components/ui/switch';
import { LinkEntity } from '@/types/types';
import { updateState } from '@/actions/actions';

type Props = {
  link: LinkEntity;
};

const SwitchState = ({ link }: Props) => {
  const handleChange = async () => {
    await updateState({
      id: link.id,
      active: !link.active,
    });
  };

  return <Switch checked={link.active} onCheckedChange={handleChange} />;
};

export default SwitchState;
