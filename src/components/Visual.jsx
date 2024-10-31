export default function Visual({ Scroll }) {
	const style_frame = {
		backgroundColor: `rgb(${Scroll >= 200 ? 200 : 170 + Scroll / 10}, ${210 - Scroll / 10}, ${230})`
	};
	const style_h2 = {
		transform: `translateX(${Scroll}px) translateY(${Scroll}px) rotate(${Scroll * 1.5}deg) scale(${1 + Scroll / 400})`,
		opacity: 1 - Scroll / 400
	};

	const style_box1 = {
		transform: `rotateY(${Scroll}deg)`,
		opacity: 1 - Scroll / 800
	};

	return (
		<section className='visual'>
			<h2 style={style_h2}>ALPACO</h2>
			<div style={style_box1} className='box1'></div>
		</section>
	);
}
