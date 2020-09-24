import { Request, Response } from 'express';
import db from '../database/connection';

export default class UsersController{
    async index(request: Request, response: Response){
        const trx = await db.transaction();
           
        try{
            const listagem = await trx('users').select('*');

            await trx.commit();

            return response.json(listagem);
        }catch{
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
    async create(request: Request, response: Response) {
        const {
            name,
            phone,
            email
        } = request.body;
    
        const trx = await db.transaction();
    
        try{
            await trx('users').insert({
                name,
                phone,
                email
            });
    
            await trx.commit();
    
            return response.status(201).send();
        }catch(err){
            await trx.rollback();
    
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
    async delete(request: Request, response: Response){
        const trx = await db.transaction();
        try{
            const {id} = request.params;
            await trx('users').where({id: id}).delete();
            await trx.commit();
            return response.status(201).send();
        }catch{
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
    async edit(request: Request, response: Response){
        const trx = await db.transaction();
        try{
            const {id} = request.params;
            const {
                name,
                phone,
                email
            } = request.body;
            await trx('users').where({id: id}).update({
                name,
                phone,
                email
            })
            await trx.commit();
            return response.status(201).send();
        }catch{
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
}