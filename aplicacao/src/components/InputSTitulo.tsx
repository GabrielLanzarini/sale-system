type propsInput = {
    errorMessage?: string
    placeholder: string
    type?: string
}

export default function InputSTitulo(props: propsInput) {
    return (
        <div className={`h-24 flex-col grid relative`}>
            <input  
                style={{backgroundColor: "var(--input-background)"}}
                type={props.type}
                className="p-5 rounded-lg self-start"
                placeholder={props.placeholder}
            />

            <span style={{color: `var(--text-error)`}} className="absolute bottom-0 "
            >{props.errorMessage}</span>
        </div>
    )
}
