export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      newsletter_subscriptions: {
        Row: {
          id: string
          email: string
          subscription_type: 'journalism' | 'ecommerce'
          source: string
          subscribed_at: string
          is_active: boolean
          confirmed_at: string | null
          unsubscribed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          subscription_type: 'journalism' | 'ecommerce'
          source?: string
          subscribed_at?: string
          is_active?: boolean
          confirmed_at?: string | null
          unsubscribed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          subscription_type?: 'journalism' | 'ecommerce'
          source?: string
          subscribed_at?: string
          is_active?: boolean
          confirmed_at?: string | null
          unsubscribed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          subject: string
          message: string
          type: string | null
          submitted_at: string
          status: 'new' | 'in_progress' | 'resolved' | 'closed'
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          subject: string
          message: string
          type?: string | null
          submitted_at?: string
          status?: 'new' | 'in_progress' | 'resolved' | 'closed'
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          subject?: string
          message?: string
          type?: string | null
          submitted_at?: string
          status?: 'new' | 'in_progress' | 'resolved' | 'closed'
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          user_id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          website: string | null
          bio: string | null
          location: string | null
          company: string | null
          role: string | null
          is_admin: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
          bio?: string | null
          location?: string | null
          company?: string | null
          role?: string | null
          is_admin?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
          bio?: string | null
          location?: string | null
          company?: string | null
          role?: string | null
          is_admin?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      articles: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string
          content: string
          author_id: string
          published_at: string | null
          featured_image: string | null
          category: string
          tags: string[]
          meta_title: string | null
          meta_description: string | null
          read_time: number
          views: number
          is_published: boolean
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt: string
          content: string
          author_id: string
          published_at?: string | null
          featured_image?: string | null
          category: string
          tags?: string[]
          meta_title?: string | null
          meta_description?: string | null
          read_time?: number
          views?: number
          is_published?: boolean
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string
          content?: string
          author_id?: string
          published_at?: string | null
          featured_image?: string | null
          category?: string
          tags?: string[]
          meta_title?: string | null
          meta_description?: string | null
          read_time?: number
          views?: number
          is_published?: boolean
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "articles_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      videos: {
        Row: {
          id: string
          title: string
          slug: string
          description: string
          video_url: string
          thumbnail_url: string
          duration: string
          category: string
          tags: string[]
          published_at: string | null
          views: number
          is_published: boolean
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          description: string
          video_url: string
          thumbnail_url: string
          duration: string
          category: string
          tags?: string[]
          published_at?: string | null
          views?: number
          is_published?: boolean
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          description?: string
          video_url?: string
          thumbnail_url?: string
          duration?: string
          category?: string
          tags?: string[]
          published_at?: string | null
          views?: number
          is_published?: boolean
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      podcasts: {
        Row: {
          id: string
          title: string
          slug: string
          description: string
          audio_url: string
          image_url: string
          duration: string
          category: string
          tags: string[]
          published_at: string | null
          plays: number
          is_published: boolean
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          description: string
          audio_url: string
          image_url: string
          duration: string
          category: string
          tags?: string[]
          published_at?: string | null
          plays?: number
          is_published?: boolean
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          description?: string
          audio_url?: string
          image_url?: string
          duration?: string
          category?: string
          tags?: string[]
          published_at?: string | null
          plays?: number
          is_published?: boolean
          is_featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
