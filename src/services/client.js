// export const client = createClient(
//   process.env.SUPABASE_KEY,
//   process.env.SUPABASE_URL
// );

// export const checkError = ({ data, error }) => {
//   if (error) throw error;
//   return data;
// };

import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
