import InputSTitulo from "@/components/InputSTitulo"
import Elipse from "@/components/Elipse"
import Botao from "@/components/Botao"

export default function cadastro() {
    return (
        <div className="w-screen h-screen px-40 py-28 relative flex flex-col items-center justify-center">
            <Elipse />

            <h1 className="my-14 font-bold text-7xl text-center">
                Realize o seu cadastro!
            </h1>

            <div className=" grid grid-cols-2 center gap-4" >
                <div style={{width: "533.33px"}}>
                <InputSTitulo placeholder="Nome" />
                <InputSTitulo placeholder="Sobrenome" />
                <InputSTitulo placeholder="CPF" />
                </div>

                <div style={{width: "533.33px"}}>
                <InputSTitulo placeholder="E-mail" /> 
                <InputSTitulo placeholder="Nome de usuário" /> 
                <InputSTitulo placeholder="Senha" /> 
                </div>
            </div>
            <Botao ativo={false} title="Cadastrar"/>


            <span className="text-center my-5">
                        Já possui uma conta?{" "}
                        <a style={{ color: `var(--azul-padrao)` }} href="">
                            Realize o seu login!
                        </a>
                    </span>
        </div>
    )
}
