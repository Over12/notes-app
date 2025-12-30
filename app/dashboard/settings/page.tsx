import ModeSection from '@/components/common/ModeSection'
import StyleSection from '@/components/common/StyleSection'

export default function Page() {
  return (
    <main className='p-10'>
      <h2 className='font-rubik text-2xl font-bold'>Personalización</h2>
      <div className='mt-2 flex gap-5'>
        <StyleSection />
        <ModeSection />
      </div>
    </main>
  )
};
