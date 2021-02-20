import React from "react";
import styled from "styled-components";
import Card from "../../components/Cards";
import useData from './useData';
import { images, Random } from '../../assets';

const Container = styled.div`
  margin: 80px;
  display: flex;
`;

const CustomText = styled.p`
  color: ${({ theme }) => theme.textColor};
`;

const ThinnerCard = styled(Card)`
  width: 400px;
`;

const FlexWrapper = styled.div`
  flex: 1;
`;

export default function Criminals() {
  const { loading, data } = useData();

  return (
    <Container>
      {loading ? (
        <CustomText>loading....</CustomText>
      ) : (
          data?.map((i: any, index: number) => (
            <FlexWrapper key={index}>
              <ThinnerCard
                hoverable
                cursorable
                coverImage={images[Random]}
                title={`Name: ${i.firstname} ${i.lastname}`}
                emailText={`Email address: ${i.email}`}
                secondaryText={`Criminal Ranking: ${index === 0 ? "Most-wanted" : index}`}
              />
            </FlexWrapper>
          ))
        )}
    </Container>
  );
};
