"use client"

export default function Error({ error, reset }) {
    return (
        <div>
            This are not loading up: {error.message}
            <button onClick={()=> reset()}>Reload</button>
        </div>
    )
}