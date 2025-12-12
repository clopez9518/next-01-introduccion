
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Page",
    description: "About Page",
    keywords: ["About Page", "About", "Page"],
}


export default function AboutPage() {
    return (
        <>
            <span className="text-3xl">About Page</span>
        </>
    )
}

