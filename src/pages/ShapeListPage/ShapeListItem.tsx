import React, { memo } from 'react';
import StyledShapes from 'components/figures/SingleShapes';
import { ShapeName } from 'store/taskListSlice';

const ShapeListItem = ({ shape }: { shape: ShapeName }) => {
  return (
    <li>
      <StyledShapes shapeName={shape} />
    </li>
  );
};

export default memo(ShapeListItem);
