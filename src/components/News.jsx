export default function News({ Scroll, pos }) {
	console.log(pos);
	const style_h2 = {
		left: Scroll - pos || 0
	};

	return (
		<section className='news'>
			<h2 style={style_h2}>POST</h2>
			<h3>INFORMATION</h3>

			<article></article>
			<article></article>
			<article></article>
		</section>
	);
}
