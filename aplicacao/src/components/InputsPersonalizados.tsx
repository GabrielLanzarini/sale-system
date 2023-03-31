type propsInput = {
    title?: string
    errorMessage?: string
    placeholder: string
    // type: string
}

export default function InputsPersonalizados(props: propsInput) {
    return (
        <div
            className={`${
                props.title == undefined ? "h-24" : "h-28"
            } flex-col flex w-fit justify-end relative`}
        >
            <label style={{ fontWeight: "500" }} className="">
                {props.title}
            </label>
            <input
                style={{ backgroundColor: "var(--input-background)" }}
                type="text"
                className="p-5 w-[521px] rounded-lg"
                placeholder={props.placeholder}
            />
            <h1
                style={{ color: "var(--text-error)" }}
                className="text-sm absolute -bottom-5"
            >
                {props.errorMessage}
            </h1>
        </div>
    )
}
