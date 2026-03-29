import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

import dotenv from "dotenv";
dotenv.config();

console.log("> Upstash config starting...");

// create a ratelimiter
let ratelimit;
try {
    console.log("> Creating Redis from env...");
    const redis = Redis.fromEnv();
    console.log("> Redis created, creating Ratelimit...");
    
    ratelimit = new Ratelimit({
        redis: redis,
        limiter: Ratelimit.slidingWindow(100, "60 s"),
    });
    console.log("> Ratelimit initialised successfully.");
} catch (error) {
    console.error("> Error initialising Upstash.");
    console.error("> Error:", error.message);
    throw error;
}

export default ratelimit;
