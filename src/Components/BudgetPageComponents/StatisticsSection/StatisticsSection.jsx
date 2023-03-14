import { useSelector } from 'react-redux';
import { deviceSelector } from 'Redux/selectors';
import { UserContainer } from 'Components/UserContainer/UserContainer';
import {
  StatisticsContainer,
  FlexContainer,
  StatisticsDetails,
} from './StatisticsSection.styled';

export const StatisticsSection = () => {
  const smartPhoneDevice = useSelector(deviceSelector);

  return (
    <StatisticsContainer>
      <FlexContainer>
        <StatisticsDetails />
        {!smartPhoneDevice && <UserContainer />}
      </FlexContainer>
    </StatisticsContainer>
  );
};
