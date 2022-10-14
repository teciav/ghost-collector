import { useEffect, useRef } from 'react';

export function useOnDraw(onDraw) {

  const canvasRef = useRef(null);
  const prevPointRef = useRef(null);
  let isDrawingRef = useRef(false);

  const mouseMoveListenerRef = useRef(null);
  const mouseUpListenerRef = useRef(null);

  useEffect(() => {

    function computePointInCanvas(clientX, clientY) {
      if (canvasRef.current) {
        const boundingRect = canvasRef.current.getBoundingClientRect();
        return {
          x: clientX - boundingRect.left,
          y: clientY - boundingRect.top
        };
      } else {
        return null;
      }
    }

    function initMouseMoveListener() {
      const mouseMoveListener = (e) => {
        if (isDrawingRef.current) {
          const point = computePointInCanvas(e.clientX, e.clientY);
          const ctx = canvasRef.current.getContext('2d');

          if (onDraw) onDraw(ctx, point, prevPointRef.current);
          prevPointRef.current = point;
        }
      }
      mouseMoveListenerRef.current = mouseMoveListener;
      window.addEventListener('mousemove', mouseMoveListener);
    }

    function initMouseUpListener() {
      const listener = () => {
        isDrawingRef.current = false;
        prevPointRef.current = null;
      }
      mouseUpListenerRef.current = listener;
      window.addEventListener('mouseup', listener);
    }

    function removeListeners() {
      if (mouseMoveListenerRef.current) {
          window.removeEventListener('mousemove', mouseMoveListenerRef.current);
      }
      if (mouseUpListenerRef.current) {
          window.removeEventListener('mouseup', mouseUpListenerRef.current);
      }
    }

    initMouseMoveListener();
    initMouseUpListener();

    return () => {
      removeListeners();
    }
  }, [onDraw]);

  function setCanvasRef(ref) {
    canvasRef.current = ref;
  }

  function onMouseDown() {
    isDrawingRef.current = true; 
  }

  return {
    setCanvasRef, onMouseDown
  }
}