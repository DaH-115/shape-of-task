export const mixins = {
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
