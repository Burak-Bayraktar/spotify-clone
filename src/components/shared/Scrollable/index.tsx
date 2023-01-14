import { useCallback, useEffect, useRef, useState } from 'react';
import './style.scss';

type ScrollableProps = {
  children: React.ReactNode;
  height: number | string;
  elementRef: HTMLElement;
  isTargetDataFetched?: boolean;
};

const Scrollable = (props: ScrollableProps) => {
  const [top, setTop] = useState<number>(0);
  const [isBarActive, setIsBarActive] = useState<boolean>(false);
  const [isBarVisible, setIsBarVisible] = useState<boolean>(false);
  const [isBarHidden, setIsBarHidden] = useState<boolean>(false);

  const barRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<number>(0);
  const preventScroll = useRef<boolean>(false);
  const preventScrollTimeout = useRef<number>(0);

  let mouseYCoordRelativeToThumb = 0;
  let mouseYCoordRelativeToThumbRest = 0;

  useEffect(() => {
    if (!props.elementRef) return;
    const { scrollHeight, offsetHeight } = props.elementRef;

    setIsBarHidden(scrollHeight === offsetHeight);
  }, [props.isTargetDataFetched]);

  useEffect(() => {
    props.elementRef?.addEventListener('scroll', calcThumbAndTargetPosition);
    barRef.current?.addEventListener('mousedown', subscribeMouseMovementToCalcThumbAndTargetPosition);
    document.addEventListener('mouseup', unsubscribeMouseToCalcThumbAndTargetPosition);
    window.addEventListener('resize', calcThumbAndTargetPosition);
    return () => {
      props.elementRef?.removeEventListener('scroll', calcThumbAndTargetPosition);
      barRef.current?.removeEventListener('mousedown', subscribeMouseMovementToCalcThumbAndTargetPosition);
      document.removeEventListener('mouseup', unsubscribeMouseToCalcThumbAndTargetPosition);
      window.removeEventListener('resize', calcThumbAndTargetPosition);
    };
  }, [props.elementRef, barRef.current]);

  useEffect(() => {
    scrollableRef.current?.addEventListener('mouseenter', makeScrollBarVisible);
    scrollableRef.current?.addEventListener('mouseleave', toggleScrollBarVisibility);

    return () => {
      scrollableRef.current?.removeEventListener('mouseenter', makeScrollBarVisible);
      scrollableRef.current?.removeEventListener('mouseleave', toggleScrollBarVisibility);
    };
  }, [isBarActive, isBarVisible, timeoutId.current]);

  const makeScrollBarVisible = () => {
    console.log('sa');
    setIsBarVisible(true);
    clearTimeout(timeoutId.current);
  };

  const checkIfCursorOnTargetElement = (e: MouseEvent) => {
    window.removeEventListener('mouseup', checkIfCursorOnTargetElement);

    const isMouseInsideTargetElement = e
      .composedPath()
      .map((item) => {
        return Boolean((item as HTMLElement).dataset?.identifier === 'scrollable');
      })
      .find((i) => i === true);

    if (isMouseInsideTargetElement) {
      return clearTimeout(timeoutId.current);
    }

    toggleScrollBarVisibility();
  };

  const toggleScrollBarVisibility = () => {
    if (isBarActive) {
      return clearTimeout(timeoutId.current);
    }

    makeScrollBarVisible();
    timeoutId.current = setTimeout(() => {
      setIsBarVisible(false);
    }, 1000);
  };

  const calcThumbAndTargetPosition = useCallback(() => {
    if (!props.elementRef || preventScroll.current) return;

    const { scrollTop, scrollHeight, offsetHeight } = props.elementRef;

    setIsBarHidden(scrollHeight === offsetHeight);

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

      preventScroll.current = true;

      clearTimeout(preventScrollTimeout.current);
      preventScrollTimeout.current = setTimeout(() => {
        preventScroll.current = false;
      }, 100);

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

  const subscribeMouseMovementToCalcThumbAndTargetPosition = (e: MouseEvent) => {
    setIsBarActive(true);

    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const height = getComputedStyle(e.target as HTMLDivElement).height;

    const y = e.clientY - rect.top;

    const rest = Number(height.slice(0, -2)) - y;

    mouseYCoordRelativeToThumb = y;
    mouseYCoordRelativeToThumbRest = rest;

    document?.addEventListener('mousemove', calcThumbAndTargetPositionOnMouseMove);
    window.addEventListener('mouseup', checkIfCursorOnTargetElement);
  };

  const unsubscribeMouseToCalcThumbAndTargetPosition = () => {
    setIsBarActive(false);
    document?.removeEventListener('mousemove', calcThumbAndTargetPositionOnMouseMove);
  };

  const scrollTheContentOnClickToBar = (e: React.MouseEvent) => {
    if (!barRef.current) return;

    const { scrollHeight, scrollTop } = props.elementRef;
    const { top: barTop, bottom: barBottom } = barRef.current.getBoundingClientRect();

    if (e.clientY > barTop && e.clientY < barBottom) return;

    let newTop: number = 0;
    if (e.clientY > barTop) {
      if (scrollTop + (e.clientY - barBottom) >= scrollHeight) {
        newTop = props.elementRef.scrollHeight;
      } else {
        newTop = scrollTop + (e.clientY - barBottom);
      }
    }

    if (e.clientY < barTop) {
      if (scrollTop - (barTop - e.clientY) === 0) {
        newTop = 0;
      } else {
        newTop = scrollTop - (barTop - e.clientY);
      }
    }

    props.elementRef.scrollTop = newTop;
    calcThumbAndTargetPosition();
  };

  const calcMeasurementValues = () => {
    const { offsetHeight, scrollHeight } = props.elementRef;

    const maxScrollable = scrollHeight - offsetHeight;
    const targetTop = offsetHeight - Number(getComputedStyle(barRef.current!).height.slice(0, -2));
    const ratio = targetTop / maxScrollable;

    return { ratio, targetTop };
  };

  return (
    <div data-identifier="scrollable" ref={scrollableRef} className="scrollable" style={{ height: props.height }}>
      {props.children}
      <div className="scroll-container" onClick={(e: React.MouseEvent) => scrollTheContentOnClickToBar(e)}>
        <div
          ref={barRef}
          className={`scroll-bar ${isBarActive ? '-active' : ''} ${isBarVisible ? '' : '--invisible'} ${
            isBarHidden ? 'hidden' : 'block'
          }`}
          style={{ top }}
        />
      </div>
    </div>
  );
};

export default Scrollable;
