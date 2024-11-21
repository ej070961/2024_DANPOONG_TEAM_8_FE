import { useQuery } from '@tanstack/react-query';
import { getCompletedMissions, getOnGoingMissions } from '../apis/mission.ts';

export const useFetchMissions = (type: string) => {
  if (type === 'onGoing') {
    return useQuery({
      queryKey: ['ongoingMissions'],
      queryFn: () => getOnGoingMissions(),
    });
  } else if (type === 'completed') {
    return useQuery({
      queryKey: ['completedMissions'],
      queryFn: () => getCompletedMissions().then((res) => res.missions),
    });
  }
}
