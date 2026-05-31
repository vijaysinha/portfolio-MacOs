import { useRef } from "react";
import { dockApps } from "#constants";
import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Dock = () => {
  const dockRef = useRef(null);

  useGSAP(() => {
    const dock = dockRef.current;
     
    if (!dock) return;
    const icons = dock.querySelectorAll(".dock-icon");
    gsap.from(icons,{
      y:80,
      opacity:0,
      duration:0.4,
      stagger:0.109,
      delay:0.8
    },0)
   

    const iconAnim = (icon, intensity) => {
      return gsap.to(icon, {
        duration: 0.25,
        scale: 1 + 0.5 * intensity,
        y: -15 * intensity,
        ease: "power2.out",
      });
    };

    const resetIcons = (icon) => {
      return gsap.to(icon, {
        y: 0,
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const animateIcons = (mouseX) => {
      const { left: l, width } = dock.getBoundingClientRect();
      mouseX = mouseX - l;
      icons.forEach((icon) => {
        const { left: iconLeft, width: w } = icon.getBoundingClientRect();
        const distance = Math.abs(mouseX - (iconLeft - l + w / 2));
        const intensity = Math.exp(-(distance ** 2.0) / 2000);
        iconAnim(icon, intensity);
      });
    };
    dock.addEventListener("mousemove", () => animateIcons(event.clientX));
    dock.addEventListener("mouseleave", () => {icons.forEach(resetIcons)});

    return ()=>{
      dock.removeEventListener("mousemove", () => animateIcons(event.clientX))
      dock.removeEventListener("mouseleave", () => {icons.forEach(resetIcons)})
    }
  }, []);
  const toggleApp = ({ id, canOpen }) => {};
  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center ">
            <button
              className="dock-icon"
              type="button"
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}
      </div>
      <Tooltip id="dock-tooltip" className="tooltip" />
    </section>
  );
};

export default Dock;
