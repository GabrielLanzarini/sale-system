type input = {
    erro?: string
    placeholder: string
    type?: "text" | string
}

export default function NormalInput(props: input) {
    return (
        <div className="flex flex-col relative">
            <input className="bg-inputBg p-5 w-[700px] h-[85px] text-lg rounded-xl" placeholder={props.placeholder} type={props.type} />
            <span className="absolute -bottom-5 text-textErr text-sm rounded-xl w-full">{props.erro}</span>
        </div>
    )
}
