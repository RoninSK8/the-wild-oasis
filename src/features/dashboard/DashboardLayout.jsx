import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import TodayActivity from '../check-in-out/TodayActivity';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';
import { useCabins } from '../cabins/useCabins';
import Stats from './Stats';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';

const StyledDashboardLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto 34rem auto;
	gap: 2.4rem;
`;

function DashboardLayout() {
	const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
	const {
		confirmedStays,
		isLoading: isLoadingStays,
		numDays,
	} = useRecentStays();
	const { cabins, isLoading: isLoadingCabins } = useCabins();

	if (isLoadingBookings || isLoadingStays || isLoadingCabins)
		return <Spinner />;

	const cabinCount = cabins.length;
	return (
		<StyledDashboardLayout>
			<Stats
				bookings={bookings}
				confirmedStays={confirmedStays}
				cabinCount={cabinCount}
				numDays={numDays}
			/>
			<TodayActivity />
			<DurationChart confirmedStays={confirmedStays} />
			<SalesChart bookings={bookings} numDays={numDays} />
		</StyledDashboardLayout>
	);
}

export default DashboardLayout;
