import { GiSaveArrow } from "react-icons/gi";
import { useSaveImage } from "@/hooks/useSaveImage";
import { SaveButtonProps } from "@/components/buttons/types";
import Button from "@/components/buttons/Button";

// 이미지 저장 버튼 컴포넌트
const SaveButton = ({ taskListRef, isDisabled }: SaveButtonProps) => {
  const { saveImage, isLoading } = useSaveImage();

  // 이미지 저장 핸들러
  const handleSaveImage = () => {
    saveImage(taskListRef);
  };

  const disabled = isDisabled || isLoading;

  return (
    <Button
      type="button"
      text={
        isDisabled || isLoading
          ? "No completed tasks to save"
          : isLoading
            ? "Saving..."
            : "Save Image"
      }
      onClick={disabled ? undefined : handleSaveImage}
      disabled={disabled || isLoading}
    >
      <GiSaveArrow aria-hidden />
    </Button>
  );
};

export default SaveButton;
