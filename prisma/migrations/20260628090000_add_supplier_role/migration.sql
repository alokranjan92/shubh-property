-- Add Supplier role for construction material and home decor seller accounts.
ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS 'SUPPLIER';
