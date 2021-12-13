const BlogFooter = () => {
    return (
        <div className='bg-gradient-to-l from-green-soma to-blue-soma'>
            <div className='px-5 mx-auto text-center'>
                <p className='text-lg text-white'>Uma empresa que você pode confiar!</p>
                <p className='text-sm text-white'>© {new Date().getFullYear()} Somasys</p>
            </div>
        </div>
    )
}

export default BlogFooter;