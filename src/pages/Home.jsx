//import Layout from '../components/Layout';
//레이아웃 지우고 visual, news, pics 만들기
import { useEffect, useState } from 'react';
import News from '../components/News';
import Pics from '../components/Pics';
import Visual from '../components/Visual';


export default function Home() {
	const [Scroll, setScroll] = useState(0);
	console.log(Scroll);
	const handleScroll = () => {
		setScroll(window.scrollY);
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	//윈도우 스크롤시 현재 스크롤되는 거리값을 Scroll상태값에 담아주는 함수 생성
	//해당 함수를 윈도우 스크롤이벤트 연결
	//컴포넌트 언마운트시 스크롤이벤트 해제
	//비주얼 컴포넌트에 스크롤값 전달
	//Visual안쪽에서 전달되는 Scroll값을 h2요소 원하는 스타일 구문에 연동
	return (
		<>
			<Visual Scroll={Scroll} />
			<News />
			<Pics />
		</>