import { useState, useEffect } from "react"

interface ScrollPosition {
	x: number
	y: number
	isScrollingDown: boolean
	isAtTop: boolean
	isAtBottom: boolean
}

interface UseScrollPositionOptions {
	threshold?: number // Threshold in pixels for detecting scroll direction changes
}

/**
 * Custom hook to track scroll position and direction
 * Useful for sticky headers, scroll-to-top buttons, and scroll-based animations
 *
 * @param options - Configuration options for the hook
 * @returns Object containing scroll position, direction, and position flags
 *
 * @example
 * ```tsx
 * const { y, isScrollingDown, isAtTop } = useScrollPosition({ threshold: 10 })
 *
 * // Use for sticky header
 * <header className={isScrollingDown && !isAtTop ? 'hidden' : 'visible'}>
 * ```
 */
export default function useScrollPosition(
	options: UseScrollPositionOptions = {}
): ScrollPosition {
	const { threshold = 0 } = options

	const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
		x: 0,
		y: 0,
		isScrollingDown: false,
		isAtTop: true,
		isAtBottom: false,
	})

	useEffect(() => {
		let lastScrollY = window.scrollY
		let ticking = false

		const updateScrollPosition = () => {
			const scrollY = window.scrollY
			const scrollX = window.scrollX
			const isScrollingDown = scrollY > lastScrollY + threshold
			const isAtTop = scrollY <= 10
			const isAtBottom =
				window.innerHeight + scrollY >=
				document.documentElement.scrollHeight - 10

			setScrollPosition({
				x: scrollX,
				y: scrollY,
				isScrollingDown,
				isAtTop,
				isAtBottom,
			})

			lastScrollY = scrollY
			ticking = false
		}

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollPosition)
				ticking = true
			}
		}

		// Set initial position
		updateScrollPosition()

		window.addEventListener("scroll", handleScroll, { passive: true })

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [threshold])

	return scrollPosition
}
