type Headerprops = {
    title:string
}

const Header = (props:Headerprops) => {
    return(
        <>
            <p>this is header {props.title}</p>
        </>
    )
}

export default Header