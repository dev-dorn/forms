//server actions
/*'use server';

import { revalidateTag } from "next/cache";

export async function  Login(formData :FormData){
const name = formData.get('name') as string;
const email = formData.get('email') as string;
const password = formData.get('password') as string;
 await postMessage(name);
 await postMessage(email);

 revalidateTag ('comments');
}
*/
'use server'
import {z} from 'zod';


const feedbackSchema =z.object({
    name:z.string().min(2).max(100),
    email:z.string().email(),
    feedback: z.string().min(10).max(1000),

});

export async function submitFeedback(_: unknown, formData: FormData){
    const formValues ={
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        feedback: formData.get('feedback') as string,
    };
    const {success, error, data }= feedbackSchema.safeParse(formValues);
if (!success){
    return{
        errors:error.flatten().fieldErrors,
        values: formValues,

    };
}
// Do something with data
console.log(data);

return { 
    success:true,
};


}
