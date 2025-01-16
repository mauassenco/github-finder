import { React, useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"

const Alert = () => {
  const { alert } = useContext(AlertContext)
  return (
    <div
      className={`mb-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2`}
      style={{ visibility: alert ? "visible" : "hidden" }}
    >
      <div className="alert alert-error">
        <div className="flex">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="mr-3 h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            ></path>
          </svg>
          <p className="leading- flex-1 text-base font-semibold">
            {alert?.msg}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Alert
