



import React, { useState, useEffect } from 'react';
import { Navbar, Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const Header = () => {
const [newsData, setNewsData] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [searchMessage, setSearchMessage] = useState('');

useEffect(() => {
    const fetchNewsData = async () => {
    try {
        const url = searchTerm
        ? `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=86937599d76b417a862a6bb92e9c74f1`
        : 'https://newsapi.org/v2/top-headlines?country=in&apiKey=86937599d76b417a862a6bb92e9c74f1';

        const response = await fetch(url);
        const responseData = await response.json();

        if (responseData.articles.length === 0) {
        setSearchMessage('No results found.');
        } else {
        setSearchMessage('');
        setNewsData(responseData.articles.slice(0, 12));
        }
    } catch (error) {
        console.error('Error fetching news data:', error);
        setSearchMessage('An error occurred while fetching news data.');
    }
    };

    fetchNewsData();
  }, [searchTerm]);

  const navbarStyle = {
    backgroundColor: 'black',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const color = {
    color: 'white',
    fontSize: '50px',
    fontWeight: 'bold',
  };

  const articleStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    height: '100%',
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchMessage('Searching...');
    // Trigger a new fetch when the user performs a search
    setNewsData([]); // Clear existing newsData
    // setNewsData will trigger a new fetch due to the dependency in useEffect
};

return (
    <>
    <header>
        <Navbar style={navbarStyle}>
        <Navbar.Brand style={color}>NewsApi Org</Navbar.Brand>
        </Navbar>
    </header>
      <hr />
      <Container>
        <Form onSubmit={handleSearch} className="mb-3">
          <Form.Group controlId="searchTerm">
            <Form.Control
              type="text"
              placeholder="Search for news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        {searchMessage && <Alert variant="info">{searchMessage}</Alert>}
        <h2 style={{ color: 'red', textAlign: 'center' }}>Latest News</h2>
        <Row xs={1} md={3} className="g-4">
        {newsData.map((article, index) => (
            <Col key={index}>
            <div style={articleStyle}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <img src={article.urlToImage} alt={article.title} style={{ maxWidth: '100%', height: 'auto' }} />
                <p>{article.content}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
                </a>
            </div>
            </Col>
        ))}
        </Row>
    </Container>
    <hr />
    </>
);
};

export default Header;



