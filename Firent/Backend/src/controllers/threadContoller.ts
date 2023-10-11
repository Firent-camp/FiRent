import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();


export const createThread = async (req: Request, res:Response) => {
    try {
        const { title, content, authorId } = req.body;
        const thread = await prisma.thread.create({
            data: {
                title,
                content,
                authorId
            },
        });
        res.status(201).json(thread);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const getAllThreads = async (req :Request, res:Response) => {
    try {
        const threads = await prisma.thread.findMany({
            include: {
                author: true,
            },
        });
        res.status(200).json(threads);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const getThreadById = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const thread = await prisma.thread.findUnique({
            where: { id: parseInt(id) },
            include: { author: true },
        });
        if (!thread) return res.status(404).json({ error: "Thread not found" });
        res.status(200).json(thread);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateThread = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const updatedThread = await prisma.thread.update({
            where: { id: parseInt(id) },
            data: { title, content },
        });
        res.status(200).json(updatedThread);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const deleteThread = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        await prisma.thread.delete({
            where: { id: parseInt(id) },
        });
        res.status(200).json({ message: "Thread deleted successfully." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

