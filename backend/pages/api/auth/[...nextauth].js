import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth/next"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"

export default NextAuth({
    secret: process.env.NODE_ENV,
    adapter: MongoDBAdapter(clientPromise),
    
    
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
    ]
})