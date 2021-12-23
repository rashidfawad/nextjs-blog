import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const basicAuth = req.headers.get('authorization');

    if (basicAuth) {
        const auth = basicAuth.split(' ')[1];
        const [user, pass] = Buffer.from(auth, 'base64').toString().split(':');

        if (user === '4admin' && pass === 'ahilkhan') {
            return NextResponse.next();
        }
    }

    return new Response('Auth required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
        }
    });
}