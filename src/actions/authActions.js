import * as api from '../api'

export const signIn = (credentials, navigate) => async (dispatch) => {
    try {
        const {data} = await api.signIn(credentials)
        dispatch({type: 'AUTH', payload: data})
        localStorage.setItem('profile', JSON.stringify(data))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const signUp = (credentials,navigate) => async (dispatch) => {
    try {
        const {data} = await api.signUp(credentials)
        dispatch({type: 'AUTH', payload: data})
         localStorage.setItem('profile', JSON.stringify(data))
         navigate('/')
    } catch (error) {
        console.log(error)
    }
}
export const signOut = (navigate) => async (dispatch) => {
    try {
         localStorage.clear()
          dispatch({type: 'AUTH', payload: null})
         navigate('/')
         window.location.reload()
    } catch (error) {
        console.log(error)
    }
}
