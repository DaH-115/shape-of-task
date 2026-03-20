/** CSS 믹스인 - 스크롤바 숨김, 시각적 숨김 등 재사용 스타일 */
export const mixins = {
  /** 화면에는 숨기고 스크린 리더에는 노출 (Visually Hidden / sr-only) */
  visuallyHidden: `
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  `,
  hideScrollbar: `
    overflow: scroll;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};
