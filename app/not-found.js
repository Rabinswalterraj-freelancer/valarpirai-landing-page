import React from 'react'


export const metadata = {
    title: 'Not Found',
    description: "Hindu Pooja Products - Wholesale - Kunnamkulam - Saraswathy Pooja",
}


export default function NotFound() {
    return (
        <main className='brand-container h-screen grid place-content-center'>
            <section className='flex justify-center items-center flex-col gap-5'>
                <h1 style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: 'transparent' }} className='text-6xl xl:text-9xl md:text-7xl lg:text-8xl bg-gradient-to-br from-primary via-primary  to-[#300B09]'>Oops!</h1>
                <p className='font-medium text-center'>404 - PAGE NOT FOUND</p>
                <p className='text-center text-[#938E8E] text-sm'>The page you are looking for might have been removed <br />
                    had its name changed or is temporarily unavailable</p>
            </section>
        </main>
    )
}
