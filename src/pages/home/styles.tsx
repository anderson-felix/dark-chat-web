import React from 'react';
import styled from 'styled-components';
import { List as AntdList, Avatar as AntdAvatar } from 'antd';

const { Item } = AntdList;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  margin: auto;
  flex-direction: column;
  row-gap: 2rem;
  background-color: ${props => props.theme.colors.background};
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.3rem;
  color: #858da5;
  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.cardBackground};
    border-radius: 0.25rem;
  }
  .ant-empty-description {
    color: #fff;
  }

  transition: all 0.2s;

  &:hover {
    box-shadow: ${props => props.theme.boxShadow.largeShadow};
  }
`;

export const Avatar = styled(props => <AntdAvatar {...props} />)`
  margin: auto;
`;

export const ListItem = styled(props => <Item {...props} />)`
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background: ${props => props.theme.colors.cardBackground};
  border: none !important;
`;

export const Username = styled.p`
  color: #fff;
  margin: auto;
`;

export const Message = styled.p`
  color: #fff;
  margin: auto;
`;

export const InputArea = styled.div`
  width: 100%;
  max-height: 10rem;
`;
