import { useState, createContext, useContext, useEffect, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react'

export interface Size {
	width: number,
	height: number
}

export const WindowSizeContext = createContext({width: 0, height: 0})

export const WindowSizeProvider = (props: { children: ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal }) => {
	const [windowSize, setWindowSize] = useState<Size>({
		width: 800,
		height: 800,
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