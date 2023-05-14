import InputSTitulo from "@/components/InputSTitulo"
import Botao from "@/components/Botao"
import Elipse from "@/components/Elipse"

export default function index() {
    return (
        <div className="w-screen h-screen px-40 py-28 grid grid-cols-2 relative">
            <Elipse/>
            
            <div className="col-start-1 flex flex-col justify-center">
                <h1 className="font-bold text-7xl leading-tight">
                    Entre agora para uma experiência de compras incrível!
                </h1>
                <img src="image/site/startPage.png" className="w-1/2" />
            </div>
            <div className="col-start-2 flex flex-col justify-center items-end">
                <div className="w-fit grid">
                    <h1 className="font-bold text-4xl leading-tight my-5">
                        Bem-vindo de volta! <br /> Por favor realize o seu login
                    </h1>

                    <InputSTitulo
                        placeholder="Nome de Usuário"
                        errorMessage=""
                    />

                    <InputSTitulo
                        placeholder="Senha"
                        type="password"
                        errorMessage=""
                    />


                    <Botao ativo={false} title={"Login"} />

                    <hr className="my-5 w-3/4 place-self-center" />

                    <span className="text-center">
                        Não possui uma conta?{" "}
                        <a style={{ color: `var(--azul-padrao)` }} href="">
                            Cadastre-se agora
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}
