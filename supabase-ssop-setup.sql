-- ============================================================
-- WEST END CLEANING SERVICES — SSOP SIGNATURES TABLE
-- Run this ONCE in your Supabase project:
--   Supabase Dashboard → SQL Editor → New query → Paste → Run
-- ============================================================

-- 1. Create the table
create table if not exists public.ssop_signatures (
    id uuid primary key default gen_random_uuid(),
    document_type text not null default 'fire-safety',
    employee_name text,
    phone text,
    status text not null default 'pending',        -- 'pending' | 'signed'
    signature_data text,                            -- base64 PNG of the signature
    signed_at timestamptz,
    created_at timestamptz not null default now(),
    created_by text
);

-- 2. Enable Row Level Security
alter table public.ssop_signatures enable row level security;

-- 3. Allow the app (anon key) to read, create, update and delete requests
--    (same permissive pattern already used by the "reports" table)
drop policy if exists "ssop_anon_select" on public.ssop_signatures;
create policy "ssop_anon_select" on public.ssop_signatures
    for select to anon using (true);

drop policy if exists "ssop_anon_insert" on public.ssop_signatures;
create policy "ssop_anon_insert" on public.ssop_signatures
    for insert to anon with check (true);

drop policy if exists "ssop_anon_update" on public.ssop_signatures;
create policy "ssop_anon_update" on public.ssop_signatures
    for update to anon using (true) with check (true);

drop policy if exists "ssop_anon_delete" on public.ssop_signatures;
create policy "ssop_anon_delete" on public.ssop_signatures
    for delete to anon using (true);

-- 4. Editable document dates (safe to run even if the table already exists)
alter table public.ssop_signatures add column if not exists issue_date date;
alter table public.ssop_signatures add column if not exists review_date date;

-- 5. Helpful indexes
create index if not exists ssop_signatures_created_at_idx on public.ssop_signatures (created_at desc);
create index if not exists ssop_signatures_status_idx on public.ssop_signatures (status);
