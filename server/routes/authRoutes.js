import express from 'express'
import registerUser from '../controllers/userController.js'
import login from '../controllers/LoginController.js'
const router = express.Router()
router.post('/register' , registerUser)
router.post('/login' , login)
export default router