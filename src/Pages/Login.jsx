// import React from "react"
// import { useLoaderData, useNavigate } from "react-router-dom"
// import { loginUser } from "../api"

// export function loader({ request }) {
//     return new URL(request.url).searchParams.get("message")
// }

// export default function Login() {
//     const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })

//     const [status, setStatus] = React.useState("idle")

//     const [error, setError] = React.useState(null)

//     const message = useLoaderData()

//     const navigate = useNavigate()

//     function handleSubmit(e) {
//         e.preventDefault()
//         setStatus("submitting")
//         setError(null)
//         loginUser(loginFormData)
//             .then(data => {
//                 navigate("/host", {replace: true})
//                 //if user and pass is correct, navigate to /host
//                 //replace: true means if user clicks back button in browser then they will go back to the page they were on before they clicked login icon
//                 //redirect can be used outside of cmponent eg:in loader fxn but useNavigation cannot be
//             })
//             .catch(err => setError(err) )
//             .finally(() => setStatus("idle"))
//     }

//     function handleChange(e) {
//         const { name, value } = e.target
//         setLoginFormData(prev => ({
//             ...prev,
//             [name]: value
//         }))
//     }

//     return (
//         <div className="login-container">
//             <h1>Sign in to your account</h1>
            
//             {message && <h1 className="red" >{message}</h1>}
            
//             {error && <h1 className="red">{error.message}</h1>}
            
//             <form onSubmit={handleSubmit} className="login-form">
//                 <input
//                     name="email"
//                     onChange={handleChange}
//                     type="email"
//                     placeholder="Email address"
//                     value={loginFormData.email}
//                 />
                
//                 <input
//                     name="password"
//                     onChange={handleChange}
//                     type="password"
//                     placeholder="Password"
//                     value={loginFormData.password}
//                 />
                
//                 <button
//                     disabled={status === "submitting"}
//                 >
//                     {status === "submitting" 
//                         ? "logging in..." 
//                         : "Log in"}
//                 </button>
            
//             </form>
//         </div>
//     )

// }



// using Form (react-router) & action to make life easier
import { 
    Form, 
    useLoaderData, 
    useNavigate,
    //UseNavigate: forceful navigate from one page to another
    // useNavigate: lets you navigate programmatically (via code, not a user clicking a <Link>) 
    // — e.g. after a successful action, in an event handler, or inside a useEffect.
    useNavigation, 
    // useNavigation: tells you whether the router is currently idle, loading (a loader is running), 
    // or submitting (an action is running) — useful for showing pending UI like "logging in...".    
    redirect,
    useActionData 
} from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action( { request } ) {
    const redirectTo = new URL(request.url).searchParams.get("redirectto")
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try{
        
        const data = await loginUser({email, password})
        localStorage.setItem("loggedin","true")
        // throw redirect("/host") AGAIN we can't do this because of mirrage server
        // so we have to hard code .body = true, in order to make it work
        const response = redirect(redirectTo ? redirectTo : "/host")
        response.body = true
        return response    
    
    }catch(err) {

        return err.message
    }
}

export default function Login() {

    const message = useLoaderData()
    
    const errorMessage = useActionData()

    const navigation = useNavigation()
    //navigate and navigation are two different thing
    //navigation is used to find out current state of current navigation during loading or action on Form submit
    // useNavigation holds an object { state: ... } — its value changes to "submitting", "loading", or "idle" depending on whether a Form is submitting, a loader is loading, or nothing is happening.
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            
            {message && <h1 className="red" >{message}</h1>}
            
            {errorMessage && <h1 className="red">{errorMessage}</h1>}
            
            <Form 
                method="post" 
                replace
                // here replace is used so that login form can be deleted from history stack
                // replace in Form works fine since, login can be considered as navigation as well 
                className="login-form"
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                
                <button
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting" 
                        ? "logging in..." 
                        : "Log in"}
                </button>
            
            </Form>
        </div>
    )

}