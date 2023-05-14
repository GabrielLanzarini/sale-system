import { pesquisa } from "./icons/icons"

export default function CaixaPesquisa() {
    return (
        <div className="w-[1000px] h-12 relative">
            <span
                style={{
                    width: "30px",
                    top: "calc(50% - 15px)",
                    right: "10px",
                    position: "absolute",
                    color: " #999999",
                }}
            >
                {pesquisa}
            </span>
            <input
                placeholder="Busque por produtos especificos"
                style={{ backgroundColor: "#EBEBEB" }}
                type="text"
                className="p-4 w-full h-full rounded-xl"
            />
        </div>
    )
}
