import CabinRow from './CabinRow';
import Spinner from '../../ui/Spinner';
import { useCabins } from './useCabins';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';

export default function CabinTable() {
	const { isLoading, cabins } = useCabins();
	const [searchParams] = useSearchParams();

	const filterValue = searchParams.get('discount') || 'all';

	let filteredCabins;
	switch (filterValue) {
		case 'all':
			filteredCabins = cabins;
			break;
		case 'no-discount':
			filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
			break;
		case 'with-discount':
			filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
			break;
		default:
			throw new Error('Wrong filter value');
	}

	if (isLoading) {
		return <Spinner />;
	}
	return (
		<Menus>
			<Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
				<Table.Header role={'row'}>
					<div></div>
					<div>Cabin</div>
					<div>Capacity</div>
					<div>Price</div>
					<div>Discount</div>
					<div></div>
				</Table.Header>
				{filteredCabins.map((cabin) => (
					<CabinRow cabin={cabin} key={cabin.id} />
				))}
			</Table>
		</Menus>
	);
}
