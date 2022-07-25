import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Typed from 'react-typed'
import { useUrlArr, useUpdateUrlArr } from 'state/status/hooks'
export default function App() {
	const DATE = new Date().getFullYear()
	const [version, setVersion] = useState<string>('Loading...')
	const [text, setText] = useState<string>('')
	// const urlArr = useUrlArr()
	// const UpdateUrlArr = useUpdateUrlArr()

	// ;(() => {
	// 	UpdateUrlArr('bot.biudi.cn')
	// 	console.log(urlArr)
	// })()

	const show = async () => {
		const content = 'bot.biudi.cn'
		let i = 0
		const action = setInterval(() => {
			let str = content.substr(0, i)
			let txt = str
			i++
			if (i > content.length) clearInterval(action)
			setText(txt)
		}, 400)
	}

	;(async () => {
		await axios
			.get('https:/bot.biudi.cn/version')
			.then(res => {
				setVersion(res.data.minVer)
			})
			.catch(err => {
				setVersion('获取不到版本')
			})
	})()
	return (
		<Main>
			<Container>
				<Status>
					Server<a>&nbsp;Currently</a>
					<p>Working!</p>
				</Status>
				<Info>
					https://
					<Typed strings={['bot.biudi.cn']} typeSpeed={200}></Typed>
					{/* {text}
					<Cursor>_</Cursor> */}
					{/* {urlArr.map(item => {
						let url: string = ''
						url += item
						return url
					})} */}
					<Ver>
						<span>{version === '获取不到版本' ? 'Error:' : 'Ver:'}</span>
						&nbsp;<p>{version}</p>
					</Ver>
					<ICP>
						琼ICP备
						<a href='https://beian.miit.gov.cn'>2021000434</a>
						号-5
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
	position: absolute;
	font-size: 54px;
	color: #515151;
	display: block;
	top: 29%;
	right: 45px;
	margin-right: 25px;
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
	bottom: 0;
	right: 6px;
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
