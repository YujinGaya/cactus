export default function useDrag(draggerId: string) {
  const dragger = document.getElementById(draggerId);
  if (!dragger) return;

  const leftSide = dragger.previousElementSibling as HTMLElement;
  if (!leftSide) return;

  const storageKey = `${draggerId}-left-width`;
  leftSide.style.width = `${localStorage.getItem(storageKey)}px`;

  let x = 0;
  let leftWidth = 0;

  const mouseMoveHandler = (ev: MouseEvent) => {
    const dx = ev.clientX - x;

    leftSide.style.width = `${leftWidth + dx}px`;
  };

  const mouseUpHandler = () => {
    localStorage.setItem(storageKey, leftSide.getBoundingClientRect().width.toString());

    document.body.style.removeProperty('cursor');

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  const mouseDownHandler = (ev: MouseEvent) => {
    x = ev.clientX;
    leftWidth = leftSide.getBoundingClientRect().width;

    document.body.style.cursor = 'col-resize';

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  dragger.addEventListener('mousedown', mouseDownHandler);
}
