import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();


export const createComment = async (req:Request, res:Response) => {
    try {
        const { content, authorId, threadId } = req.body;
        const comment = await prisma.comment.create({
            data: {
                content,
                authorId,
                threadId
            },
        });
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const getCommentsByThreadId = async (req:Request, res:Response) => {
    try {
        const { threadId } = req.params;
        const comments = await prisma.comment.findMany({
            where: { threadId: parseInt(threadId) },
            include: { author: true },
        });
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const updateComment = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const { content } = req.body;
        const updatedComment = await prisma.comment.update({
            where: { id: parseInt(id) },
            data: { content },
        });
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const deleteComment = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;
        await prisma.comment.delete({
            where: { id: parseInt(id) },
        });
        res.status(200).json({ message: "Comment deleted successfully." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};