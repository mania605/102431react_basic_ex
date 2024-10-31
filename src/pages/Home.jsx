import { useEffect, useRef, useState } from 'react';
import News from '../components/News';
import Pics from '../components/Pics';
import Visual from '../components/Visual';

export default function Home() {
	const [Scroll, setScroll] = useState(0);
	const ref_wrap = useRef(null);
	const ref_posArr = useRef([]);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	const handleResize = () => {
		ref_posArr.current = [];
		for (const el of ref_wrap.current.children) {
			ref_posArr.current.push(el.offsetTop);
		}
		console.log(ref_posArr.current);
	};
	useEffect(() => {
		handleResize();
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div ref={ref_wrap}>
			<Visual Scroll={Scroll} />
			<News Scroll={Scroll} pos={ref_posArr.current[1]} />
			<Pics />
		</div>
	);
}
