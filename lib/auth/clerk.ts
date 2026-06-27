export function hasValidClerkKeys() {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const secretKey = process.env.CLERK_SECRET_KEY;

  return Boolean(
    publishableKey &&
      secretKey &&
      !publishableKey.includes("replace_with_your_key") &&
      !secretKey.includes("replace_with_your_key")
  );
}
