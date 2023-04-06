import React from 'react'
import Link from "next/link"
const header = () => {
  return (
    <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
    </div>
  )
}

export default header
