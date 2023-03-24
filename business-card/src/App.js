import React from "react"
import Footer from "./components/Footer"
import Image from "./components/Image"
import Main from "./components/Main"

export default function App() {
    return (
        <div className="container">
        <div className="card-container">
            <Image />
            <Main />
            <Footer />
        </div>
        </div>
    )
}