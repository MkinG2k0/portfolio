import { CSSProperties } from 'react'

import Image from 'next/image'

export const Blur = ({ className }: { className?: string }) => {
	return (
		<svg className={`absolute w-full blur-[80px] ${className}`} viewBox={'0 0 2800 500'}>
			<ellipse cx={'1000'} cy={'40'} fill={'rgba(63, 100, 233, 0.43)'} rx={'600'} ry={'170'} />
			<ellipse cx={'1500'} cy={'100'} fill={'rgba(233, 63, 63, 0.43)'} rx={'600'} ry={'260'} />
			<ellipse cx={'1900'} cy={'0'} fill={'rgba(255, 184, 0, 0.43)'} rx={'600'} ry={'138'} />
		</svg>
	)
}

// blur-2xl
