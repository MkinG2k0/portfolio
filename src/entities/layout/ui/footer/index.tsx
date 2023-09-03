import { Blur } from 'entities/layout/ui/blur'

import { NAV } from 'shared/constant/nav'

import Link from 'next/link'

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
	return (
		<div className={'relative '}>
			<div
				className={
					'bg-muted w-[100vw] h-[1px] absolute left-[calc((100vw-clamp(10rem,100%,1000px))/2*-1)] top-0 opacity-50'
				}
			></div>

			<div className={'row justify-between pb-14 text-xl pt-14'}>
				<div className={'col '}>MK</div>
				<div className={'row gap-24 flex-wrap'}>
					<div className={'col'}>
						<span className={'font-bold mb-5'}>Links</span>
						<ul className={'text-light-gray col gap-2'}>
							<li>
								<Link className={'font-2xl'} href={NAV.MAIN}>
									About
								</Link>
							</li>
							<li>
								<Link href={NAV.MAIN} legacyBehavior passHref>
									Work
								</Link>
							</li>
							<li>
								<Link href={NAV.MAIN} legacyBehavior passHref>
									Tech Stack
								</Link>
							</li>
							<li>
								<Link href={NAV.MAIN} legacyBehavior passHref>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className={'col'}>
						<span className={'font-bold'}>Elsewhere</span>
						<ul className={'text-light-gray col gap-2'}>
							<li>
								<Link className={'font-2xl'} href={NAV.MAIN}>
									Email
								</Link>
							</li>
							<li>
								<Link href={NAV.MAIN} legacyBehavior passHref>
									GitHub
								</Link>
							</li>
							<li>
								<Link href={NAV.MAIN} legacyBehavior passHref>
									Discord
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
