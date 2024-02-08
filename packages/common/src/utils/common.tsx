import React, { ComponentProps } from 'react';

/**
 * for CreateReactPortal
 * @param id ID for created element
 * @returns
 */
export const getPortalBody = (id?: string): HTMLElement | null => {
  if (id) {
    if (document.getElementById(id)) {
      return document.getElementById(id);
    }
    const portalBody = document.createElement('div');
    portalBody.setAttribute('id', id);
    document.body.appendChild(portalBody);
    return portalBody;
  } else {
    const portalBody = document.createElement('div');
    document.body.appendChild(portalBody);
    return portalBody;
  }
};

/**
 * function used to access sub Component Ref(DOM obj)
 * @param {*} Comp Components to use ref
 * @param {*} props props to inject into Components
 * @param {*} forwardRef Ref (createRef or useRef)
 * @returns
 */
export function forwardRefComponent(
  Comp: React.ElementType,
  props: ComponentProps<any>,
  forwardRef: React.RefObject<any>
): JSX.Element {
  const FowardRefComp = React.forwardRef(() => <Comp {...props} forwardRef={forwardRef} />);
  return <FowardRefComp />;
}

/**
 * getBoundingclientReact
 * @param ref useRef
 * @returns
 */
export type ClientRect = {
  top: number;
  bottom: number;
  right: number;
  left: number;
  height: number;
  width: number;
  isAbove: boolean;
};

export const getPosition = (ref: React.RefObject<any>): ClientRect => {
  const rect = ref.current?.getBoundingClientRect() || {
    top: 0,
    left: 0,
    height: 0,
    width: 0,
    bottom: 0,
    right: 0,
  };
  const h = ref.current?.clientHeight as number;
  const isAbove = rect?.top + h / 2 <= window.innerHeight / 2;
  return {
    top: rect?.top,
    bottom: rect?.bottom,
    right: rect?.right,
    left: rect?.left,
    height: rect?.height,
    width: rect?.width,
    isAbove,
  };
};

/**
 * hexCode 6자리 뒤에 붙일 수 있는 불투명도 hexCode를 리턴합니다.
 * @param opacity 불투명도(Number)
 * @returns hexCode
 */
export function getHexOpacity(opacity: number) {
  const alpha = Math.round(opacity * 255);
  const hex = (alpha * 0x10000).toString(16).substring(-2).toUpperCase();
  return hex;
}
