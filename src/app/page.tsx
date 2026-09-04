import { getSubjects, getTestimonials, getTutors } from "@/lib/data";
import HomeView from "@/components/home/home-view";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [subjects, testimonials, tutors] = await Promise.all([
    getSubjects(),
    getTestimonials(),
    getTutors({ limit: 6 }),
  ]);

  return (
    <HomeView
      subjects={subjects}
      testimonials={testimonials}
      tutors={tutors}
    />
  );
}
