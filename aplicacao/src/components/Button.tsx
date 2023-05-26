type buttonProps = {
    ativo?: "false" | boolean

}

export default function Butoon(props: buttonProps) {
    function buttonEvent() {
        console.log("funcionadno")
    }
    return props.ativo ? (
        <button
            onClick={buttonEvent}
            className="transition-all duration-300 hover:drop-shadow-button bg-bluePad h-[85px] rounded-xl text-2xl font-bold text-white"
        >
            Login
        </button>
    ) : (
        <button className="bg-inatiBt h-[85px] rounded-xl text-2xl font-bold text-white">Login</button>
    )
}
