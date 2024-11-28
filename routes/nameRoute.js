import { Router } from "express";
import { ageLegal, createName, deleteAges5, getName, nameDelete, updateName } from "../controller/nameController.js";


const nameRouter = Router()


nameRouter.get('/', getName)

nameRouter.post('/', createName);

nameRouter.patch('/:_id', updateName);


nameRouter.get('/legal-age', ageLegal)  //to filter ages over 18 years

nameRouter.delete('/:_id', nameDelete)//to delete a particular id 


nameRouter.delete('/:_id', deleteAges5)
export default nameRouter






