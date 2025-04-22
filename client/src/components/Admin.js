import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AdminContainer = styled.div`
  max-width: 1200px;
  margin: 100px auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
`;

const MessagesList = styled.div`
  display: grid;
  gap: 20px;
`;

const MessageCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

const Name = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const Email = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const Subject = styled.h4`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 10px;
`;

const Message = styled.p`
  color: #555;
  line-height: 1.6;
`;

const Date = styled.span`
  font-size: 0.8rem;
  color: #888;
`;

const NoMessages = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-top: 50px;
`;

function Admin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      // API URL - use environment variable in development or the deployed URL in production
      const API_URL = process.env.NODE_ENV === 'production' 
        ? 'https://hitarth-portfolio-api.onrender.com/api/contact' 
        : 'http://localhost:5000/api/contact';
        
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        const data = await response.json();
        setMessages(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <AdminContainer><h2>Loading messages...</h2></AdminContainer>;
  if (error) return <AdminContainer><h2>Error: {error}</h2></AdminContainer>;

  return (
    <AdminContainer>
      <Title>Contact Messages Admin Panel</Title>
      
      {messages.length === 0 ? (
        <NoMessages>No messages found.</NoMessages>
      ) : (
        <MessagesList>
          {messages.map((msg) => (
            <MessageCard key={msg._id}>
              <MessageHeader>
                <div>
                  <Name>{msg.name}</Name>
                  <Email>{msg.email}</Email>
                </div>
                <Date>{new Date(msg.date).toLocaleString()}</Date>
              </MessageHeader>
              <Subject>{msg.subject}</Subject>
              <Message>{msg.message}</Message>
            </MessageCard>
          ))}
        </MessagesList>
      )}
    </AdminContainer>
  );
}

export default Admin; 