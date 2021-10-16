import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { AccessTokenContext } from "../context/LoginContext"


const SmartReroute = () => {
    
    const token = useContext(AccessTokenContext).accessToken
    const history = useHistory();
    useEffect(() => {
        if (token === "") {
            history.push("/login")
        }
        else {
            history.push("/feed")
        }
    })
    
    return (
        <>
        LOADING
        </>
    )
}

export default SmartReroute
