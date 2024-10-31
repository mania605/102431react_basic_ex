//import Layout from '../components/Layout';
//레이아웃 지우고 visual, news, pics 만들기
import Visual from './components/visual';
import News from './components/news';
import Pics from './components/pics';

export default function Home() {
	return (
		<>
			<Visual />
			<News />
			<Pics />
		</>
	);
}
