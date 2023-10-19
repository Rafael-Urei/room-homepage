import path from "path";
import { promises } from "fs";

export async function GET() {
    try{
        const dataPath = path.join(process.cwd(), "app/json"); // Path.join() is used to join paths, you pass the paths and this method join then.
        // Process.cwd() is a method that returns the actual path, so the call path.join(process.cwd(), "app/json" creates a new path.)
    }
}