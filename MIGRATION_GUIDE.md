# Next.js Migration Guide

This project has been migrated from Vite + React Router to Next.js 15 (latest stable version) with App Router.

**Note:** Next.js 16 is not yet released. This migration uses Next.js 15.1.0, which is the latest stable version and includes all modern features.

## Key Changes Made

1. **Package.json**: Updated to Next.js 15 dependencies
2. **Configuration**: Created `next.config.js` and updated `tailwind.config.js`
3. **App Directory**: Created `app/` directory with App Router structure
4. **Components**: Updated all components to use `next/link` instead of `react-router-dom`
5. **Images**: Moved to `public/assets/` and updated paths

## Remaining Tasks

### Pages to Convert

The following pages still need to be converted from React Router to Next.js:

1. **Contact Page**: `app/contact/page.jsx`
2. **Certifications**: `app/certifications/page.jsx`
3. **Projects**: `app/projects/page.jsx`
4. **Policies**: 
   - `app/policies/ohs/page.jsx`
   - `app/policies/quality/page.jsx`
5. **Services** (8 pages):
   - `app/services/well-services/page.jsx`
   - `app/services/corrosion-management/page.jsx`
   - `app/services/pipeline-construction/page.jsx`
   - `app/services/inspection/page.jsx`
   - `app/services/technical-manpower/page.jsx`
   - `app/services/facilities-management/page.jsx`
   - `app/services/procurement/page.jsx`
   - `app/services/civil-engineering/page.jsx`
6. **Products**: `app/products/page.jsx`
7. **Partners** (24 pages):
   - All partner pages in `app/partners/[partner-name]/page.jsx`

### Conversion Pattern

For each page, follow this pattern:

1. **Add 'use client' directive** at the top (for client components)
2. **Replace imports**:
   ```jsx
   // OLD
   import { Link, useLocation, useSearchParams } from 'react-router-dom';
   
   // NEW
   import Link from 'next/link';
   import { usePathname, useSearchParams } from 'next/navigation';
   ```
3. **Update Link components**:
   ```jsx
   // OLD
   <Link to="/path">Text</Link>
   
   // NEW
   <Link href="/path">Text</Link>
   ```
4. **Update hooks**:
   ```jsx
   // OLD
   const location = useLocation();
   const [searchParams] = useSearchParams();
   
   // NEW
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const tab = searchParams.get('tab');
   ```
5. **Update image imports**:
   ```jsx
   // OLD
   import image from '../../assets/images/image.jpg';
   
   // NEW
   const image = '/assets/images/image.jpg';
   ```
6. **Export default function** instead of `const Component = () => {}`:
   ```jsx
   // OLD
   const AboutPage = () => { ... };
   export default AboutPage;
   
   // NEW
   export default function AboutPage() { ... }
   ```

### Special Cases

**Pages using useSearchParams for tabs:**
- These pages need special handling for query parameters
- Use `useSearchParams()` from `next/navigation`
- Access params with `searchParams.get('tab')`

**Banner Component:**
- Already converted to use static image array instead of `import.meta.glob`

## Next Steps

1. Run `npm install` to install Next.js dependencies
2. Convert remaining pages using the pattern above
3. Test all routes
4. Remove Vite-specific files (`vite.config.js`, `index.html` in root)
5. Update any remaining image imports
6. Test the build: `npm run build`

## Running the Project

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:3000`

## Important Note

**Next.js 16 is not yet released.** This migration uses **Next.js 15.1.0**, which is the latest stable version. When Next.js 16 is released, you can upgrade by running:

```bash
npm install next@latest react@latest react-dom@latest
```

