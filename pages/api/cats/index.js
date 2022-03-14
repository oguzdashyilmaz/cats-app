import React from 'react'
import Nav from '../../../components/Nav/Nav'
import { useState, useEffect } from 'react';
import Card from '../../../components/Card/Card';

export default function index() {

  const [cats, setCats] = useState([])

  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const data = await response.json();
    console.log(data);
    setCats(data);
  }

  // to call the function above as soon as it renders:
  useEffect(() => {
    fetchCats();
  }, [input])

  return (
    <div>
      <Nav />
      {cats.map(cat => <Card name={cat.name} id={cat.id} phone={cat.phone} email={cat.email}
        image={cat.image} />)}
    </div>
  )
}
