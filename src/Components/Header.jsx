
import React from 'react';
import { Navbar, Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import useNewsStore from './store';

const Header = () => {
  const { newsData, searchTerm, searchMessage, setSearchTerm, handleSearch } = useNewsStore();

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
            <Button variant="primary" type="submit">
            Search
          </Button>
          </Form.Group>
          {/* <Button variant="primary" type="submit">
            Search
          </Button> */}
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




