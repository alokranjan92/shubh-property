# Environment Variables

Use `.env.local` on your computer and Vercel Environment Variables in production.

## PostgreSQL

`DATABASE_URL` is the connection string Prisma uses to connect to PostgreSQL.

Local example:

```txt
postgresql://postgres:postgres@localhost:5432/shubh_properties?schema=public
```

## Clerk

Create a Clerk application, then copy the publishable key and secret key into:

```txt
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
```

## Cloudinary

Copy your Cloudinary cloud name, API key, and API secret into:

```txt
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
```

## Google Maps

Copy your browser API key into:

```txt
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
```
