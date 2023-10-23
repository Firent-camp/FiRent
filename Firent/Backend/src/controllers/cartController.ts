import { PrismaClient } from "@prisma/client";
import {Request,Response} from 'express'
const prisma =new PrismaClient();

const getAmounts=async(req:Request,res:Response)=>{
    try{
        const amount=await prisma.cart.findMany();
        res.status(200).json(amount)
    }catch(err){
        console.log(err)
        res.send(err)
    }
}
const getAmountByUser=async(req:Request,res:Response)=>{
    try{
        const userDonations=await prisma.cart.findMany({
            where:{
                userId:req.params.id           }
        })
        res.status(200).json(userDonations)
    }catch(err){
        console.log(err);
        res.json(err)
    }
}
const AddAmount=async(req:Request,res:Response)=>{
    try{
        await prisma.cart.create({
            data:{
                ...req.body
            }
        })
        res.status(200).json("created")
    }catch(err){
        console.log(err);
        res.json(err)
    }
}
export default {
    getAmounts,
    getAmountByUser,
    AddAmount
}