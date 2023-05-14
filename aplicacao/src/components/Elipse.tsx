type propsElipse = {
    tp: number
    bt: number
}

export default function Elipse(props: propsElipse){
    return(
        <div style={{width: "350px", height: "350px", backgroundColor: "var(--azul-padrao)", position: "absolute", borderRadius: "100%", bottom: -175, left: -175}} />
    )
}