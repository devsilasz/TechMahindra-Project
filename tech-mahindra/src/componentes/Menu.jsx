import BarraPesquisa from "./BarraPesquisa"
import Links from "./Links"

function Menu(){

    return(
        <>
            <nav>
                <BarraPesquisa/>
                <a class="link-forms" href="pages/login.html">Entrar</a>
                <Links/>
            </nav>
        </>
    )
}

export default Menu