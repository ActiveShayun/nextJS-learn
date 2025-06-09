import Link from 'next/link';
import React from 'react';

const NotFound404Page = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center text-center'>
            <div>
                <h2 className='text-red-600 text-2xl'>Page Not Found</h2>
                <Link href={'/'}>Go to Home</Link>
            </div>
        </div>
    );
};

export default NotFound404Page;