type propsInput = {
    title: string
    errorMessage?: string
    placeholder: string
    type?: string
}

export default function InputTitulo(props: propsInput) {
    return (
        <div className={`h-28 flex-col grid relative bg-red-200 outline outline-black`}>
            <label style={{ fontWeight: "500" }} className="absolute top-0">
                {props.title}
            </label>

            <input  
                style={{backgroundColor: "var(--input-background)"}}
                type={props.type}
                className="p-5 rounded-lg self-center"
                placeholder={props.placeholder}
            />

            <span style={{color: `var(--text-error)`}} className="absolute bottom-0 "
            >{props.errorMessage}</span>
        </div>
    )
}
