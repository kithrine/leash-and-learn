import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { BsBricks, BsArrowThroughHeart } from "react-icons/bs";
import { HiTrophy } from "react-icons/hi2";
import { FaTools } from "react-icons/fa";
import { RiFocus3Line } from "react-icons/ri";
import { GiSniffingDog, GiDogHouse, GiBalloonDog, GiPartyPopper, GiDogBowl } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { LuDog } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";




const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, triggerOnce: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

const AnimatedListBlogCategories = ({
  items = [
    {
      name: "Foundational Training",
      icon: <BsBricks size={25} />
    },
    {
      name: "Advanced Training",
      icon: <HiTrophy size={25} />
    },
    {
      name: "Training Tools & Techniques",
      icon: <FaTools size={25} />
    },
    {
      name: "Specific Breed Focus",
      icon: <RiFocus3Line size={25} />
    },
    {
      name: "Dog Behavior",
      icon: <GiSniffingDog size={25} />
    },
    {
      name: "Health & Wellness",
      icon: <MdOutlineHealthAndSafety size={25} />
    },
    {
      name: "Dog Care",
      icon: <GiDogHouse size={25} />
    },
    {
      name: "Everything Puppies!",
      icon: <LuDog size={25} />
    },
    {
      name: "Community & Lifestyle",
      icon: <FaPeopleGroup size={25} />
    },
    {
      name: "Fun & Entertainment",
      icon: <GiPartyPopper size={25} />
    },
    {
      name: "DIY",
      icon: <GiBalloonDog size={25} />
    },
    {
      name: "Heartwarming Stories",
      icon: <BsArrowThroughHeart size={25} />
    },
    {
      name: "Products & Reviews",
      icon: <GiDogBowl size={25} />
    },
   
    // 'Foundational Training', 'Advanced Training', 'Training Tools & Techniques', 'Specific Breed Focus', 'Dog Behavior',
    // 'Health & Wellness', 'Dog Care', 'Everything Puppies!', 'Community & Lifestyle', 'Fun & Entertainment',
    // 'DIY', 'Heartwarming Stories', 'Products & Reviews'
  ],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1,
}) => {
  const listRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(
      scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1)
    );
  };

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`);
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth',
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={listRef}
        className={`max-h-[400px] overflow-y-auto p-4 ${
          displayScrollbar
            ? "[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-[#e5e5e5] [&::-webkit-scrollbar-thumb]:bg-[#a3a3a3] dark:[&::-webkit-scrollbar-track]:bg-black dark:[&::-webkit-scrollbar-thumb]:bg-[#222] [&::-webkit-scrollbar-thumb]:rounded-[4px]"
            : "scrollbar-hide"
        }`}
        onScroll={handleScroll}
        // style={{
        //   scrollbarWidth: displayScrollbar ? "thin" : "none",
        //   scrollbarColor: "#222 #060010",
        // }}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            delay={0.1}
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setSelectedIndex(index);
              if (onItemSelect) {
                onItemSelect(item, index);
              }
            }}
          >
            <div className={`p-4 bg-neutral-100 dark:bg-neutral-950 rounded-lg shadow-md shadow-neutral-400 dark:shadow-black ${selectedIndex === index ? 'bg-[#222]' : ''} ${itemClassName}`}>
              <p className="text-neutral-900 dark:text-white font-learn uppercase font-bold tracking-widest text-xl m-0 flex items-center gap-x-3"><span className='text-teal-400 dark:text-lime-400'>{item.icon}</span>{item.name}</p>
            </div>
          </AnimatedItem>
        ))}
      </div>
      {showGradients && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-[#060010] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: topGradientOpacity }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#060010] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: bottomGradientOpacity }}
          ></div>
        </>
      )}
    </div>
  );
};

export default AnimatedListBlogCategories;
