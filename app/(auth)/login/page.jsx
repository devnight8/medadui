import LoginPage from "@/components/template/LoginPage"
export const metadata = {
    title: 'ورود به مداد یوای',
    description: 'صفحه ورود در سایت مداد یوای',
}


function Login() {

    return (
        <section className='flex items-center justify-center h-screen'>
            <LoginPage />
        </section>

    )
}

export default Login
