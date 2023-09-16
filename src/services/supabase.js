import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://gojhhxxdelsegeolghsb.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvamhoeHhkZWxzZWdlb2xnaHNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0NzQ3NzYsImV4cCI6MjAxMDA1MDc3Nn0.ZnBBGI0niX7wsGQ6nrzwYAiDcuyU5NdkrzKU0yTGisA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
