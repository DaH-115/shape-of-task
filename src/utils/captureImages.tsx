import html2canvas from 'html2canvas';

const captureImages = async (
  taskListRef: React.RefObject<HTMLUListElement | null>
) => {
  if (!taskListRef.current) {
    throw new Error('저장할 이미지가 없습니다.');
  }

  const taskList = taskListRef.current!;

  const taskListImg = await html2canvas(taskList, {
    scale: 2,
    useCORS: true,
    logging: false,
    allowTaint: true,
  });

  const paddingSize = 20;

  const paddedCanvas = document.createElement('canvas');
  paddedCanvas.width = taskListImg.width + paddingSize * 2;
  paddedCanvas.height = taskListImg.height + paddingSize * 2;

  const ctx = paddedCanvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, paddedCanvas.width, paddedCanvas.height);

    ctx.drawImage(taskListImg, paddingSize, paddingSize);
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const fileName = `task_list_${timestamp}.png`; // "2024-01-12T10-30-45-789Z"

  return { paddedCanvas, fileName };
};

export default captureImages;
