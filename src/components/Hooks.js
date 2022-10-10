import { useRef } from 'react';

export function useOnDraw(onDraw) {

    const canvasRef = useRef(null);

    let isDrawingRef = useRef(false);

    function setCanvasRef(ref) {
        if (!ref) return;
        canvasRef.current = ref;
        initMouseMoveListener();
        initMouseDownListener();
        initMouseUpListener();
    }

    function initMouseMoveListener() {
        const mouseMoveListener = (e) => {
            if (isDrawingRef.current) {
                const point = computePointInCanvas(e.clientX, e.clientY);
                const ctx = canvasRef.current.getContext('2d');
    
                if (onDraw) onDraw(ctx, point)
            }
        }

        window.addEventListener('mousemove', mouseMoveListener);
    }

    function initMouseUpListener() { 
        if (!canvasRef.current) return;

        const listener = () => { isDrawingRef.current = false; }
        window.addEventListener('mouseup', listener);
    }


    function initMouseDownListener(params) {
        if (!canvasRef.current) return;

        const listener = () => { isDrawingRef.current = true; }
        canvasRef.current.addEventListener('mousedown', listener);
    }

    function computePointInCanvas(clientX, clientY) {
        if (canvasRef.current) {
            const boundingRect = canvasRef.current.getBoundingClientRect();
            return {
                x : clientX - boundingRect.left,
                y : clientY - boundingRect.top
            };
        } else {
            return null;
        }

    }

    return setCanvasRef;
}