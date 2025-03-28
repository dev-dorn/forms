//server actions
'use server';

import { revalidateTag } from "next/cache";

export async function  submitComment(formData :FormData){
const name = formData.get('name') as string;
const email = formData.get('email') as string;
const password = formData.get('password') as string;
 await postComment(comment);
 await postMessage(email);

 revalidateTag ('comments');
}