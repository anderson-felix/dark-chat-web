/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { Modal, List, Input, notification, Image } from 'antd';

import {
  Container,
  InputArea,
  ListItem,
  ListWrapper,
  Message,
  Username,
  Avatar,
  ImageWrapper,
} from './styles';

const welcomeMessages = [
  'Boa pra noiz! Informe seu vulgo abaixo...',
  'Salve salve! Por qual username você atende?',
  'Aoba, beleza jovem? Como posso te chamar?',
];

const randomWelcomeMessage = () =>
  welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

const defaultUser = { username: '', avatar: '' };

interface User {
  username: string;
  avatar: string;
}

interface MessageData {
  user: User;
  message: string;
}

const Home: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [welcomeMessage] = useState(randomWelcomeMessage());

  const [newUsername, setNewUsername] = useState('');

  const [user, setUser] = useState<User>(defaultUser);

  const [showModal, setShowModal] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  useEffect(() => {
    const username = window.localStorage.getItem('username');
    const avatar = window.localStorage.getItem('avatar');

    if (username && avatar) {
      setUser({ username, avatar });
      socket?.emit('newuser', user);
    } else {
      setUser(defaultUser);
      setShowModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const handleSubmit = () => {
    if (newUsername.length < 3) return;

    setConfirmLoading(true);
    const avatar = `https://joesch.moe/api/v1/${Math.round(
      Math.random() * 1000,
    )}`;
    window.localStorage.setItem('username', newUsername);
    window.localStorage.setItem('avatar', avatar);

    socket?.emit('newuser', { username: newUsername, avatar });
    setUser({ username: newUsername, avatar });

    setTimeout(() => {
      setShowModal(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleMessages = (e: any) => {
    if (e.key === 'Enter' && currentMessage.length) {
      socket?.emit('chat', {
        user,
        message: currentMessage,
      });
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    const newSocket = io(String(process.env.NEXT_PUBLIC_API_URL));
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  useEffect(() => {
    if (socket) {
      socket.on('chat', (data: MessageData) => {
        setMessages([...messages, data]);
      });
    }
  }, [socket, messages]);

  useEffect(() => {
    if (socket) {
      socket.on('useronline', (newUser: User) =>
        notification.info({
          message: `${newUser.username} está online`,
          description: 'Bora trocar uma ideia?',
        }),
      );
    }
  }, [socket]);

  return (
    <Container>
      <ImageWrapper>
        <img
          id="adz-image"
          src="hero-image.png"
          alt="hero image"
          width="480px"
          height="230px"
        />
      </ImageWrapper>
      <ListWrapper>
        <List
          itemLayout="horizontal"
          dataSource={messages}
          renderItem={data => (
            <ListItem>
              <List.Item.Meta
                avatar={<Avatar src={data.user.avatar} />}
                title={<Username>{data.user.username}</Username>}
                description={<Message>{data.message}</Message>}
              />
            </ListItem>
          )}
        />
      </ListWrapper>
      <InputArea>
        <Input
          placeholder="Envie uma mensagem"
          value={currentMessage}
          onChange={(e: any) => setCurrentMessage(e.target.value)}
          onKeyDown={handleMessages}
        />
      </InputArea>
      <Modal
        title={welcomeMessage}
        visible={showModal}
        onOk={handleSubmit}
        confirmLoading={confirmLoading}
        closable={false}
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ disabled: newUsername.length < 3 }}
      >
        <Input
          autoFocus
          placeholder="Digite aqui"
          value={newUsername}
          onChange={e => setNewUsername(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
        />
      </Modal>
    </Container>
  );
};

export default Home;
