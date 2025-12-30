import DeleteDataButton from '@/components/common/DeleteDataButton'
import ModeSection from '@/components/common/ModeSection'
import StyleSection from '@/components/common/StyleSection'

export default function Page() {
  return (
    <main className='p-10'>
      <h2 className='font-rubik text-2xl font-bold mb-2'>Personalización</h2>
      <div className='flex gap-5'>
        <StyleSection />
        <ModeSection />
      </div>
      <h2 className='font-rubik text-2xl font-bold mt-7 mb-2'>Datos</h2>
      <DeleteDataButton />
    </main>
  )
};
