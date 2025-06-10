"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const NavBar = () => {
    const router = useRouter();
    const pathName = usePathname();
    console.log(pathName);
    const isLogin = true;
    const handleNavigate = () => {
        if (isLogin) {
            router.push('/about/address')
        } else {
            router.push('/')
        }
    }

    if (!pathName.includes('dashboard')) {
        return (
            <div className='max-w-6xl mx-auto'>
                <ul className='flex justify-between'>
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'/services'}><li>Services</li></Link>
                    <Link href={'/post'}><li>Post</li></Link>
                    <Link href={'/meals'}><li>Meals</li></Link>
                    <p>
                        <Link href={'/about'}><li>Project</li></Link>
                        <Link
                            href={'/about/address'}><li>Address</li>
                        </Link>
                        <button type='button'
                            onClick={handleNavigate}>
                            Address
                        </button>
                    </p>
                </ul>
            </div>
        );
    } else {
        return <> </>
    }

};

export default NavBar;