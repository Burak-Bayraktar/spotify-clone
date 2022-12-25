import { useCallback, useEffect, useRef, useState } from 'react';
import './style.scss';

type ScrollableProps = {
  children: React.ReactNode;
  height: number | string;
  elementRef: HTMLElement;
};

const Scrollable = (props: ScrollableProps) => {
  const barRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState<number>(0);

  const handleThumbPosition = useCallback(() => {
    const { scrollTop: contentTop } = props.elementRef;
    setTop(contentTop);
  }, [props.elementRef, containerRef.current]);

  useEffect(() => {
    props.elementRef?.addEventListener('scroll', (e) => {
      handleThumbPosition();
    });
  }, [props.elementRef, containerRef.current]);

  return (
    <div className="scrollable" style={{ height: props.height }}>
      {props.children}
      <div ref={containerRef} className="scroll-container" style={{ top, height: '100%' }}>
        <div ref={barRef} className="scroll-bar" />
      </div>
    </div>
  );
};

export default Scrollable;
