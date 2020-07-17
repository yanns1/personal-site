import React from "react"
import { Link, PageProps, } from "gatsby"

type Props = {
  location: object;
  title: string;
}

const Layout: React.FC<Props> = ({ location, title, children }) => {

  return (
    <div>
      {children}
    </div>
  )
}

export default Layout
