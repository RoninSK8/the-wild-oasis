import supabase from './supabase';

export async function getCabins() {
	const { data, error } = await supabase.from('cabins').select('*');
	if (error) {
		throw new Error('cabins could not be loaded');
	}
	return data;
}
