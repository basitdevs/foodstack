import { useTheme } from '@mui/material'
import React from 'react'

const CommonIcon = () => {
    const theme = useTheme()
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.2"
                d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                fill="#FF8200"
            />
            <path
                d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
                stroke="#FF8200"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15 15H16V22H17"
                stroke="#FF8200"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16 12C16.8284 12 17.5 11.3284 17.5 10.5C17.5 9.67157 16.8284 9 16 9C15.1716 9 14.5 9.67157 14.5 10.5C14.5 11.3284 15.1716 12 16 12Z"
                fill="#FF8200"
            />
        </svg>
    )
}

export default CommonIcon
