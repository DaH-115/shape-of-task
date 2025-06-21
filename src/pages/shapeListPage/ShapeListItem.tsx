import React, { memo } from 'react';
import StyledShapes from 'components/shapes/SingleShapes';
import { ShapeName } from 'types/task';

const ShapeListItem = ({ shape }: { shape: ShapeName }) => {
  return (
    <li>
      <StyledShapes shapeName={shape} />
    </li>
  );
};

export default memo(ShapeListItem);
