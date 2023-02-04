import { useEffect, useState } from "react";

export default function Highlights(props) {

    const [highlights, setHighlights] = useState([]);

    useEffect(() => {

        fetch("/api/highlights.json")
        .then(response => response.json())
        .then(data => setHighlights(data));

    }, []);

    return (
        <main id="highlights">
            <ul>
                {
                    highlights.map((highlight, index) => (
                        <li key={index}>
                            <a href={ highlight.url } onClick={ event => { event.preventDefault(); props.toggleProducts(true); }}>
                                <img src={ highlight.image } alt={ highlight.description } />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </main>
    );
}