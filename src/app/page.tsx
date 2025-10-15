'use client'

import dynamic from 'next/dynamic'
import { Hero3D } from '@/src/components/Hero3D'
import { Services } from '@/src/components/Services'
import { Stats } from '@/src/components/Stats'
import { Difference } from '@/src/components/Difference'
import { FAQ } from '@/src/components/FAQ'
import { CTA } from '@/src/components/CTA'
import { Footer } from '@/src/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero3D />
      <Services />
      <Stats />
      <Difference />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}