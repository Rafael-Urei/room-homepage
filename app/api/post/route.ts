import path from "path";
import { promises } from "fs";

export async function GET() {
  try {
    const dataPath = path.join(process.cwd(), "app/json"); // Path.join() is used to join paths, you pass the paths and this method join then.
    // Process.cwd() is a method that returns the actual path, so the call path.join(process.cwd(), "app/json") creates a new path.
    const [homePageContents, aboutPageContent] = await Promise.all([
      promises.readFile(`${dataPath}/entries.json`, "utf8"),
      promises.readFile(`${dataPath}/about.json`, "utf8"),
    ]);
    const parsedHomePageContents = JSON.parse(homePageContents); // Parse to JSON format.
    const parsedHomePageAbout = JSON.parse(aboutPageContent);

    const responseBody = JSON.stringify({
      // Convert to  JSON string.
      posts: parsedHomePageContents,
      about: parsedHomePageAbout,
    });

    return new Response(responseBody, {
      // Body of the response.
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch {
    return new Response("Internal Server Error", { status: 500 }); // Error return.
  }
}
