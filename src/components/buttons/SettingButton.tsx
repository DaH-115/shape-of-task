import { IoMdSettings } from "react-icons/io";
import Button from "@/components/buttons/Button";

interface SettingButtonProps {
  onClick: () => void;
}

const SettingButton = ({ onClick }: SettingButtonProps) => {
  return (
    <Button type="button" text="Settings" onClick={onClick} variant="outline">
      <IoMdSettings aria-hidden />
    </Button>
  );
};

export default SettingButton;
