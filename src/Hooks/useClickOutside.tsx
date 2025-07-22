import { useEffect, RefObject } from 'react';

type Handler = () => void;

const useClickOutside = (
  refs: RefObject<HTMLElement> | RefObject<HTMLElement>[],
  handler: Handler,
  buttonRefs?: RefObject<HTMLElement> | RefObject<HTMLElement>[]
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const refsArray = Array.isArray(refs) ? refs : [refs];
      const buttonRefsArray = buttonRefs ? (Array.isArray(buttonRefs) ? buttonRefs : [buttonRefs]) : [];

      const isOutsideRefs = refsArray.every(ref => ref.current && !ref.current.contains(target));
      const isOutsideButtonRefs = buttonRefsArray.every(ref => ref.current && !ref.current.contains(target));

      if (isOutsideRefs && isOutsideButtonRefs) {
        setTimeout(() => handler(), 150); // Small delay
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, handler, buttonRefs]);
};

export default useClickOutside;
