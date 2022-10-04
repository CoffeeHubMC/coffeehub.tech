import React from "react";

export default function Homepage() {
    return <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <article className="prose max-w-screen-xl prose-slate">
            <h1 style={{marginBottom: "0"}}>Minecraft Development</h1>
            <p className={"lead"} style={{marginTop: "0.5em"}}>Dev community creating plugins and backends for minecraft
                servers.</p>
            <p className={"mb-0"}>Now the team consists of only one person:</p>
            <ul className={"m-0"}>
                <li>
                    <div className="flex inline align-middle items-center space-x-2 mt-0 mb-0">
                        <p>TheSeems</p>
                        <p>-</p>
                        <p>Alexey</p>
                        <p>-</p>
                        <p><a href={"//theseems.ru"}>website</a></p>
                        <p>-</p>
                        <p>Java/Kotlin Developer</p>
                    </div>
                </li>
            </ul>
            <p>Feel free to get in touch via Discord (top-right corner)</p>
        </article>
    </div>
}