import React from "react"
import { Link } from "react-router-dom"

export default function Purchase() {
    return (
        <>
            <h1 className="purchase">Thank You For Your Purchase!</h1>
            <Link className="return-after-purchase" to={"/"}>Return to home</Link>
        </>
    )
}