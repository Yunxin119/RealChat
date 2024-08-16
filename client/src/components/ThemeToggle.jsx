import React, {useEffect} from 'react'

const ThemeToggle = () => {
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
        }
      }, []);

      const toggleHandler = () => {
        const isDarkMode = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
      }
  return (
    <div className="form-control w-44 justify-end">
    <label className="label cursor-pointer">
      <span className="label-text text-gray-400">Dark Mode</span>
      <input type="checkbox" className="toggle toggle-accent" 
        onClick={toggleHandler}
        defaultChecked={localStorage.getItem('theme') === 'dark'}
      />
    </label>
  </div>
  )
}

export default ThemeToggle
