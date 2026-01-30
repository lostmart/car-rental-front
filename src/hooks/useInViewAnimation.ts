import { useState, useEffect, useRef, RefObject } from "react"

interface UseInViewAnimationOptions {
	threshold?: number // Percentage of element visibility to trigger (0-1)
	rootMargin?: string // Margin around root element
	triggerOnce?: boolean // Whether to trigger animation only once
	delay?: number // Delay in milliseconds before triggering animation
}

interface InViewResult {
	ref: RefObject<HTMLElement>
	isInView: boolean
	hasBeenInView: boolean
}

/**
 * Custom hook to detect when an element enters the viewport
 * Useful for scroll-triggered animations and lazy loading
 *
 * @param options - Configuration options for the Intersection Observer
 * @returns Object containing ref to attach to element, current visibility state, and history
 *
 * @example
 * ```tsx
 * const { ref, isInView } = useInViewAnimation({ threshold: 0.3, triggerOnce: true })
 *
 * return (
 *   <div
 *     ref={ref}
 *     className={isInView ? 'animate-fade-in' : 'opacity-0'}
 *   >
 *     Content
 *   </div>
 * )
 * ```
 */
export default function useInViewAnimation(
	options: UseInViewAnimationOptions = {}
): InViewResult {
	const {
		threshold = 0.1,
		rootMargin = "0px",
		triggerOnce = false,
		delay = 0,
	} = options

	const ref = useRef<HTMLElement>(null)
	const [isInView, setIsInView] = useState(false)
	const [hasBeenInView, setHasBeenInView] = useState(false)

	useEffect(() => {
		const element = ref.current
		if (!element) return

		// Check if IntersectionObserver is supported
		if (!("IntersectionObserver" in window)) {
			setIsInView(true)
			setHasBeenInView(true)
			return
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const inView = entry.isIntersecting

					if (delay > 0 && inView) {
						setTimeout(() => {
							setIsInView(true)
							setHasBeenInView(true)
						}, delay)
					} else {
						setIsInView(inView)
						if (inView) {
							setHasBeenInView(true)
						}
					}

					// Stop observing if triggerOnce is true and element has been in view
					if (triggerOnce && inView) {
						observer.unobserve(element)
					}
				})
			},
			{
				threshold,
				rootMargin,
			}
		)

		observer.observe(element)

		return () => {
			if (element) {
				observer.unobserve(element)
			}
		}
	}, [threshold, rootMargin, triggerOnce, delay])

	return {
		ref,
		isInView: triggerOnce ? hasBeenInView : isInView,
		hasBeenInView,
	}
}
