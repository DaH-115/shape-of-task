import { memo, useCallback } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleDarkMode } from "@/store/themeChangeSlice";

/** 다크 모드 토글 */
const DarkModeToggle = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state) => state.themeChange.isDarkMode);

  const handleToggle = useCallback(() => {
    dispatch(toggleDarkMode());
  }, [dispatch]);

  return (
    <DarkModeWrapper>
      <DarkModeLabel id="dark-mode-label">다크 모드</DarkModeLabel>
      <DarkModeSwitch
        type="button"
        role="switch"
        aria-checked={isDarkMode}
        aria-labelledby="dark-mode-label"
        onClick={handleToggle}
        $on={isDarkMode}
      >
        <DarkModeThumb $on={isDarkMode} />
      </DarkModeSwitch>
    </DarkModeWrapper>
  );
};

export default memo(DarkModeToggle);

const DarkModeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem 0;
  gap: 1rem;
`;

const DarkModeLabel = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.commonColors.dark_gray};
`;

const DarkModeSwitch = styled.button<{ $on: boolean }>`
  position: relative;
  width: 3.25rem;
  height: 1.75rem;
  flex-shrink: 0;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.commonColors.gray_border};
  background-color: ${({ theme, $on }) =>
    $on ? theme.colors.priority1 : theme.commonColors.light_gray};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.priority1};
    outline-offset: 2px;
  }
`;

const DarkModeThumb = styled.span<{ $on: boolean }>`
  position: absolute;
  top: 50%;
  left: ${({ $on }) => ($on ? "calc(100% - 1.35rem)" : "0.2rem")};
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.commonColors.surface};
  box-shadow: ${({ theme }) => theme.shadows.switchThumb};
  transition: left 0.2s ease;
`;
