'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const FormSchema2 = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  image_url: z.string(),
});

const CreateReservation = FormSchema.omit({ id: true, date: true });
const UpdateReservation = FormSchema.omit({ id: true, date: true });
const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
const CreateCustomer = FormSchema2.omit({ id: true, date: true })
const UpdateCustomer = FormSchema2.omit({ id: true, date: true })


export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
 
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
 
  try {
    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  // throw new Error('Failed to Delete Invoice');

  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

export async function createCustomer(formData: FormData) {
  
  const img = formData.get('image') ;
  console.log(img);

  let fileName = '';
  if (img instanceof File) {
    fileName =  '/customers/'+ img.name; 
    console.log(fileName);
  };

  const { name, email, image_url } = CreateCustomer.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    image_url: fileName,
  });

  await sql`
    INSERT INTO customers (name, email, image_url)
    VALUES (${name}, ${email}, ${image_url})
  `;

  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
  // Test it out:
  //console.log(rawFormData);
}

export async function updateCustomer(id: string, formData: FormData) {
  const image = formData.get('image') ;
  console.log(image);

  let fileName = '';
  if (image instanceof File) {
    fileName =  '/customers/'+ image.name; 
    console.log(fileName);
  };
  
  const { name, email, image_url } = UpdateCustomer.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    image_url: fileName,
  });
  
  const updateFields = {name, email, image_url};
  if (fileName){
    updateFields.image_url = fileName;
  }
  // try {
  await sql`
    UPDATE customers
    SET name = ${name}, email = ${email}, image_url = ${image_url}
    WHERE id = ${id}
  `;
  // } catch (error) {
  //   return { message: 'Database Error: Failed to Update Customers'}
  // }
  revalidatePath('/dashboard/customers');
  redirect('/dashboard/customers');
}

export async function createReservation(formData: FormData) {
  const { customerId, amount, status } = CreateReservation.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  await sql`
    INSERT INTO reservations (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;

  revalidatePath('/dashboard/reservations');
  redirect('/dashboard/reservations');
  // Test it out:
  //console.log(rawFormData);
}

export async function updateReservation(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateReservation.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  await sql`
    UPDATE reservations
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;

  revalidatePath('/dashboard/reservations');
  redirect('/dashboard/reservations');
}

// export async function deleteReservation(id: string) {
//   await sql`DELETE FROM reservations WHERE id = ${id}`;
//   revalidatePath('/dashboard/reservations');
// }
export async function deleteReservations(id: string) {
  // throw new Error('Failed to Delete Reservations');

  try {
    await sql`DELETE FROM reservations WHERE id = ${id}`;
    revalidatePath('dashboard/reservations');
    return { message: 'Deleted Reservations.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Reservations.' };
  }
}


export async function deleteCustomer(id: string) {
  await sql`DELETE FROM customers WHERE id = ${id}`;
  revalidatePath('/dashboard/customers');
}