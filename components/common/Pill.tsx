export default function Pill({ text }: { text: string }) {
  return (
    <span className='bg-primary/60 rounded-md px-3 py-1'>{ text }</span>
  )
};
