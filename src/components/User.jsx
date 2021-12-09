import React from 'react'

export default function User() {
    const user = localStorage.getItem("user");
    return (
        <div>
            Bienvenido {user}
        </div>
    )
}
