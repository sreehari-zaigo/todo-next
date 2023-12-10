import Image from "next/image"
import { MdDeleteForever } from "react-icons/md"

const List = ({title}) => {
    return (
        <div className='text-gray-300 flex justify-between items-center mb-4'>
            <div className='flex gap-3'>
                <Image src="https://to-do-list-app-airu.vercel.app/static/media/circle.53799321.svg" alt='img' height={20} width={20} />
                <span className='text-lg'>{title}</span>
            </div>
            <div className='text-red-500 text-xl'>
                <MdDeleteForever />
            </div>
        </div>
    )
}

export default List