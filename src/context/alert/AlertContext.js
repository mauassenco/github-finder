import { createContext, useReducer, React } from "react"
import alertReducer from "./AlertReducer"

const AlertContext = createContext()
// eslint-disable-next-line react/prop-types
export const AlertProvider = ({ children }) => {
  const initialState = null

  const [state, dispatch] = useReducer(alertReducer, initialState)

  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    })

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000)
  }

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext
