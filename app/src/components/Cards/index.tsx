import React from "react";
import styled from "styled-components";

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  secondaryText?: string;
  hoverable?: boolean;
  thumbnailUrl?: string;
  coverImage?: string;
  url?: string;
  style?: React.CSSProperties;
  cursorable?: boolean;
  emailText?: string;
}

const Container = styled.div<ICardProps>`
  box-shadow: 0 0 11px rgba(33,33,33,.2);
  border-radius: 6px;
  cursor: ${({ cursorable }) => cursorable ? 'pointer' : 'unset'};
  background: white;
  background: ${({ theme }) => theme.backgroundColor};
  margin-bottom: 20px;
  &:hover {
    ${({ hoverable }) =>
    hoverable
      ? ` transition: all 1s;
          box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),-5px -5px 30px 15px rgba(0, 0, 0, 0.22);`
      : null}
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 22px;
  color: ${({ theme }) => theme.textColor};
`;

const EmailText = styled.h3`
  margin-top: 5px;
  font-size: 15px;
  color: ${({ theme }) => theme.textColor};
`;
const SecondaryText = styled.h5`
  color: ${({ theme }) => theme.textColor};
  font-size: 15px;
`;

const Thumbnail = styled.div<ICardProps>`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${({ url }) => url});
  background-size: cover;

`;
const TitleBar = styled.div`
  display: flex;
  align-items: center;
`;

const CoverImage = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
`;

const Content = styled.div`
  padding: 20px;
`;

const ChildrenContent = styled.div`
  background: pink;
`;

const Card = ({
  title,
  secondaryText,
  thumbnailUrl,
  coverImage,
  hoverable,
  children,
  cursorable,
  emailText,
  ...props
}: ICardProps) => {
  return (
    <Container
      {...props}
      {...{
        hoverable,
        cursorable,
        title,
        secondaryText,
        thumbnailUrl,
        coverImage,
        ...props
      }}
    >
      {coverImage ? <CoverImage src={coverImage} /> : null}
      <Content>
        <TitleBar>
          {thumbnailUrl ? <Thumbnail url={thumbnailUrl} /> : null}
          <div>
            {title ? <Title>{title}</Title> : null}
            {emailText ? <EmailText>{emailText}</EmailText> : null}
            {secondaryText ? (
              <SecondaryText>{secondaryText}</SecondaryText>
            ) : null}
          </div>
        </TitleBar>
      </Content>
      {children ? (
        <ChildrenContent> {children}</ChildrenContent>
      ) :
        children
      }
    </Container>

  );
};

export default Card;
