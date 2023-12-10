"use server";

import { redirect } from "next/navigation";
import { Tasks } from "./modals";
import { connectToDB } from "./utlis";
import { revalidatePath } from "next/cache";

export const addNewTask = async (prevState, formData) => {
    console.log(formData)
    const { task, date } = Object.fromEntries(formData);
    try {
        connectToDB();

        const newTask = new Tasks({
            task, date
        });

        await newTask.save();
    } catch (err) {
        throw new Error("Failed to create user!");
    }
    revalidatePath("/");
    redirect("/");
};
export const fetchTaks = async (date) => {
    console.log(date,":::::");
    try {
        connectToDB();
        const tasks = await Tasks.find({ date });
        return tasks;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
}