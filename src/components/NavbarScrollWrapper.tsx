"use client";

import { useState, useEffect, useRef } from 'react';

export function NavbarScrollWrapper({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && (window.scrollY > (navbarRef.current.offsetHeight / 2))) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsVisible(!(window.scrollY > (navbarRef.current.offsetHeight / 2)));
  }, []);

  return (
    <>
      <div className='h-16'></div>
      <div ref={navbarRef} className={`${isVisible ? 'translate-y-0' : '-translate-y-16'} fixed top-0 inset-x-0 z-50 transition-all duration-300`}>
        {children}
      </div>
    </>
  );
}
