import InputsPersonalizados from "@/components/InputsPersonalizados"

export default function index() {
    return (
        <div className="w-screen h-screen px-40 py-28 grid grid-cols-2">
            <div className="col-start-1 flex flex-col justify-center">
                <h1 className="font-bold text-7xl leading-tight">
                    Entre agora para uma experiência de compras incrível!
                </h1>
                <img src="image/site/startPage.png" className="w-1/2" />
            </div>
            <div className="col-start-2 flex flex-col justify-center items-end">
                <div className="flex flex-col w-fit">
                    <h1 className="font-bold text-4xl">
                        Bem-vindo de volta!
                        <br /> Por favor realize o seu login
                    </h1>
                    <InputsPersonalizados
                        errorMessage="awddaw"
                        placeholder="Nome de usuário"
                    />
                    <InputsPersonalizados placeholder="Senha" />

                    <h1 style={{ color: "#767676" }} className="self-center">
                        Não possui uma conta?{" "}
                        <a
                            href=""
                            style={{
                                color: "var(--azul-padrao)",
                                fontWeight: "500",
                            }}
                        >
                            cadastre-se agora!
                        </a>
                    </h1>
                </div>
            </div>
        </div>
    )
}
