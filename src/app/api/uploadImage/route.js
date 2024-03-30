import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import axios from "axios";
export const POST = async (req, res) => {
  const formData = await req.formData();
  console.log(formData);
  const file = formData.get("file");
  const type = formData.get("type");
  //   const itemName = formData.get("itemName");
  //   const smallPrice = formData.get("smallPrice");
  //   const largePrice = formData.get("largePrice");
  //   const desc = formData.get("desc");
  const id = formData.get("id");
  console.log(typeof file, file);
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  try {
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );
    console.log("updating...");
    try {
      const res = await axios.put("http://localhost:3000/api/updateItem", {
        type,
        data: {
          img: filename,
          //   itemName,
          //   smallPrice,
          //   largePrice,
          id,
        },
      });
      console.log(res.data )
    } catch (error) {
      console.log(error.message);
      return NextResponse.json({ Message: "Failed", status: 500 });
    }
    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
