import { useState } from "react"
import { Container } from "react-bootstrap"


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <Container>
            ah yes display some login stuff here
        </Container>
    )
}

export default Login;