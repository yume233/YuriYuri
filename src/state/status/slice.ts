import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type statusState = {
	urlArr: string[] // 页面载入状态
	Count: number
}
export const initialState: statusState = {
	Count: 0,
	urlArr: []
}

export const statusSlice = createSlice({
	name: 'status', //=> State name | '一般为 state 名字'
	initialState,
	reducers: {
		updateUrlArr: (state, action: PayloadAction<{ status: string }>) => {
			const { status } = action.payload
			status.split('').forEach(item => {
				setTimeout(() => {
					state.urlArr.push(item), 500
				})
			})
		}
	}
})

export const { updateUrlArr } = statusSlice.actions
export default statusSlice.reducer
