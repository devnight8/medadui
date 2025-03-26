import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const result = await res.json();
  return NextResponse.json(result, { status: 200 });
}

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const res = await fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "POST",
//       body: JSON.stringify(body),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     const resault = await res.json();
//     return NextResponse.json(
//       {
//         message: "adding user",
//         data: resault,
//       },
//       { status: "201" },
//     );
//   } catch (err) {
//     return NextResponse.json(
//       {
//         message: "error in addin user",
//         error: err.message,
//       },
//       { status: "500" },
//     );
//   }
// }
