# Supabase Setup Guide

## 🚀 Quick Setup

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" 
3. Create a new organization (if needed)
4. Create a new project:
   - **Name**: `your-website-name`
   - **Database Password**: Generate a strong password
   - **Region**: Choose closest to your users

### 2. Configure Database
1. Go to **SQL Editor** in your Supabase dashboard
2. Copy and paste the content from `supabase/schema.sql`
3. Click **Run** to create all tables and policies

### 3. Get Environment Variables
1. Go to **Settings** → **API** in your Supabase dashboard
2. Copy the following values:
   ```bash
   # Project URL
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   
   # Anon/Public Key
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   
   # Service Role Key (keep secret!)
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

### 4. Update Local Environment
1. Create `.env.local` file in your project root:
   ```bash
   cp .env.example .env.local
   ```
2. Fill in your Supabase credentials

### 5. Test the Integration
1. Start your development server:
   ```bash
   npm run dev
   ```
2. Try subscribing to newsletter on your homepage
3. Check the `newsletter_subscriptions` table in Supabase

## 🗂️ Database Tables

### Core Tables Created:
- **profiles** - User profile information
- **newsletter_subscriptions** - Email newsletter subscriptions
- **contact_submissions** - Contact form submissions
- **articles** - Blog articles/journalism content
- **videos** - Video content
- **podcasts** - Podcast episodes

### Security Features:
- ✅ Row Level Security (RLS) enabled
- ✅ Public access for newsletter/contact forms
- ✅ Admin-only access for content management
- ✅ Automatic timestamp updates

## 🔗 API Endpoints Available

### Newsletter Subscription
```bash
POST /api/newsletter
{
  "email": "user@example.com",
  "type": "journalism" | "ecommerce",
  "source": "website"
}
```

### Contact Form
```bash
POST /api/contact
{
  "name": "User Name",
  "email": "user@example.com",
  "subject": "Inquiry",
  "message": "Your message here",
  "type": "general"
}
```

## 🎯 Next Steps

1. **Test newsletter signup** on your website
2. **Create your first admin user** in Supabase Auth
3. **Set admin flag** in profiles table
4. **Add real content** to articles/videos/podcasts tables
5. **Deploy to Vercel** with environment variables

## 🔐 Security Notes

- **Never commit `.env.local`** to version control
- **Use service role key only on server-side**
- **Anon key is safe for client-side use**
- **RLS policies protect your data**

Your Supabase backend is now ready! 🎉
