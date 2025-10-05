import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(request) {
    const token = await getToken({ req: request });
    const { pathname } = request.nextUrl;
    const authpage = ['/login', '/register'];
    const routes = ['/', '/product', '/cart', '/brands', '/categories', '/product/:path*'];

    if (!token && routes.includes(pathname)) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    if (token && authpage.includes(pathname)) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/product', '/cart', '/brands', '/categories', '/product/:path*', '/login', '/register'],
}