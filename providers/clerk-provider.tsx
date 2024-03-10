import {ClerkProvider} from '@clerk/nextjs'
import '@/app/globals.css'
import {ReactNode} from "react";

export default function AuthProvider({
                                       children,
                                   }: {
    children: ReactNode
}) {
    return (
        <ClerkProvider>
            {children}
        </ClerkProvider>
    )
}