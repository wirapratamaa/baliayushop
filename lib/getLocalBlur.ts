import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export default async function getLocalBlur(src: string) {
  try {
    const file = await fs.readFile(`/public/assets/bed-linen/1.jpg`);
    const { base64 } = await getPlaiceholder(file);

    console.log(base64);
  } catch (err) {
    console.log(err);
    err;
  }
}
