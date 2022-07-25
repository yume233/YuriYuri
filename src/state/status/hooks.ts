import { useCallback, useMemo } from 'react'
import { AppState } from 'state'
import { useAppDispatch, useAppSelector } from 'state/hooks'
import { updateUrlArr } from './slice'

export function useUrlArr() {
	const state = useAppSelector((state: AppState) => state.status)
	return useMemo(() => state.urlArr, [state])
}

export function useUpdateUrlArr(): (urlArr: string) => void {
	const dispacth = useAppDispatch()

	return useCallback(
		(urlArr: string) => dispacth(updateUrlArr({ status: urlArr })),
		[dispacth]
	)
}
