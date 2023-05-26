import Butoon from "@/components/Button"
import NormalInput from "@/components/inputs/normalInput"
import Model from "@/components/page/Model"

export default function Index() {
    return (
        <Model>
            <div className="h-full grid grid-cols-2 gap-3 ">
                <div className="col-start-1 h-full w-full flex flex-col justify-between">
                    <h1 className="leading-[110px] font-bold text-8xl ">Entre agora para uma<br/> experiência de<br/> compras incrível</h1>
                    <img className="self-center w-1/2" src="/image/inicialPage.svg" alt="" />
                </div>
                <div className="col-start-2 h-full w-full flex justify-end items-center">
                    <div className="h-[500px] w-[700px] flex flex-col justify-between">
                        <h2 className="font-bold text-5xl self-start">
                            Bem-vindo de volta!
                            <br />
                            Por favor realize o seu login
                        </h2>
                        <div className="h-[200px] flex flex-col justify-between">
                            <NormalInput placeholder="Nome de usuário" />
                            <NormalInput type="password" placeholder="Senha" />
                        </div>
                        <Butoon ativo={true}/>
                        <p className=" text-inatiBt">
                            Não possui uma conta?
                            <a className="text-bluePad" href="">
                                {" "}
                                Cadastre-agora!
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </Model>
    )
}
