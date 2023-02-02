export default function Navbar() {

    return (
        <nav>
            <h1>
                <a href="/">
                    <img src="https://cache.dominos.com/olo/6.102.5/assets/build/images/img/dpz-logo.svg" alt="Domino's Pizza" />
                </a>
            </h1>
            <ul>
                <li><a href="/pt/pages/order/">Encomenda Online</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Promoções</a></li>
                <li><a href="/">Lojas</a></li>
                <li><a href="/">Segue o teu Pedido</a></li>
                <li><a href="/">Franchising</a></li>
                <li className="login"><a href="/">Faz Login</a></li>
                <li className="cart"><a href="/">Carrinho</a></li>
            </ul>
        </nav>
    );
}

