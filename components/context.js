import { useState, createContext, useContext, useEffect } from 'react'

export const WindowSizeContext = createContext({})

export const WindowSizeProvider = (props) => {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []); // empty array ensures effect is only run on inital render
	
    return (
        <WindowSizeContext.Provider value={windowSize}>
          {props.children}
        </WindowSizeContext.Provider>
      )
}

export function useWindowSizeContext() {
    return useContext(WindowSizeContext)
  }