import { model } from "mongoose"
import { z } from "zod"

//api/v1/user/signup
export const signupSchema = z.object({

    username: z.string().trim(),
    firstName: z.string().trim(),
    lastName: z.string().trim(),
    password: z.string()

})
export const signinSchema = z.object({
    email: z.string(),
    password: z.string()

})
export const updateSchema = z.object({
    username: z.string().optional(),
    password: z.string().optional(),
    email: z.string().optional(),
})

