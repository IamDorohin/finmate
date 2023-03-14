import { useSelector } from 'react-redux';
import { deviceSelector } from 'Redux/selectors';
import { PageContainer } from 'Components/Common/PageContainer.styled';
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
      <PageContainer>
        <FlexContainer>
          <StatisticsDetails />
          {!smartPhoneDevice && <UserContainer />}
        </FlexContainer>
      </PageContainer>
    </StatisticsContainer>
  );
};
