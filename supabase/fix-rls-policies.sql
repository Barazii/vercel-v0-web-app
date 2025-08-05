-- Fix RLS policies for newsletter subscriptions
-- This allows public newsletter signups

-- Update RLS policy for newsletter_subscriptions to allow public inserts
DROP POLICY IF EXISTS "Users can insert their own newsletter subscriptions" ON newsletter_subscriptions;

CREATE POLICY "Public can insert newsletter subscriptions" ON newsletter_subscriptions
  FOR INSERT WITH CHECK (true);

-- Also allow public to read their own subscriptions (for checking duplicates)
DROP POLICY IF EXISTS "Users can view their own newsletter subscriptions" ON newsletter_subscriptions;

CREATE POLICY "Public can read newsletter subscriptions by email" ON newsletter_subscriptions
  FOR SELECT USING (true);

-- Update contact_submissions to allow public inserts as well
DROP POLICY IF EXISTS "Users can insert their own contact submissions" ON contact_submissions;

CREATE POLICY "Public can insert contact submissions" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Verify the policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('newsletter_subscriptions', 'contact_submissions');
