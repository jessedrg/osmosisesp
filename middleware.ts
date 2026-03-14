import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of old/deprecated URL patterns that should redirect to homepage
const DEPRECATED_PATHS = [
  '/old',
  '/legacy',
  '/temp',
  '/test',
  '/draft',
  '/admin',
  // Add any other old paths here as they come up
]

// List of paths that should have noindex (but still accessible)
const NOINDEX_PATHS = [
  '/preview',
  '/staging',
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if path starts with any deprecated pattern
  const isDeprecated = DEPRECATED_PATHS.some(path => 
    pathname.startsWith(path)
  )

  // Redirect deprecated paths to homepage
  if (isDeprecated) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Check if path should have noindex
  const shouldNoindex = NOINDEX_PATHS.some(path => 
    pathname.startsWith(path)
  )

  // Add noindex header for specific paths
  if (shouldNoindex) {
    const response = NextResponse.next()
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
