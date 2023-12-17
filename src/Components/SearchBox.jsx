// import React,{useState} from 'react';
// import {Form,Button} from 'react-bootstrap';
// import {useParams} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';



// const SearchBox = () => {
//     // const navigate = useNavigate();
//     const { keyword: urlKeyword } = useParams();
    
//       // FIX: uncontrolled input - urlKeyword may be undefined
//     const [keyword, setKeyword] = useState(urlKeyword || '');
    
    
//     const align={
        
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor:'red',
//         padding:'10px'
//     }

//     const placeHolder={
//         padding:'10px',
        
//             }

//     const form={
//         margin:'auto',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     }        
//     const submitHandler=(e)=>{
//         if (keyword) {
//             ({}`/search/${keyword.trim()}`);
//             setKeyword('');
//             }
//     }
    
//     return (
//         <Form onSubmit={submitHandler} className='d-flex' style={form}>
//         <Form.Control
//             type='text'
//             name='q'
//             onChange={(e) => setKeyword(e.target.value)}
//             value={keyword}
//             placeholder='Search news...'
//             className='mr-sm-2 ml-sm-5'
//             style={placeHolder}
            
//         ></Form.Control>
//         <Button type='submit' variant='outline-light' className='p-2 mx-2' style={align}>
//             Search
//         </Button>
//         </Form>
//     );
//     };

// export default SearchBox


// const submitHandler = (e) => {
    //     e.preventDefault();
    //     if (keyword) {
    //     navigate(`/search/${keyword.trim()}`);
    //     setKeyword('');
    //     } else {
    //     navigate('/');
    //     }
    // };


    // SearchBox.jsx
// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';

// const SearchBox = () => {
//   const history = useHistory();
//   const [keyword, setKeyword] = useState('');

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (keyword.trim()) {
//       history.push(`/search/${keyword.trim()}`);
//       setKeyword('');
//     }
//   };

//   return (
//     <Form onSubmit={submitHandler} className='d-flex'>
//       <Form.Control
//         type='text'
//         name='q'
//         onChange={(e) => setKeyword(e.target.value)}
//         value={keyword}
//         placeholder='Search News...'
//         className='mr-sm-2 ml-sm-5'
//       />
//       <Button type='submit' variant='outline-light' className='p-2 mx-2'>
//         Search
//       </Button>
//     </Form>
//   );
// };

// export default SearchBox;
