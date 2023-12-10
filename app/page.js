import Datescroller from '@/components/Datescroller';
import List from '@/components/List';
import Plus from '@/components/Plus';
import Image from 'next/image'
import Link from 'next/link';
import { fetchTaks } from './lib/action';


export default async function Home({ searchParams }) {
  const q = searchParams?.q || "";
  let tasklist = await fetchTaks(q)
  return (
    <div className="h-screen w-full flex items-center justify-center  font-sans bg-slate-900 relative">
      <div className="px-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">T O D O</h1>
          <Image src="https://to-do-list-app-airu.vercel.app/static/media/icon-sun.910b1f9a.svg" alt='img' height={20} width={20} />
        </div>
        <div className="mb-8">
          <h1 className="text-3xl  text-white">Hello</h1>
          <div className='flex justify-between'>
            <h1 className="text-4xl font-bold text-white">Sreehari</h1>
            <div className='hidden sm:block'>
              <Link href="/create" className="hover:bg-blue-400 group flex items-center rounded bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
                <Plus />
                New
              </Link>
            </div>
          </div>
        </div>
        <div className='datepicker-div mb-6'>
          <Datescroller />
        </div>
        <div className="bg-slate-800 rounded shadow p-6 pb-2">
          {tasklist.length > 0 ? (
            tasklist.map((tk) => <List key={tk.id} title={tk.task} />)
          ) : (
            <p className='text-center text-white'>No tasks.</p>
          )}
        </div>

      </div>
      <div className="absolute inset-x-0 bottom-5 h-16 text-white flex items-center justify-center lg:hidden">
        <Link href="/create" className='bg-blue-500 transition-all duration-500 text-white w-16 h-16 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center cursor-pointer'>
          <Plus />
        </Link>
      </div>
    </div>
  )
}
