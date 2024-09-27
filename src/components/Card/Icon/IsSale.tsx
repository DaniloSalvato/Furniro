import React from "react"

type SaleProps = {
    children:React.ReactNode
}

const IsSale = ({children}:SaleProps) => {
  return (
    <div className="absolute top-5 right-5 h-12 w-12 text-white  bg-customRed-500 rounded-full  flex items-center justify-center">
            <p>{children}</p>
          </div>
  )
}

export default IsSale