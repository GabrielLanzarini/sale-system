
export default function Model(props: any) {
    return (
        <div className="h-screen w-screen p-20">
            <div className="bg-white h-full">
                {props.children}
            </div>
        </div>
    )
}
