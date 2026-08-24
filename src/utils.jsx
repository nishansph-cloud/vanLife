// import { redirect} from "react-router-dom"

// export async function requiredAuth() {
//     const isLoggedIn = true
    
//     if (!isLoggedIn) {
//         // Mirage's patched Response doesn't set `.body`, which breaks 
//         // React Router's redirect detection (it checks typeof body !== 'undefined').
//         // Manually setting it here works around that.
//         const response = redirect("/login?message=you must login first!")
//         response.body = true
//         throw response
//     }
//     return null
// }


// after setting localStorage
import { redirect} from "react-router-dom"

export async function requiredAuth(request) {
    const isLoggedIn = (localStorage.getItem("loggedin") === "true")
    
    if (!isLoggedIn) {
        // Mirage's patched Response doesn't set `.body`, which breaks 
        // React Router's redirect detection (it checks typeof body !== 'undefined').
        // Manually setting it here works around that.
        const pathName = request ? new URL(request.url).pathname : "/host"
        const response = redirect(`/login?message=you must login first!&redirectto=${pathName}`)
        response.body = true
        throw response
    }
    return null
}
