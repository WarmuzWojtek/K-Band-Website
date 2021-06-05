import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(id, multi) {

  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {

    function updatePosition() {

      const offetSetHeight = window.document.getElementById(id).offsetHeight;
      if (window.pageYOffset > offetSetHeight * multi) {
        setAnimation(true);
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id,multi]);
  return animation;
}