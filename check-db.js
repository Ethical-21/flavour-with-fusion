const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const envContent = fs.readFileSync('.env.local', 'utf-8');
const env = {};
envContent.split('\n').forEach(line => {
  const [key, ...values] = line.split('=');
  if (key && values.length > 0) {
    env[key.trim()] = values.join('=').trim();
  }
});

const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);

async function check() {
  const { data, error } = await supabase.from('custom_recipes').select('*');
  console.log("Error:", error);
  console.log("Data count:", data?.length);
  if (data?.length > 0) {
    console.log("First row data type:", Array.isArray(data[0].recipe_data) ? 'Array' : typeof data[0].recipe_data);
    console.log("First row title:", data[0].recipe_data.title);
  }
}
check();
