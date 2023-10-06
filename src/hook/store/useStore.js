import { ReactReduxContext } from 'react-redux'
import { useContext, useEffect, useState } from 'react'

const useStore = () => {
  const { store } = useContext(ReactReduxContext)
  const { getState, dispatch: mapDispatchToProps, subscribe } = store
  const [mapStateToProps, setStoreState] = useState(getState())

  useEffect(() => {
    subscribe(() => {
      setStoreState(getState())
    })
  }, [])

  return [mapStateToProps, mapDispatchToProps]
}

export { useStore }
