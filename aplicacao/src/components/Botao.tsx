import style from "../styles/botaoStyle.module.css"

type propsBotao = {
    title: String
    ativo: boolean
}

export default function Botao(props: propsBotao) {
    return (
        <div>
            <button
                className={`${
                    props.ativo ? style.ativo : style.inativo
                } transition-all p-5 rounded-lg w-full text-white`}
            >
                {props.title}
            </button>
        </div>
    )
}
