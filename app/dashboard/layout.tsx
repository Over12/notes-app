import Sidebar from '@/components/ui/Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      {children}
    </div>
  )
};
