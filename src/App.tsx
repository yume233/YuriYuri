import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Typed from 'react-typed'
import bg from 'assets/image/bg.png'
export default function App() {
	const DATE = new Date().getFullYear()
	const [version, setVersion] = useState<string>('Loading...')
	const node = useRef<HTMLElement>(null) as any

	useEffect(() => {
		// ;(async () => {
		// 	await axios
		// 		.get('https:/domain.com/api/version')
		// 		.then(res => {
		// 			setVersion(res.data.minVer)
		// 		})
		// 		.catch(err => {
		// 			setVersion('获取不到版本')
		// 		})
		// })()
		setVersion('0.1.0-f17e959')
	}, [node])

	return (
		<Main>
			<Container>
				<Status>
					Server<a>&nbsp;Currently</a>
					<p>Working!</p>
				</Status>
				<Info>
					<Ver>
						<span ref={node}>
							{version === '获取不到版本' ? 'Error:' : 'Ver:'}
						</span>
						&nbsp;<p>{version}</p>
					</Ver>
					<div>
						https://
						<Typed strings={['test.domain.cn']} typeSpeed={200}></Typed>
						{/* {text}
					<Cursor>_</Cursor> */}
						{/* {urlArr.map(item => {
						let url: string = ''
						url += item
						return url
					})} */}
					</div>

					<ICP>
						萌ICP备
						<a href='https://beian.miit.gov.cn'>20220912</a>号
					</ICP>
				</Info>
			</Container>
			<Footer>
				<p>
					2018-{DATE} <a href='mailto:umia@umia.moe'>Umia</a>@Aeterna Star Riant
					Observation Station/永恒星轨观测所
				</p>
			</Footer>
		</Main>
	)
}
const Main = styled.main`
	background-image: url(${bg});
	background-repeat: no-repeat;
	background-size: cover;
	width: 100vw;
	height: 100vh;
	align-items: center;
	justify-content: flex-end;
	display: flex;
	margin: 0;
	padding: 0;
	@media (max-width: 720px) {
		justify-content: center;
	}
	span {
		color: #515151;
	}
`
const Status = styled.div`
	color: #ff9956;
	a:first-child {
		color: #515151;
	}
	p {
		margin-top: -10px;
		color: #515151;
	}
`
const ICP = styled.div`
	color: #515151;
	a {
		color: #66ccff;
		margin: 0 4px 0 4px;
	}
`
const Ver = styled.div`
	align-items: center;
	justify-content: center;
	display: flex;
	p {
		color: #43e092ea;
	}
	span {
		color: #515151;
	}
`
const Info = styled.div`
	@media (max-width: 720px) {
		font-size: 29px;
		margin-top: 20px;
	}
	color: #ff819d;
	font-size: 35px;
	margin-top: 5px;
`
const Container = styled.div`
	@media (max-width: 720px) {
		right: unset;
		margin-right: unset;
	}

	font-size: 54px;
	color: #515151;
	display: block;
	margin: -8% 2% 0 0;
	text-align: center;
	p {
		text-align: center;
	}
`
const Footer = styled.div`
	@media (max-width: 720px) {
		text-align: end;
	}
	position: absolute;
	align-items: center;
	justify-content: center;
	display: flex;
	bottom: 5px;
	right: 5px;
	a {
		color: #ff819d;
	}
`
const Cursor = styled.span`
	animation: 1.2s van-cursor-flicker infinite;
	@keyframes van-cursor-flicker {
		from {
			opacity: 0;
		}

		50% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}
`
