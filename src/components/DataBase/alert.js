import React from "react"

export function Alert({message}) {
    return (
    <div>
        <span variant='danger' >{message}</span>
    </div>
    )
}