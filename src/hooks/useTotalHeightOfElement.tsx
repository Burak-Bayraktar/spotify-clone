import { RefObject, useEffect, useState } from 'react';

const useTotalHeightOfElement = (props: { element: RefObject<HTMLElement> }) => {
  const [elementHeight, setElementHeight] = useState<number>(0);
  const [elementStyles, setElementStyles] = useState<CSSStyleDeclaration>();

  useEffect(() => {
    calculateElementHeight();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', calculateElementHeight);
    return () => window.removeEventListener('resize', calculateElementHeight);
  }, [props.element.current]);

  const calculateElementHeight = () => {
    let height: number = 0;
    const elementStyles = getComputedStyle(props.element.current!);
    ['height', 'margin-top', 'margin-bottom', 'border-width'].forEach((cssProp: string) => {
      const propType = cssProp as keyof CSSStyleDeclaration;
      const result = Number(elementStyles[propType]?.toString().slice(0, -2));

      if (!result || Number.isNaN(result)) {
        return height;
      }

      height += result;
    });

    setElementHeight(height);
    setElementStyles(elementStyles);
  };

  return {
    height: elementHeight,
    styles: elementStyles,
  };
};

export default useTotalHeightOfElement;
