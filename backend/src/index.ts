import express from "express"
import {z} from "zod"
import filesystem from "fs/promises"

const server = express();
server.use(express.json());

const RegisteredUserSchema = z.object({
    email: z.string(),
    password: z.string()
});

server.get("/api/registration", async (req, res) => {
    const result = RegisteredUserSchema.safeParse(req.query)
    if(!result.success) {
        return res.status(400).json(result.error.issues);
    }
    const users = await readFile()
    if (users === null) {
        res.sendStatus(500)
        return
    }
});

server.post('/api/registration', async (req, res) => {
    try {
        const result = RegisteredUserSchema.safeParse(req.body)
        if(!result.success) {
            res.status(400).json(result.error.issues)
        }
        res.status(200).json({msg: 'Sikeres regisztráció!'})
    } catch(error) {
        res.sendStatus(500)
    }
    const users = await readFile()
    if (users === null) {
        res.sendStatus(500)
        return
    }
    await filesystem.writeFile(
        `${__dirname}/../database.json`,
        JSON.stringify(users, null, 2)
    )
});

server.delete('/api/registration/:id', async (req, res) => {
    try {
        const result = RegisteredUserSchema.safeParse(req.body)
        if(!result.success) {
            res.status(400).json(result.error.issues)
        }
    } catch(error) {
        res.sendStatus(500)
    }
});

server.patch('/api/registration/:id', async (req, res) => {
    try {
        const result = RegisteredUserSchema.safeParse(req.body)
        if(!result.success) {
            res.status(400).json(result.error.issues)
        }
    } catch(error) {
        res.sendStatus(500)
    }
});

server.listen(3001)




function validatePasswordConfirmation(confirmPassword: any) {
    throw new Error("Function not implemented.");
}
function readFile() {
    throw new Error("Function not implemented.");
}

