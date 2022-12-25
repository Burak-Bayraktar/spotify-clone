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

  const handleThumbPosition = useCallback(() => {
    const { scrollTop, offsetHeight, scrollHeight } = props.elementRef;

    const maxScrollable = scrollHeight - offsetHeight;
    const targetTop = offsetHeight - Number(getComputedStyle(barRef.current!).height.slice(0, -2));
    const ratio = targetTop / maxScrollable;

    const scrollBarCurrentTop = scrollTop * ratio;
    setTop(scrollBarCurrentTop);
  }, [props.elementRef, barRef.current]);

  useEffect(() => {
    props.elementRef?.addEventListener('scroll', (e) => {
      handleThumbPosition();
    });
  }, [props.elementRef, barRef.current]);

  return (
    <div className="scrollable" style={{ height: props.height }}>
      {props.children}
      <div className="scroll-container">
        <div ref={barRef} className="scroll-bar" style={{ top }} />
      </div>
    </div>
  );
};

export default Scrollable;
