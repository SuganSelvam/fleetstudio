
export default function PageLoader() {
    return (
        <div className='my-32 flex flex-col items-center justify-center bg-white dark:bg-gray-900'>
            <div className='w-full max-w-md space-y-4 text-center'>
                <div className='animate-pulse'>
                    <h1 className='text-3xl font-bold text-gray-800 dark:text-gray-100'>Loading...</h1>
                    <p className='text-gray-600 dark:text-gray-400'>Fetching data from our servers, please wait.</p>
                </div>
                <div className='flex justify-center space-x-4'>
                    <div className='h-4 w-20 bg-slate-200' />
                    <div className='h-4 w-20 bg-slate-200' />
                    <div className='h-4 w-20 bg-slate-200' />
                </div>
            </div>
        </div>
    );
}
