import ExpertiseSection from '@/components/expertise';

export const metadata = {
  title: 'Expertise - Tennis Training',
  description: 'Comprehensive tennis training programs for everyone',
};

export default function ExpertisePage() {
  return (
    <main className="w-full">
      <ExpertiseSection />
    </main>
  );
}