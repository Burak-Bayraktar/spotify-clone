import { RefObject, useEffect, useRef, useState } from 'react';

const useTotalHeightOfElement = (props: { element: RefObject<HTMLElement> }) => {
  const [elementHeight, setElementHeight] = useState<number>(0);
  const [elementStyles, setElementStyles] = useState<CSSStyleDeclaration>();

  useEffect(() => {
    let height: number = 0;
    const elementStyles = getComputedStyle(props.element.current!);

    ['height', 'margin-top', 'margin-bottom', 'border-width'].forEach((cssProp: string) => {
      const propType = cssProp as keyof CSSStyleDeclaration;
      const result = Number(elementStyles[propType]?.toString().slice(0, -2));

      if (!result) height;

      height += result;
    });

    setElementHeight(height);
    setElementStyles(elementStyles);
  }, [props.element.current]);

  return {
    height: elementHeight,
    styles: elementStyles,
  };
};

export default useTotalHeightOfElement;
