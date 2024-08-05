// middleware.js
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    response.headers.set('next-url', request.url);
    return response;
}
