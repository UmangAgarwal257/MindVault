import express , {Request , Response} from "express"
import {z} from "zod"
import { ContentModel, LinkModel, UserModel } from "./db";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import mongoose from "mongoose";
import { userMiddleware } from "./middleware";
import { random } from "./utils";

dotenv.config({ path: __dirname + "/../.env" });
const app = express();
const PORT = process.env.PORT || 3000;
const mongourl = process.env.MONGO_URL

app.use(express.json());

app.post("/api/v1/signup", async (req : Request , res : Response) => {
  const requiredBody = z.object({
    username: z.string()
    .min(2, { message: 'Username must be at least 3 characters' })
    .max(20, { message: 'Username must be between 3 and 20 characters' }),

    password: z.string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .max(20, { message: 'Password must be between 6 and 20 characters' })
    .regex(
        /^[A-Za-z\d]+$/,
        { message: "Password must include at least one letter and one digit"}
    )   
  })
  const parsedDataWithSuccess = requiredBody.safeParse(req.body)

  if (!parsedDataWithSuccess.success) {
    res.json({
      message: "Incorrect format",
    });
    return;
  }
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 5);

    await UserModel.create({
      username,
      password: hashedPassword,
    });

    res.json({
      message: "You are signed up",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error during signup",
    });
  }

})

app.post("/api/v1/signin" ,async (req : Request , res : Response) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({
    username: username,
  });

  if (!user) {
    res.status(401).json({
      message: "This user doesn't exist",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      process.env.JWT_USER_PASSWORD!
    );

    res.json({
      token,
    });
  } else {
    res.status(401).json({
      message: "Incorrect credentials",
    });
  }
});

app.post("/api/v1/content" , userMiddleware , async (req  , res)  => {
  const {link , type } = req.body;

  await ContentModel.create({
    link,
    title : req.body.title,
    type,
    //@ts-ignore
    userId : req.userId,
    tags : []
  })

  res.json({
    message : "Content added"
  })

});

app.get("/api/v1/content" ,userMiddleware ,async (req : Request , res : Response) => {
  //@ts-ignore 
  const userId = req.userId;

  const content = await ContentModel.find({
    userId : userId
  }).populate("userId" , "username")

  res.json({
    content
  })

});

app.delete("/api/v1/content" ,userMiddleware, async (req : Request , res : Response) => {
  const contentId = req.body.contentId;
  //@ts-ignore
  const userId = req.userId;

  const result = await ContentModel.deleteMany({
    _id: contentId,
    userId: userId
  });

  if (result.deletedCount > 0) {
    res.json({
      message: "Deleted"
    });
  } else {
    res.status(404).json({
      message: "Content not found or not authorized"
    });
  }
});

app.post("/api/v1/brain/share", userMiddleware, async (req: Request, res: Response) => {
  const {share} = req.body;
  if(share) {
    const existingLink = await LinkModel.findOne({
      //@ts-ignore
      userId : req.userId
    })

    if(existingLink){
      res.json({
        hash : existingLink.hash
      })
      return;
    }

    try {
      const hash = random(12);
      await LinkModel.create({
        //@ts-ignore
        userId: req.userId,
        hash: hash
      });
  
      res.json({
        message: hash
      });
    } catch(error) {
      res.status(500).json({
        message: "Error creating share link"
      });
    }
  } else {
    await LinkModel.deleteOne({
      //@ts-ignore
      userId: req.userId
    });
    res.json({
      message: "Removed link"
    });
  }
});

app.get("/api/v1/brain/:hash" ,async (req : Request , res : Response) => {
  const {hash} = req.params;

  const link = await LinkModel.findOne({
    hash
  })
  
  if(!link){
    res.status(404).json({
      message : "Incorrect link"
    })
    return;
  }

  const content = await ContentModel.find({
    userId : link.userId
  })

  const user = await UserModel.findOne({
     _id : link.userId
  })

  res.json({
    username : user?.username,
    content : content
  })

});

async function main() {
  await mongoose.connect(mongourl!);
  console.log("connected to");

  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:3000`);
  });
}
main();
