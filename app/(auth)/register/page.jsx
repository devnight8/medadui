import RegisterPage from '@/components/template/RegisterPage'

export const metadata = {
    title: 'ثبت نام در مداد یوای',
    description: 'صفحه ثبت نام در مداد یوای',
}



function register() {

    return (
        <section className='flex items-center justify-center h-screen'>
            <RegisterPage />
        </section>
    )
}

export default register
