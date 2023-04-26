import { useEffect,useState } from "react";

function useVisible(targetId) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetPosition = document.getElementById(targetId).getBoundingClientRect().top + 50 ;
      if (scrollPosition >= targetPosition) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetId]);

  return visible;
}

export default useVisible;