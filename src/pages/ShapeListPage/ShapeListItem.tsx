import React, { memo } from 'react';
import StyledShapes from 'components/figures/SingleShapes';

const ShapeListItem = ({ shape }: { shape: string }) => {
  return (
    <li>
      <StyledShapes shapeName={shape} />
    </li>
  );
};

export default memo(ShapeListItem);
