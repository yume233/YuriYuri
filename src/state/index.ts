import { configureStore } from '@reduxjs/toolkit'
//[ package ]
import status from './status/slice'
//

//[ 导入 state ]

//=> 启用 state 缓存
// import { save, load } from 'redux-localstorage-simple'
// const PERSISTED_KEYS: string[] = ['config'] //=> 指定要缓存的 state 键名
//=> 导入 Fetch 中间件

const store = configureStore({
	//=> 绑定 state
	reducer: { status }
	//=> 插入缓存 state 中间件
	// middleware: getDefaultMiddleware =>
	// 	getDefaultMiddleware({ thunk: true }).concat(
	// 		save({
	// 			states: PERSISTED_KEYS,
	// 			debounce: 500,
	// 			ignoreStates: ['status']
	// 		})
	// 	),
	// preloadedState: load({ states: PERSISTED_KEYS, disableWarnings: true }) // 配置缓存的 state
})

//=> export State
export default store

//=> 导出 dispatch 和 selector Types
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
