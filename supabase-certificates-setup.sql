-- ============================================================
-- WEST END CLEANING SERVICES — UHUB TRAINING CERTIFICATES
-- Run this ONCE in your Supabase project:
--   Supabase Dashboard → SQL Editor → New query → Paste → Run
-- ============================================================

-- 1. Employees that can receive certificates
create table if not exists public.certificate_employees (
    id uuid primary key default gen_random_uuid(),
    full_name text not null,
    active boolean not null default true,
    created_at timestamptz not null default now()
);

alter table public.certificate_employees enable row level security;

drop policy if exists "cert_emp_anon_select" on public.certificate_employees;
create policy "cert_emp_anon_select" on public.certificate_employees
    for select to anon using (true);

drop policy if exists "cert_emp_anon_insert" on public.certificate_employees;
create policy "cert_emp_anon_insert" on public.certificate_employees
    for insert to anon with check (true);

drop policy if exists "cert_emp_anon_update" on public.certificate_employees;
create policy "cert_emp_anon_update" on public.certificate_employees
    for update to anon using (true) with check (true);

drop policy if exists "cert_emp_anon_delete" on public.certificate_employees;
create policy "cert_emp_anon_delete" on public.certificate_employees
    for delete to anon using (true);

-- 2. Issued certificates (one row per employee per certificate type)
create table if not exists public.training_certificates (
    id uuid primary key default gen_random_uuid(),
    employee_id uuid references public.certificate_employees(id) on delete cascade,
    employee_name text not null,
    certificate_type text not null,          -- 'induction' | 'induction_refresh' | 'core' | 'advanced' | 'slips_trips_falls'
    certificate_title text not null,         -- e.g. 'Induction Training'
    training_date date not null,             -- "Assessed and Passed on this day"
    carried_out_at text not null default 'West End Cleaning Services',
    created_at timestamptz not null default now(),
    created_by text
);

alter table public.training_certificates enable row level security;

drop policy if exists "training_cert_anon_select" on public.training_certificates;
create policy "training_cert_anon_select" on public.training_certificates
    for select to anon using (true);

drop policy if exists "training_cert_anon_insert" on public.training_certificates;
create policy "training_cert_anon_insert" on public.training_certificates
    for insert to anon with check (true);

drop policy if exists "training_cert_anon_update" on public.training_certificates;
create policy "training_cert_anon_update" on public.training_certificates
    for update to anon using (true) with check (true);

drop policy if exists "training_cert_anon_delete" on public.training_certificates;
create policy "training_cert_anon_delete" on public.training_certificates
    for delete to anon using (true);

-- 3. Helpful indexes
create index if not exists training_certificates_created_at_idx on public.training_certificates (created_at desc);
create index if not exists training_certificates_employee_idx on public.training_certificates (employee_id);
create index if not exists certificate_employees_name_idx on public.certificate_employees (full_name);
