import { IoIosAddCircleOutline } from "react-icons/io";
import Button from "@/components/buttons/Button";

interface AddButtonProps {
  onAddClick: () => void;
}

const AddButton = ({ onAddClick }: AddButtonProps) => {
  return (
    <Button type={"button"} text={"Add Task"} onClick={onAddClick}>
      <IoIosAddCircleOutline aria-hidden />
    </Button>
  );
};

export default AddButton;
