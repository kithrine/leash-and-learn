// import React, { useState } from 'react';

// function ThemeToggle() {
//   const [theme, setTheme] = useState(getInitialTheme()); 

//   const getInitialTheme = () => {
//     const storedTheme = localStorage.getItem('theme'); 
//   if (storedTheme) return storedTheme; // Use stored theme if available

//   // If no stored theme, respect OS preference:
//   return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//   }

//   return (
//     <div>
//       {/* ...your theme toggle button or switch */}
//       <button onClick={() => setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>

//       {/* Apply the active theme to your app */}
//       <div className={`bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white ${theme}`}> 
//         {/* ...your application content here */}
//       </div>
//     </div>
//   );
// }

// export default ThemeToggle;

import React, { useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme()); 

  return (
    <div>      
      {/* ...your theme toggle button or switch */}        
      <button onClick={() => {  // This is where we place the logic!
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light'); // Update localStorage 
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light'); // Update state and re-render     
      }} >Toggle Theme</button>


      {/* Apply the active theme to your app */}
      <div className={`bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white ${theme}`}> 
        {/* ...your application content here */}
      </div>    
    </div>  
  );

}


function getInitialTheme() { 
  const storedTheme = localStorage.getItem('theme'); 
  if (storedTheme) return storedTheme; // Use stored theme if available

  // If no stored theme, respect OS preference:
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}



export default ThemeToggle; 