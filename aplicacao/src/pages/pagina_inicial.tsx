import CaixaPesquisa from "@/components/CaixaPesquisa"

export default function cadastro() {
    return (
        <div>
            <header className="flex justify-center my-5 relative">
                <CaixaPesquisa />
            </header>
            <div className="w-screen h-screen justify-center">
                <h1 className="my-14 font-bold text-7xl text-center">
                    Produtos disponíveis para venda
                </h1>
            </div>
        </div>
    )
}
