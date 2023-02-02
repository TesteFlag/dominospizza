export default function Highlights() {

    const highlights = [
        {
            image: "https://cache.dominos.com/wam/prod/market/PT/_pt/images/promo/1e650d66-b3f6-4210-9d3a-bc2813d2f1d2.png",
            url: "https://www.dominospizza.pt/pt/pages/order/?couponCode_0=PT000155&partnerCode=DOMINOS&so=hp&panelname=&panelnumber=",
            description: "50% DESCONTO PIZZA 2ª A 5º"
        },
        {
            image: "https://cache.dominos.com/wam/prod/market/PT/_pt/images/promo/f970e8e5-1cf1-4865-901f-3a09c1c12c51.png",
            url: "https://www.dominospizza.pt/pt/pages/order/?couponCode_0=PT000276&partnerCode=DOMINOS&so=hp&panelname=&panelnumber=",
            description: "Pizza Média + Lata MANDA VIR | 9,95€"
        },
        {
            image: "https://cache.dominos.com/wam/prod/market/PT/_pt/images/promo/10bceb3f-ed60-4de7-8e97-24c04183fcaf.png",
            url: "https://www.dominospizza.pt/pt/pages/order/?couponCode_0=PT000348&partnerCode=DOMINOS&so=hp&panelname=&panelnumber=",
            description: "1 Pizza A Maior + 1 Acompanhamento ou Sobremesa | 17,95€"
        },
        {
            image: "https://cache.dominos.com/wam/prod/market/PT/_pt/images/promo/cc4fa4e4-9942-44bc-a53f-db35fde21b78.png",
            url: "https://www.dominospizza.pt/pt/pages/order/?couponCode_0=PT000349&partnerCode=DOMINOS&so=hp&panelname=&panelnumber=",
            description: "Menu FINAL FOUR 21,95€"
        }
    ];

    return (
        <main id="highlights">
            <ul>
                {
                    highlights.map((highlight, index) => (
                        <li key={index}>
                            <a href={ highlight.url }>
                                <img src={ highlight.image } alt={ highlight.description } />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </main>
    );
}