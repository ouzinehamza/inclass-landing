import {
  boolean,
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/** Subjects taught on the marketplace (maths, physique, français, ...). */
export const subjects = pgTable("subjects", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 80 }).notNull().unique(),
  name: varchar("name", { length: 120 }).notNull(),
  icon: varchar("icon", { length: 40 }).notNull().default("book"),
  category: varchar("category", { length: 60 }).notNull().default("Scolaire"),
  learners: integer("learners").notNull().default(0),
  tutorsCount: integer("tutors_count").notNull().default(0),
  popular: boolean("popular").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
});

/** Tutor profiles displayed in the directory. */
export const tutors = pgTable("tutors", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  fullName: varchar("full_name", { length: 120 }).notNull(),
  headline: varchar("headline", { length: 200 }).notNull(),
  bio: text("bio").notNull().default(""),
  city: varchar("city", { length: 80 }).notNull(),
  subjectSlug: varchar("subject_slug", { length: 80 }).notNull(),
  subjectLabel: varchar("subject_label", { length: 120 }).notNull(),
  levels: varchar("levels", { length: 160 }).notNull().default("Collège · Lycée"),
  languages: varchar("languages", { length: 160 }).notNull().default("Arabe · Français"),
  mode: varchar("mode", { length: 30 }).notNull().default("online"),
  pricePerHour: integer("price_per_hour").notNull().default(120),
  rating: numeric("rating", { precision: 2, scale: 1 }).notNull().default("4.9"),
  reviews: integer("reviews").notNull().default(0),
  lessons: integer("lessons").notNull().default(0),
  verified: boolean("verified").notNull().default(true),
  initials: varchar("initials", { length: 4 }).notNull().default("IN"),
});

/** Social proof quotes shown in the carousel. */
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  authorName: varchar("author_name", { length: 120 }).notNull(),
  authorRole: varchar("author_role", { length: 30 }).notNull().default("student"),
  city: varchar("city", { length: 80 }).notNull().default("Casablanca"),
  quote: text("quote").notNull(),
  detail: varchar("detail", { length: 160 }).notNull().default(""),
  rating: integer("rating").notNull().default(5),
  sortOrder: integer("sort_order").notNull().default(0),
});

/** Contact / "trouver un prof" requests coming from the forms. */
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 120 }).notNull(),
  email: varchar("email", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull().default(""),
  city: varchar("city", { length: 80 }).notNull().default(""),
  role: varchar("role", { length: 30 }).notNull().default("student"),
  subject: varchar("subject", { length: 120 }).notNull().default(""),
  message: text("message").notNull().default(""),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

/** Tutor onboarding applications. */
export const tutorApplications = pgTable("tutor_applications", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 120 }).notNull(),
  email: varchar("email", { length: 160 }).notNull(),
  phone: varchar("phone", { length: 40 }).notNull().default(""),
  city: varchar("city", { length: 80 }).notNull().default(""),
  subject: varchar("subject", { length: 120 }).notNull().default(""),
  experienceYears: integer("experience_years").notNull().default(0),
  mode: varchar("mode", { length: 30 }).notNull().default("both"),
  motivation: text("motivation").notNull().default(""),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

/** Blog / resources articles. */
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  title: varchar("title", { length: 200 }).notNull(),
  excerpt: text("excerpt").notNull().default(""),
  body: text("body").notNull().default(""),
  category: varchar("category", { length: 60 }).notNull().default("Conseils"),
  audience: varchar("audience", { length: 30 }).notNull().default("student"),
  author: varchar("author", { length: 120 }).notNull().default("Équipe INCLASS"),
  readMinutes: integer("read_minutes").notNull().default(5),
  cover: varchar("cover", { length: 200 }).notNull().default("/images/banner-resources.jpg"),
  featured: boolean("featured").notNull().default(false),
  publishedAt: timestamp("published_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Article = typeof articles.$inferSelect;

/** Newsletter emails collected in the footer. */
export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 160 }).notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Subject = typeof subjects.$inferSelect;
export type Tutor = typeof tutors.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
