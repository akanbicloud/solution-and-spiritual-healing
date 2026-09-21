export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  text: string;
  approved: boolean;
}

// Strictly no fabricated testimonials. Only approved entries are displayed.
export const fallbackTestimonials: Testimonial[] = [];

export function getApprovedTestimonials(): Testimonial[] {
  return fallbackTestimonials.filter((t) => t.approved);
}
