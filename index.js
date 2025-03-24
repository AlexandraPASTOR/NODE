const name = process.env.NAME;
const campus = process.env.CAMPUS;

import { say } from "cowsay";

console.log(say({ text: `Hello I'm ${name} from ${campus}` }));
