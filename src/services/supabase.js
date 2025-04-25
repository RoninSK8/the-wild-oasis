import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ykouwoefypiwzzazjrss.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlrb3V3b2VmeXBpd3p6YXpqcnNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NDQwNzYsImV4cCI6MjA2MTEyMDA3Nn0.ksxC1MTARcQnZDni1mlX-tr3iJOQi2iocF1cgbag_f4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
