import useWindowsStore from "#store/Windows";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import Draggable from "gsap/Draggable";
import gsap from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin"
gsap.registerPlugin(Draggable,InertiaPlugin)

const WindowWrapper = (Component, window_key) => {
  const wrapped = (props) => {
    const { focusWindow, windows } = useWindowsStore();

    const { isOpen, zIndex } = windows[window_key];
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;
      el.style.display = "block";

      gsap.fromTo(
        el,
        {
          y: 90,
          opacity: 0,
          scale: 0.5,
        },
        {
          scale: 1,
          duration: 0.30,
          y: 0,
          opacity: 1,
          ease:'power3.out'
        },
      );
    }, [isOpen]);

    useGSAP(()=>{
      const elRef = ref.current
      const [instance] = Draggable.create(elRef,
        {type: "x,y",
          inertia: true,
          edgeResistance:0.15,
          throwResistance:500,
          bounds:window,
          zIndexBoost:false
        }
      )

      
      return ()=> instance.kill()
    },[isOpen]
  )
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section id={window_key} style={{ zIndex }} ref={ref}>
        <Component {...props} />
      </section>
    );
  };

  wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`; // for debugging purpose
  return wrapped;
};

export default WindowWrapper;
