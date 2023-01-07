import { useCallback, useEffect, useRef, useState } from 'react';
import './style.scss';

type ScrollableProps = {
  children: React.ReactNode;
  height: number | string;
  elementRef: HTMLElement;
};

const Scrollable = (props: ScrollableProps) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState<number>(0);
  const [isBarActive, setIsBarActive] = useState<boolean>(false);

  let mouseYCoordRelativeToThumb = 0;
  let mouseYCoordRelativeToThumbRest = 0;

  useEffect(() => {
    addScrollBarListeners();

    return () => {
      props.elementRef?.removeEventListener('scroll', calcThumbAndTargetPosition);
      window.removeEventListener('resize', calcThumbAndTargetPosition);
      barRef.current?.removeEventListener('mousedown', subscribeMouseToCalcThumbAndTargetPosition);
      document.removeEventListener('mouseup', unsubscribeMouseToCalcThumbAndTargetPosition);
    };
  }, [props.elementRef, barRef.current]);

  const calcThumbAndTargetPosition = useCallback(() => {
    if (!props.elementRef) return;
    const { scrollTop } = props.elementRef;
    const { ratio } = calcMeasurementValues();

    const scrollBarCurrentTop = scrollTop * ratio;
    setTop(scrollBarCurrentTop);
  }, [props.elementRef, barRef.current]);

  const calcThumbAndTargetPositionOnMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!props.elementRef || !barRef.current) return;

      const thumbViewportTop = barRef.current.getBoundingClientRect().top;
      const thumbViewportBottom = barRef.current.getBoundingClientRect().bottom;

      if (e.clientY < mouseYCoordRelativeToThumb + thumbViewportTop && e.movementY > 0) return;
      if (e.clientY > thumbViewportBottom - mouseYCoordRelativeToThumbRest && e.movementY < 0) return;

      const { ratio, targetTop } = calcMeasurementValues();

      setTop((prev) => {
        if (prev + e.movementY < 0) {
          props.elementRef.scrollTop = prev / ratio;

          return prev;
        }

        if (prev + e.movementY > targetTop) {
          props.elementRef.scrollTop = targetTop / ratio;
          return targetTop;
        }

        props.elementRef.scrollTop = (prev + e.movementY) / ratio;
        return prev + e.movementY;
      });
    },
    [props.elementRef, barRef.current]
  );

  const addScrollBarListeners = () => {
    props.elementRef?.addEventListener('scroll', calcThumbAndTargetPosition);
    barRef.current?.addEventListener('mousedown', subscribeMouseToCalcThumbAndTargetPosition);
    document.addEventListener('mouseup', unsubscribeMouseToCalcThumbAndTargetPosition);
    window.addEventListener('resize', calcThumbAndTargetPosition);
  };

  const subscribeMouseToCalcThumbAndTargetPosition = (e: MouseEvent) => {
    setIsBarActive(true);

    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const height = getComputedStyle(e.target as HTMLDivElement).height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rest = Number(height.slice(0, -2)) - y;

    mouseYCoordRelativeToThumb = y;
    mouseYCoordRelativeToThumbRest = rest;

    document?.addEventListener('mousemove', calcThumbAndTargetPositionOnMouseMove);
  };

  const unsubscribeMouseToCalcThumbAndTargetPosition = () => {
    setIsBarActive(false);
    document?.removeEventListener('mousemove', calcThumbAndTargetPositionOnMouseMove);
  };

  const calcMeasurementValues = () => {
    const { offsetHeight, scrollHeight } = props.elementRef;

    const maxScrollable = scrollHeight - offsetHeight;
    const targetTop = offsetHeight - Number(getComputedStyle(barRef.current!).height.slice(0, -2));
    const ratio = targetTop / maxScrollable;

    return { ratio, targetTop };
  };

  return (
    <div className="scrollable" style={{ height: props.height }}>
      {props.children}
      <div className="scroll-container">
        <div ref={barRef} className={`scroll-bar ${isBarActive ? '-active' : ''}`} style={{ top }} />
      </div>
    </div>
  );
};

export default Scrollable;
