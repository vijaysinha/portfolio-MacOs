import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const rendertext = (text, className,  baseWeight=400)=>{
    
     return [...text].map((char,i)=>{
        return(
          <span key={i} className={className} style={{fontVariationSettings:`"wght ${baseWeight}"`}}>
            {
                (char==='')?'\u00A0':char
            }
        </span>
        )
})
}

const FONT_WEIGHTS = {
    title:{min:100, max:400,default:100},
    subtitle:{min:400, max:900,default:400}
}
const setupTextHover = (container, type)=>{
    if(!container) return;
    const letters = container.querySelectorAll('span');
    const {min, max, default:base} = FONT_WEIGHTS[type]
    const animateLetter = (letter, weight, duration=0.25)=>{
      return gsap.to(letter,{
        duration,
        ease:'power2.out',
        fontVariationSettings:`'wght' ${weight}`
      })
    }

   const handleMouseMove =(event)=>{
    const {left} = container.getBoundingClientRect()
    const mouseX  = event.clientX - left

    letters.forEach((letter)=>{
      const {left:l, width:w} = letter.getBoundingClientRect()
      const distance = Math.abs(mouseX - (l-left + w/2))
      const intensity = Math.exp(-(distance **2)/2000)
      animateLetter(letter,min+(max-min) * intensity)
    })
   } 

   const handlemouseLeave = ()=>{
    letters.forEach((letter)=>{
      animateLetter(letter, base)
    })
      
   }
   container.addEventListener('mousemove', handleMouseMove)
   container.addEventListener('mouseleave', handlemouseLeave)
    
  return ()=>{
    container.removeEventListener('mousemove', handleMouseMove)
    container.removeEventListener('mouseleave', handlemouseLeave)
  }
}



function Welcome() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  useGSAP(()=>{
    setupTextHover(titleRef.current, 'title')
    setupTextHover(subtitleRef.current, 'subtitle')
  },[])
  
  return (
    <section className="container tracking-wide" id="welcome">
      <p ref={subtitleRef}>{rendertext("Hi👋 I'm Vijay. Welcome to my.","text-3xl font-georama",100)}</p>
      <h2  ref={titleRef}>{
    rendertext(
        "portfolio",
        "text-9xl font-georama",
        100
    )
    }</h2>
      <div className="small-screen">
        <p>This Portfolio is designed for desktop/Tablet screens only.</p>
      </div>
    </section>
  );
}

export default Welcome;
