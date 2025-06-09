import { NextResponse } from 'next/server'


// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log('pathname what', request.nextUrl.pathname.startsWith('/services')
    );

    let isServicesPages = request.nextUrl.pathname.startsWith('/services');
    let userRole = {
        'role': 'admin',
        'email': 'admin@gmail.com'
    }
    let role = userRole.role === 'admin'
    if (isServicesPages && !role) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next();
}

