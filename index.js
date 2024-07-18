import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basePath =
  "C:\\Users\\shuva\\OneDrive\\Desktop\\React Stuff\\clear-the-clutter";

let files = await fs.readdir(basePath);
console.log(files);

for (const file of files) 
{
  let ext = file.split(".")[file.split(".").length - 1];

  if (ext != "js" && ext != "json" && file.split(".").length > 1) 
    {
        if (fsn.existsSync(path.join(basePath, ext))) 
        {
        // Move the file to this folder
            fs.rename(path.join(basePath, file), path.join(basePath, ext, file));
        } 

        else 
        {
            fsn.mkdirSync(ext);
            fs.rename(path.join(basePath, file), path.join(basePath, ext, file));
        }
    }
}
