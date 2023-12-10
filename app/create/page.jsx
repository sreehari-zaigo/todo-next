"use client"
import { useFormState } from "react-dom";
import { addNewTask } from "../lib/action";
// import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";
import Input from "@/components/Input";
const createTodo = () => {
    const [state, formAction] = useFormState(addNewTask, undefined);
    return (
        <div className="h-screen w-full flex items-center justify-center  font-sans bg-slate-900">
            <div className="px-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <form action={formAction}>
                    <div className="mb-8 flex justify-between">
                        <h1 className="text-4xl font-bold text-white">ADD TASK</h1><Link href="/" className="font-semibold text-gray-400 place-self-end">Back to list</Link>
                    </div>
                    <Input type="text" placeholder="What to do?" name="task" />
                    <Input type="date" placeholder="What the date?" name="date" />
                    <div className="w-full lg:max-w-lg">
                        <button type="submit" className="bg-indigo-600 text-white text-sm leading-6  w-full font-medium py-2 px-3 rounded">ADD</button>
                    </div>
                    {state && state}
                </form>
            </div>
        </div>
    )
}

export default createTodo; 